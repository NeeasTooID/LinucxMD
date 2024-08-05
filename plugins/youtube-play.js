import fetch from "node-fetch";
import yts from "yt-search";
import _ from "lodash";
const handler = async (m, {
  conn,
  command,
  args,
  usedPrefix
}) => {
  try {
    const text = _.get(args, "length") ? args.join(" ") : _.get(m, "quoted.text") || _.get(m, "quoted.caption") || _.get(m, "quoted.description") || null;
    if (!text) return m.reply(`Masukkan teks atau balas pesan dengan teks yang ingin diolah.\nContoh penggunaan:\n*${usedPrefix}${command} Hai, apa kabar?*`);
    const isMP3 = /^(play|ytplay|ytmp3|playmp3)$/i.test(command);
    let data = null;
    const vid = /^(https?:\/\/)?(www\.)?((youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}))$/.test(text) ? (data = await ytdl(text, isMP3 ? "audio" : "video"), await ytsearch(data.title)) : await ytsearch(text);
    if (!vid?.url) throw new Error("Video tidak ditemukan. Silakan coba kata kunci lain.");
    const {
      title = "Tidak Diketahui",
        thumbnail,
        timestamp = "Tidak Diketahui",
        views = "Tidak Diketahui",
        ago = "Tidak Diketahui",
        url
    } = vid;
    const captvid = `📺 *Judul:* ${title}\n⌛ *Durasi:* ${timestamp}\n👀 *Views:* ${(n => n.toLocaleString("id-ID", {
maximumFractionDigits: 1
}).replace(/\.0$/, "") + [ "", "rb", "jt", "m" ][Math.floor(Math.log10(parseInt(views)) / 3)])(parseInt(views) / Math.pow(1e3, Math.floor(Math.log10(parseInt(views)) / 3)))}\n📅 *Upload:* ${ago}\n🔗 *Link:* ${url}`;
    const ytthumb = (await conn.getFile(thumbnail))?.data;
    const infoReply = {
      contextInfo: {
        externalAdReply: {
          body: `Mengunduh ${isMP3 ? "audio" : "video"}, harap tunggu...`,
          mediaType: isMP3 ? 1 : 2,
          mediaUrl: url,
          previewType: 0,
          renderLargerThumbnail: true,
          sourceUrl: url,
          thumbnail: ytthumb,
          title: `Y O U T U B E - ${isMP3 ? "A U D I O" : "V I D E O"}`
        }
      }
    };
    await conn.reply(m.chat, captvid, m, infoReply);
    infoReply.contextInfo.externalAdReply.body = `Berhasil memutar ${isMP3 ? "audio" : "video"}`;
    if (!data) data = await ytdl(url, isMP3 ? "audio" : "video");
    const {
      buffer,
      contentType
    } = data;
    const isAudio = contentType?.startsWith("audio");
    const isVideo = contentType?.startsWith("video");
    if (isAudio || isVideo) {
      await conn.sendMessage(m.chat, {
        [isAudio ? "audio" : "video"]: buffer,
        caption: captvid,
        mimetype: isAudio ? "audio/mpeg" : "video/mp4",
        contextInfo: infoReply.contextInfo
      }, {
        quoted: m
      });
    } else {
      await conn.sendMessage(m.chat, {
        text: `Media tidak ditemukan dalam format yang diinginkan.`,
        contextInfo: infoReply.contextInfo
      }, {
        quoted: m
      });
    }
  } catch (e) {
    console.error(e);
    m.react(eror);
  }
};
handler.help = ["play <pencarian>"];
handler.tags = ["downloader"];
handler.command = /^(play|ytplay|ytmp3|playmp3|playmp4|ytplaymp4)$/i;
handler.limit = true;
export default handler;
async function ytdl(ytUrl, type = "audio") {
  const apis = [{
    link: "https://api.yowes.net/youtube/download",
    param: {
      url: ytUrl
    }
  }, {
    link: "https://downloader-six.vercel.app/api/getVideoInfo",
    param: {
      url: ytUrl
    }
  }, {
    link: "https://api.freedl.cc/api/info",
    param: {
      query: ytUrl
    }
  }, {
    link: "https://yozora.vercel.app/api/info",
    param: {
      query: ytUrl
    }
  }];
  let result, mediaList;
  for (const api of apis) {
    const params = new URLSearchParams(api.param).toString();
    const data = await fetch(`${api.link}?${params}`).then(res => res.json().catch(() => null));
    result = data;
    mediaList = data?.urls?.filter(item => item.mimeType) || data?.formats?.filter(item => item.quality && item.url) || [];
    if (mediaList.length) break;
  }
  if (!result || !mediaList.length) throw new Error("Failed to fetch video info. No formats or urls available.");
  const validMedia = (await Promise.all([...mediaList, `https://api.cafirexos.com/api/v1/yt${type === "audio" ? "mp3" : "mp4"}?url=${ytUrl}`, `https://api.cafirexos.com/api/v2/yt${type === "audio" ? "mp3" : "mp4"}?url=${ytUrl}`].map(async itemUrl => {
    try {
      const headResponse = await fetch(itemUrl, {
        method: "HEAD"
      });
      const contentType = headResponse.headers.get("content-type");
      if (headResponse.ok && (contentType?.startsWith("video") || contentType?.startsWith("audio"))) {
        const mediaResponse = await fetch(itemUrl);
        return {
          url: itemUrl,
          buffer: Buffer.from(await mediaResponse.arrayBuffer()),
          contentType: contentType
        };
      }
    } catch {}
    return null;
  }))).find(v => v);
  if (!validMedia) throw new Error("No valid media found.");
  return {
    title: result.videoDetail?.title || result.title || "Tidak Diketahui",
    ...validMedia
  };
}
async function ytsearch(query, maxResults = 5, similarityThreshold = .5) {
  try {
    const res = await yts(query);
    const videos = _.filter(res.videos.slice(0, maxResults), video => {
      const titleWords = _.words(_.toLower(video.title));
      const queryWords = _.words(_.toLower(query));
      const matchedWords = _.intersection(titleWords, queryWords);
      const similarity = _.size(matchedWords) / _.size(titleWords);
      return similarity >= similarityThreshold || _.size(matchedWords) >= _.size(queryWords) - 1;
    });
    return _.isEmpty(videos) ? {} : _.first(videos);
  } catch {
    return {};
  }
}