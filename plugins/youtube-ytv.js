/*let fs = require("fs");
let ytdl = require("distube/ytdl-core");

let handler = async (m, { conn, args, usedPrefix, command }) => {
	conn["youtube_mp4"] = conn["youtube_mp4"] ? conn["youtube_mp4"] : {};
	if (m.sender in conn["youtube_mp4"]) {
		return;
	}

	if (!args[0]) {
		return m.reply(
			`example: *${
				usedPrefix + command
			}* https://www.youtube.com/watch?v=K9_VFxzCuQ0`
		);
	}
	const isValid = await ytdl.validateURL(args[0]);
	if (!isValid) {
		return m.reply("*your link not suported.*");
	}
	conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	});

	const _filename = `./tmp/${Math.random().toString(36).substring(2, 7)}.mp4`;
	const writer = fs.createWriteStream(_filename);

	conn["youtube_mp4"][m.sender] = true;
	try {
		const { formats, videoDetails } = await ytdl.getInfo(args[0]);
		const { title, description, publishDate, author, isFamilySafe } =
			videoDetails;
		const { user } = author;
		return new Promise(async (resolve, reject) => {
			ytdl(args[0], {
				quality: "lowest",
			}).pipe(writer);
			writer.on("error", () => {
				m.reply("Failed sending video");
				delete conn["youtube_mp4"][m.sender];
				resolve();
			});
			writer.on("close", async () => {
				try {
					await conn.sendMessage(
						m.chat,
						{
							video: {
								stream: fs.createReadStream(_filename),
							},
							caption: `  ◦ *Title*: ${title}\n  ◦ *Published*: ${publishDate}\n  ◦ *Author*: ${user}\n\nYTdl By https://github.com/fent/node-ytdl-core\nSearch By https://github.com/talmobi/yt-search\nSent By Assistant Yula💕`,
						},
						{ quoted: m }
					);
				} catch {
					await conn.sendMessage(
						m.chat,
						{
							document: {
								stream: fs.createReadStream(_filename),
							},
							fileName: `${title}.mp4`,
							mimetype: "video/mp4",
							caption: `  ◦ *Title*: ${title}\n  ◦ *Published*: ${publishDate}\n  ◦ *Author*: ${user}\n\nYTdl By https://github.com/fent/node-ytdl-core\nSearch By https://github.com/talmobi/yt-search\nSent By Assistant Yula💕`,
						},
						{ quoted: m }
					);
				}
				fs.unlinkSync(_filename);
				delete conn["youtube_mp4"][m.sender];
				resolve();
			});
		});
	} catch {
		m.reply("*Failed get a video:(*");
	}
};

const { youtubedlv2, youtubedl } = require('@bochilteam/scraper')

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `example: *${usedPrefix}${command}* https://www.youtube.com/watch?v=K9_VFxzCuQ0`
  const v = args[0]

  const resolutions = ["144p", "240p", "360p"]
  let qu = args[1] && resolutions.includes(args[1]) ? args[1] : "240p"
  let q = qu.replace('p', '')

  let thumb = {}
  try {
    const thumb2 = yt.thumbnails[0].url
    thumb = { jpegThumbnail: thumb2 }
  } catch (e) {}

  let yt
  try {
    yt = await youtubedl(v)
  } catch {
    yt = await youtubedlv2(v)
  }

  const title = await yt.title

  let size = ''
  let dlUrl = ''
  let selectedResolution = ''
  let selectedQuality = ''
  for (let i = resolutions.length - 1; i >= 0; i--) {
    const res = resolutions[i]
    if (yt.video[res]) {
      selectedResolution = res
      selectedQuality = res.replace('p', '')
      size = await yt.video[res].fileSizeH
      dlUrl = await yt.video[res].download()
      break
    }
  }

  if (dlUrl) {
    await m.reply(`YuLa Mengambil Data . . . .`)

    await conn.sendMessage(m.chat, { video: { url: dlUrl, caption: title, ...thumb } }, { quoted: m })

  } else {
    await m.reply(`Video Tidak Dapat Di Unduh.`)
  }
}*/
import api from 'api-dylux';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  
if (!args[0]) throw `example: *${usedPrefix}${command}* https://www.youtube.com/watch?v=K9_VFxzCuQ0`
if (!args[0].match(/youtu/)) throw `URL Yang Tuan Berikan *Salah!!!*`
m.reply(wait)
    try {
    let data = await api.ytmp4(args[0])
    
      conn.sendFile(m.chat, data.dl_url, "mtype.mp4", null, m)
      } catch (e) {
		console.log(e)
		m.reply(eror)
	}
}
handler.help = ["ytmp4 <url>"]
handler.tags = ["downloader"];
handler.command = /^(yt(v|mp4))$/i;

handler.register = false
handler.premium = false
handler.limit = true

export default handler