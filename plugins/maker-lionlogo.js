let handler = async (m, { conn, text, usedPrefix, command }) => {
  let [teks1, teks2] = text.split('|')
  if (!teks1 || !teks2) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} Singa|Harimau`)
  let res = API('https://api.botcahx.eu.org', '/api/textpro/lion-logo', { text: teks1, text2: teks2 }, 'apikey')
  conn.sendFile(m.chat, res, 'lion.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['logolion']
handler.tags = ['maker']
handler.command = /^(logolion)$/i

handler.limit = true

export default handler
