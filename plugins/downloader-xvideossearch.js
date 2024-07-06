import fetch from 'node-fetch';
import api from 'api-dylux';

let handler = async (m, { conn, text, command, usedprefix }) => {
    let chat = db.data.chats[m.chat]
    if (!text) throw `text nya mana?\n\ncontoh:\n*.xnxxsearch jepang*`
    let maxim = await api.xvideosSearch(text)
     m.reply(wait)
    let capt = `
*18+ CONTENT*

${maxim.map(v => `*Name:* ${v.title}\n*Duration:* ${v.duration}\n\n*Link:* ${v.url}\n======================`).join`\n\n`}
    `.trim()
    conn.sendMessage(m.chat, {
                text: capt,
                contextInfo: {
                    externalAdReply: {
                        title: "XVIDEOS Search",
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
handler.help = ['xvideos'].map(v => v + ' <query>')
handler.tags = ['nsfw', 'downloader']
handler.command = /^xvideos$/i
handler.limit = true
handler.nsfw = true

export default handler