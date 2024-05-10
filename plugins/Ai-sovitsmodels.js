import axios from 'axios';

let handler = async (m, { conn, command, usedPrefix }) => {
    let api = `https://api.itsrose.rest/sovits/tts/get_models`
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
	const { data } = await axios.get(api, { headers: { Authorization: `${global.rose}` }});
    let capt = `
*SOVITS Models*

${data.result.map(v => `*Name:* ${v.name}\n*ID:* ${v.model_id}`).join`\n\n`}
    `.trim()
    m.reply(capt);
}
handler.help = ['sovitsmodel'].map(v => v + ' <query>')
handler.tags = ['ai', 'search']
handler.command = /^(sovitsmodel)$/i
handler.limit = false
export default handler