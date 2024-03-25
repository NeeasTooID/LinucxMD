import { soundcloud } from '../lib/scrape.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukan Link Soundcloud!\n\nContoh:\n${usedPrefix + command} https://on.soundcloud.com/GA59k`)
    let res = await soundcloud(text)
    let cap = `
❏ *Title:* ${res.judul}
▧ *Download:* ${res.download_count}
▧ *Link:* ${text}
`.trim()
    conn.sendFile(m.chat, res.thumb, res.judul + '.jpeg', cap, m, false)
    await conn.sendFile(m.chat, res.link, res.judul + '.mp3', '', m, { mimetype: 'audio/mp4' })
}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^soundcloud$/i
handler.limit = true
export default handler