import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/editor/cartoon?apikey=${global.lolkey}&img=${out}` }, caption: `*Sudah Jadi Cartoon Tuan*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['jadicartoon']
handler.tags = ['ai']
handler.command = /^((to|jadi)cartoon)$/i

handler.register = false
handler.limit = true

export default handler