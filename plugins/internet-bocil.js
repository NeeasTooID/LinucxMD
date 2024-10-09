import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  conn.sendFile(m.chat, json.url, '', '_Nih Kak_', m)
}
handler.help = ['bocil']
handler.tags = ['internet']
handler.limit = true
handler.command = /^(bocil)$/i

export default handler
