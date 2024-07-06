import { spotifydl } from 'betabotz-tools';

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} url*\n\nExample: ${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
    if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
      try {
	let res = await spotifydl(text)
	m.reply(wait)
    conn.sendFile(m.chat, res.result.url, 'kasar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
      } catch (e) {
		console.log(e)
		m.reply(eror)
	}
}

handler.help = ['spotify'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(spotify(a(audio)?|mp3)?)$/i

handler.limit = true;

export default handler