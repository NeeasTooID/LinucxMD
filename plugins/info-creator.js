function handler(m) {
  
  const kontak = {
	"displayName": `${global.info.nameown}`,
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.info.nameown}\nitem1.TEL;waid=${global.info.nomorown}:${global.info.nomorown}\nitem1.X-ABLabel:My Owner\n\nURL:maximusstoreindonesia@gmail.com\nORG: SEWABOT, PANEL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler