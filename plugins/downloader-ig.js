import { instagram } from 'betabotz-tools';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.instagram.com/reel/CvYLRDVx9cY/?igshid=NTc4MTIwNjQ2YQ==`
       try {
    var api = await instagram(args[0])
    m.reply(wait)
for (var array of api.result) {
conn.sendFile(m.chat, array._url, 't.mp4', '*(IGTV, POST, VIDEO, REEL, ETC)*', m)
}
  } catch (e) {
		console.log(e)
		m.reply(eror)
	}
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram(dl)?)$/i
handler.register = false
handler.limit = true

export default handler
