import uploadFile from '../lib/uploadFile.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Balas Gambar Dengan Caption\n${usedPrefix + command}`
    await m.reply(wait)
    let img = await q.download()
    let url = await uploadFile(img)
    let meme = API('lol', '/api/editor/triggered', { img: url }, 'apikey')
    let stiker = await sticker(false, meme, stickpack, stickauth)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
}
handler.help = ['triggered']
handler.tags = ['sticker']
handler.command = /^(triggered)$/i
handler.limit = true
export default handler