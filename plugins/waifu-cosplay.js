import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.xyroinee.xyz/api/sfw/cosplay?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, '', '_Random Cosplay_', m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['waifu']
handler.help = ['cosplay']
handler.limit = true
handler.group = true
export default handler