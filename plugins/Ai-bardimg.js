import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || '' 
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    let buffer = await q.download()
    await m.reply(wait)    
    try {
      let media = await uploadImage(buffer)
      let json = await (await fetch(`https://api.botcahx.eu.org/api/search/bard-img?url=${media}&text=${text}&apikey=${global.btc}`)).json()  
      conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
    } catch (err) {
      throw `${eror}`
    }
  } else {
    throw `Reply image with command ${usedPrefix + command} pertanyaan`
  }
}

handler.help = ['bardimg']
handler.tags = ['ai']
handler.command = /^(bardimg|bardimage)$/i
handler.limit = true;

export default handler