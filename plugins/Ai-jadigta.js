import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let api = await fetch(`http://api.botcahx.eu.org/api/maker/jadigta?url=${out}&apikey=${global.btc}`)
			let data = await api.json()
			let max = data.result
			conn.sendFile(m.chat, max, 'mmk.png', wm, m)
		} catch (e) {
			console.log(e)
			m.reply(eror)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['jadigta']
handler.tags = ['ai']
handler.command = /^((to|jadi)gta)$/i

handler.register = false
handler.limit = true

export default handler