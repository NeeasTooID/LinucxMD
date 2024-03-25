import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Linknya Mana Kak', m)
m.reply(wait)
let api = await fetch(`https://api.lolhuman.xyz/api/ssweb?apikey=${global.lolkey}&url=${args[0]}`)
let data = await api.buffer()

   conn.sendMessage(m.chat, { image: data, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb <url>']
handler.tags = ['internet']
handler.command = /^(ssweb|ss)$/i

handler.limit = true
handler.fail = null

export default handler