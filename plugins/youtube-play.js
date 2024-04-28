import ytdl from 'ytdl-core';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import search from 'yt-search';

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*example*: .play YUSUP909');
  try {
    let results = await search(text);
    let videoId = results.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let url = info.videoDetails.video_url;
    let duration = parseInt(info.videoDetails.lengthSeconds);
    let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
    let views = info.videoDetails.viewCount;
    let minutes = Math.floor(duration / 60);
    let description = results.videos[0].description;
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
}

    let audio = ytdl(videoId, { quality: 'highestaudio' });
    let inputFilePath = 'tmp/' + title + '.webm';
    let outputFilePath = 'tmp/' + title + '.mp3';

    let viewsFormatted = formatViews(views);
    let infoText = `  ◦ *Duration*: ${durationText}
  ◦ *Upload*: ${uploadDate}
  ◦ *Views*: ${viewsFormatted}
  
YTdl By https://github.com/fent/node-ytdl-core
Search By https://github.com/talmobi/yt-search
Sent By Assistant ${global.info.namebot}`;

    var pesan = conn.sendMessage(m.chat, {
            text: infoText,
            contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.info.channel,
                   serverMessageId: null,
                   newsletterName: global.info.namechannel,
                   },
                   externalAdReply: {
                   title: "AUDIO SEDANG DI KIRIM",
                   body: `Youtube Play by Assisten ${global.info.namebot}`,
                   thumbnailUrl: thumbnailUrl,
                   sourceUrl: "https://youtube.com",
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, {});

    audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
      ffmpeg(inputFilePath)
        .toFormat('mp3')
        .on('end', async () => {
          let thumbnailData = await conn.getFile(thumbnailUrl);
          let buffer = fs.readFileSync(outputFilePath);
          conn.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg' }, { quoted: m });
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .on('error', (err) => {
          console.log(err);
          m.reply(`There was an error converting the audio: ${err.message}`);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .save(outputFilePath);
    });

  } catch (e) {
    console.log(e);
    m.reply(`An error occurred while searching for the song: ${e.message}`);
  }
};

handler.help = ['youtubeplay'].map(v => v + ' name/url');
handler.tags = ['downloader'];
handler.command = /^(ytplay|play|youtubeplay|song|music)$/i;
handler.register = false
handler.premium = false;
handler.limit = true;

export default handler