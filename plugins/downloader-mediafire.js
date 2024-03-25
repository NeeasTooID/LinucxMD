import { mediafiredl } from '@bochilteam/scraper';
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/1xgaov026oc44n0/photo_2021-02-05_10-13-39.jpg/file`
    try {
    let res = await mediafiredl(args[0])
    let caption = `
*💌 Name:* ${res.filename}
*⏱️ Upload:* ${res.aploud}
*📁 Ukuran:* ${res.filesizeH}
`.trim()
    m.reply(caption)
    await conn.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype: res.filetype }, { quoted: m })
       } catch (e) {
		console.log(e)
		m.reply(`Sistem Yula *Error*`)
	}
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler