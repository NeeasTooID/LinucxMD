import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js' 

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Foto Dengan Caption .hdrv'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
try {
let hasil = await fetch(`https://api.caliph.biz.id/api/upscale/v2?img=${url}&scale=2&apikey=U8T3IhKD`)
let hehw = await hasil.json()
await conn.sendFile(m.chat, hehw.data.img, '', '_Nih Kak Hasilnya_', m)
} catch (e) {
m.reply(eror)
}}
handler.command = /^(hdrv)$/i

handler.register = false
handler.limit = 100

export default handler