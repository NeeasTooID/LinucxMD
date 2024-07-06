import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   let maximus = `
-= *GROUP BOT WHATSAPP* =-

https://chat.whatsapp.com/FJRtTzRKxP8A2wT6fcCW3s`
		await conn.sendMessage(m.chat, {
                text: maximus,
                contextInfo: {
                    externalAdReply: {
                        title: "YuLa | Online Bot",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/7a20200e053f8906d375f.jpg",
                        sourceUrl: "https://chat.whatsapp.com/FJRtTzRKxP8A2wT6fcCW3s",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {quoted: m})
	} catch (e) {
		console.log(e)
		throw `Fitur Error.`
	}
}

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot)$/i

handler.register = false
handler.premium = false
handler.limit = false

export default handler