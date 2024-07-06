let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Blackpink`
  let res = API('http://api.botcahx.eu.org', '/api/textpro/black-pink', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['blackpink']
handler.tags = ['maker']
handler.command = /^(blackpink)$/i
handler.limit = true
export default handler
