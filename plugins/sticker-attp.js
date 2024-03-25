import { Sticker } from 'wa-sticker-formatter'
let handler = async (m, { conn, command, text }) => {
	try {
	if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)
	let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
	let res = API('https://api.lolhuman.xyz', '/api/attp', { text: teks }, 'apikey')
	let stiker = await createSticker(res, false, stickpack, stickauth)
	conn.sendFile(m.chat, stiker, 'RyHar.webp', '', m, false)
	} catch (e) {
		throw 'Terjadi Error...'
		}
}
handler.command = /^(attp)$/i
handler.tags = ['sticker']
handler.help = ['attp']

handler.limit = true

export default handler
async function createSticker(res, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: stickpack,
		author: stickauth,
		quality
	}
	return (new Sticker(res ? res : url, stickerMetadata)).toBuffer()
}