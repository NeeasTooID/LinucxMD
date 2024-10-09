import api from 'api-dylux';

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Melukis Senja`
    let res = await api.spotifySearch(text)
    m.reply(wait)
	let get_result = res.result
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

handler.help = ['spotifysearch'].map(v => v + ' <query>')
handler.tags = ['downloader', 'tools']
handler.command = /^spot(ify)?search$/i
handler.limit = true;
handler.register = true;

export default handler