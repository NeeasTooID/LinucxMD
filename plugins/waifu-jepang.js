import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.xyroinee.xyz/api/asupan/image/japan?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(japan)$/i
handler.tags = ['waifu']
handler.help = ['japan']
handler.premium = false
handler.limit = true
handler.group = true

export default handler