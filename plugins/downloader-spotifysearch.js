import { spotify } from 'betabotz-tools';

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Melukis Senja`
    let res = await spotify(text)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
	let get_result = res.result.data
	let ini_txt = `Found : *${text}*`
	for (var x of get_result) {
		ini_txt += `\n\n*Title : ${x.title}*\n`
		ini_txt += `Artists : ${x.artist}\n`
		ini_txt += `Duration : ${x.duration}\n`
		ini_txt += `Link : ${x.url}\n\n`
		ini_txt += `───────────────────`
	}
	m.reply(ini_txt)
}

handler.help = ['spotsearch'].map(v => v + ' <query>')
handler.tags = ['downloader', 'tools']
handler.command = /^spot(ify)?search$/i
handler.premium = false
handler.limit = true

export default handler