import ytdl from 'ytdl-core';
import { youtubedl } from '@bochilteam/scraper-sosmed';

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!(args[0] || '').match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`Example: *${usedPrefix}${command}* https://www.youtube.com/watch?v=K9_VFxzCuQ0`)
	await m.reply(wait);
	try {
		let anu = await youtubedl(args[0]);
		let list = Object.keys(anu.video).toString()
		let data = anu.video[`${list.includes('36') ? '360p' : list.includes('24') ? '240p' : '144p'}`]
		let url = await data.download()
		if (data.fileSize > 50000) return m.reply(`Filesize: ${data.fileSizeH}\nTidak dapat mengirim, maksimal file 50 MB`)
		let txt = `*${anu.title}*\n\n`
		+ `⌲ Resolution : ${data.quality}\n`
		+ `⌲ Size : ${data.fileSizeH}`
		await conn.sendFile(m.chat, url, `${anu.title}.mp4`, txt, m)
	} catch (e) {
		console.log(e)
		try {
			let res = await ytdl.getURLVideoID(args[0]);
			let anu = await ytdl.getInfo(res)
			let data, det = anu.videoDetails
			for (let x of ['360','480','240']) {
				if (!data) data = anu.formats.find(v => v.mimeType.includes('video') && v.audioBitrate !== null && (v.qualityLabel || '').includes(x))
			}
			if (!data) throw Error()
			let size = parseInt(data.bitrate)
			let buffer = Buffer.from(await (await fetch(data.url)).arrayBuffer())
			let buffl = Buffer.byteLength(buffer)
			if (size > 50000000) return m.reply(`Tidak dapat mengirim, maksimal file 50 MB`)
			let txt = `*${det.title}*\n\n`
			+ `⌲ Resolution : ${data.width} x ${data.height}\n`
			+ `⌲ Watch : ${args[0]}\n`
			await conn.sendFile(m.chat, buffer, `${det.title}.mp4`, txt, m)
		} catch (e) {
			console.log(e)
			throw global.eror
		}
	}
};

handler.menudownload = ['ytvideo <url>']
handler.tagsdownload = ['downloader']
handler.command = /^(yt(v(ideo)?|mp4))$/i

handler.premium = false
handler.limit = true

export default handler