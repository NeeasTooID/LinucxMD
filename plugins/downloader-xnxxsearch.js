import fetch from 'node-fetch';
import api from 'api-dylux';

let handler = async (m, { conn, text, command, usedprefix }) => {
    let chat = db.data.chats[m.chat]
    if (!text) throw `Text Nya Mana?\n\nContoh:\n*.xnxx jepang*`
    let maxim = await api.xnxxSearch(text)
     m.reply(wait)
    let capt = `
*18+ CONTENT*

${maxim.result.map(v => `*Name:* ${v.title}\n*Link:* ${v.link}\n======================`).join`\n\n`}
    `.trim()
    conn.sendMessage(m.chat, {
                text: capt,
                contextInfo: {
                    externalAdReply: {
                        title: "XNXX Search",
                        body: "Powered by Maximus",
                        thumbnailUrl: "https://telegra.ph/file/cc76b2489d0d070e82870.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['xnxx'].map(v => v + ' <query>')
handler.tags = ['nsfw', 'downloader']
handler.command = /^xnxx$/i
handler.limit = true
handler.nsfw = true

export default handler;