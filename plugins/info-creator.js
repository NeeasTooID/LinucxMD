import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `Not Famous`, `yusup90990@gmail.com`, `🇮🇩 Indonesia`, `📍 https://linucx-md.vercel.app/`, `👤 Owner LinucxMD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 Dont Spam`, `neastooidd@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/NeeasTooID/LinucxMD`, `Hanya bot biasa yang kadang error ☺`]
  ], )
  await m.reply(`Hello @${m.sender.split(`@`)[0]} Thats my owner, dont spam or i will block u`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler
