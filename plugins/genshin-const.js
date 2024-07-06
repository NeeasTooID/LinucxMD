import genshindb from 'genshin-db'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	try {
	  if (!text) throw `Example : *${usedPrefix + command} eula*`
	  let data = await genshindb.constellation(text)
	  let capt = `
*${data.name} Constellation*

\`\`\`Constellation 1\`\`\`

*Name:* ${data.c1.name}
*Effect:* 
${data.c1.effect}


\`\`\`Constellation 2\`\`\`

*Name:* ${data.c2.name}
*Effect:* 
${data.c2.effect}


\`\`\`Constellation 3\`\`\`

*Name:* ${data.c3.name}
*Effect:* 
${data.c3.effect}


\`\`\`Constellation 4\`\`\`

*Name:* ${data.c4.name}
*Effect:* 
${data.c4.effect}


\`\`\`Constellation 5\`\`\`

*Name:* ${data.c5.name}
*Effect:* 
${data.c5.effect}


\`\`\`Constellation 6\`\`\`

*Name:* ${data.c6.name}
*Effect:* 
${data.c6.effect}
`
conn.sendMessage(m.chat, {
      text: capt,
      contextInfo: {
      externalAdReply: {
      title: `Constellation ${data.name}`,
      body: 'Genshin impact indonesia',
      thumbnailUrl: 'https://telegra.ph/file/ad97d25bbf284a2b2c3e1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: m })
      } catch (e) {
        console.log(e)
        m.reply('Characters Not Found')
   }
}
handler.command = /^(constellation|const)$/i
handler.tags = ['genshin']
handler.help = ['constellation <characters>']
handler.group = true
handler.register = false

export default handler