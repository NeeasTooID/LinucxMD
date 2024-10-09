import fs from 'fs'
const { S_WHATSAPP_NET } =  (await import('@adiwajshing/baileys')).default
import Jimp from 'jimp'
let handler = async (m, { conn }) => {
var image = m.quoted ? m.quoted : m
var mime = (image.msg || image).mimetype || ''
var media = await image.download()
            const group = m.chat
            var { img } = await generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            target: group,
            to: S_WHATSAPP_NET,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`DONE ✅`)
}
handler.help = ['setppgc'].map(v => v + ' <caption / reply image>')
handler.tags = ['adminry']
handler.command = /^(setppgc|setppgrup|setppgroup)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler 

async function generateProfilePicture(buffer) {
	const jimp_1 = await Jimp.read(buffer);
	const minz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(720, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 720)
	const jimp_2 = await Jimp.read(await minz.getBufferAsync(Jimp.MIME_JPEG));
	return {
	  img: await minz.getBufferAsync(Jimp.MIME_JPEG)
	}
}