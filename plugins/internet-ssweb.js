import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Linknya Mana Kak', m)
m.reply(wait)
let api = await fetch(`https://api.botcahx.eu.org/api/tools/ssweb?url=${args[0]}&device=desktop&apikey=${global.btc}`)
let data = await api.buffer()

   conn.sendMessage(m.chat, { image: data, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb <url>']
handler.tags = ['internet']
handler.command = /^(ssweb|ss)$/i
handler.limit = true;
handler.register = true;

export default handler;