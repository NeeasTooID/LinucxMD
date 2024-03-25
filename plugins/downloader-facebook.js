import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.facebook.com/100034398106754/posts/pfbid02LRjmLBf4PfbUJ67TNWGY8oZwmPJg18BmBK3E9sZ6Hup6jhAZJoHVRWkRGdPUuPMUl/?app=fbl`
    try {
    var data = await( await fetch(`https://api.betabotz.eu.org/api/download/fbdown?url=${args[0]}&apikey=${args[0]}`)).json()
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
conn.sendFile(m.chat, data.result.Normal_video, 't.mp4', '*FACEBOOK DOWNLOADER*\n\n_Reso : SD_', m)
conn.sendFile(m.chat, data.result.HD, 't.mp4', '*FACEBOOK DOWNLOADER*\n\n_Reso : HD_', m)
  } catch (e) {
		console.log(e)
		m.reply(`*Server YuLa Down*`)
	}
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(fb|facebook|fbdl?)$/i
handler.limit = true

export default handler