import fetch from 'node-fetch';
import uploadFile from '../lib/uploadFile.js';

let war = global.maxwarn
let handler = m => m
handler.before = async function(m, { conn }) {
 let chat = db.data.chats[m.chat]
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (chat.antiPorn) {
  if (/image/.test(mime)) {
   let media = await q.download();
   let url = await uploadFile(media);
   const xmaze = `NSFW`
   try {
     let data = await( await fetch(`https://api.betabotz.eu.org/api/tools/nsfw-detect?url=${url}&apikey=${global.lann}`)).json()
      
      if (data.result.labelName.includes(xmaze)) {
      let warn = db.data.users[m.sender].warn
     await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
        if (warn < war) {
            global.db.data.users[m.sender].warn += 1
            m.reply(`*Kamu mendapatkan [ 1 ] Peringatan ! ! !*`)
        } else if (warn == 3) {
            m.reply(`Anda selalu melanggar peraturan. kamu akan di keluarkan.`)
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
      }
   } catch (e) {
    console.log(e)
   }
  }
 }
};

export default handler;