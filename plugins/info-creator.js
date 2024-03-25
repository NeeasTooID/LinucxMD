
function handler(m) {
  
  const kontak = {
	"displayName": `${global.nameown}`,
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.nameown}\nitem1.TEL;waid=${global.info.nomorown}:${global.info.nomorown}\nitem1.X-ABLabel:\nMy Owner\nURL;Email Owner: ${global.mail}\nORG: Powered by Npnpicy\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler