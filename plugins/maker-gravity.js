let handler = async (m, { conn, args, usedPrefix, command }) => {
  let teks = args.join(' ').split('|')
  if (!teks[0] || !teks[1]) return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Maker|Gravity`)
  let res = API('http://api.botcahx.eu.org', '/api/textpro/grafity-text2', { text: teks[0], text2: teks[1] }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['gravity']
handler.tags = ['maker']
handler.command = /^(gravity)$/i

handler.limit = true

export default handler
