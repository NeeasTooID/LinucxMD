import api from 'api-dylux';

var handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
		var teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
		if (!teks) throw `Use example ${usedPrefix}${command} Indonesia raya`
	try {
		var maxim = await api.lyrics(teks);
		let lyricst = maxim.lyrics
		let data = `*Title :* \`${maxim.title}\`\n`
		data += `*Artist :* ${maxim.artist}\n\n`
		data += `\`LYRICS\`\n\n`
		data += lyricst.replace('\'')
		conn.sendMessage(m.chat, {
                text: data,
                contextInfo: {
                    externalAdReply: {
                        title: "Lyrics Search",
                        body: "Powered by Maximus",
                        thumbnailUrl: maxim.image ? maxim.image : "https://telegra.ph/file/8cc4c40b303872675f7bb.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
	} catch (e) {
		console.log(e)
		m.reply(eror)
	}
}

handler.help = ['lirik'].map(v => v + ' name song')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

export default handler;