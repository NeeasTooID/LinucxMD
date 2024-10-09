let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Blackpink`
  let res = API('http://api.botcahx.eu.org', '/api/textpro/ice', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['logoice']
handler.tags = ['maker']
handler.command = /^(logoice)$/i
handler.limit = true
export default handler
