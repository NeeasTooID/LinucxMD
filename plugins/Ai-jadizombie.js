import uploadImage from '../lib/uploadImage.js';
import { tozombie } from 'betabotz-tools';

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let api = await tozombie(out)
			await conn.sendMessage(m.chat, { image: { url: api.image_data }, caption: `*Zombie² Apa Dalam Bambo? ZomBu*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(eror)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['tozombie'].map(v => v + ' <caption / reply image>')
handler.tags = ['ai']
handler.command = /^((to|jadi)zombie)$/i

handler.register = false
handler.limit = true

export default handler