import uploadImage from '../lib/uploadImage.js';
import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `*reply/send ur image with .${command}*`
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let api = `https://api.itsrose.life/image/stable/prompter?url=${url}`
  const { data } = await axios.get(api, { headers: { Authorization: `${global.rose}` }});
  let cap = `${data.result.prompt}`
  m.reply(cap)
  	}
handler.help = ['prompt <reply image>']
handler.tags = ['ai']
handler.command = /^(prompt)$/i
handler.register = false
handler.premium = false
handler.limit = true

export default handler