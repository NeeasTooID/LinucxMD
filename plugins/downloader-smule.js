import axios from 'axios'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukan Url!\n\nContoh:\n${usedPrefix + command} https://www.smule.com/recording/lewis-capaldi-someone-you-loved/2027750707_2937753991`)
    conn.sendReact(m.chat, '🕐', m.key)
    if(/smule(audio|mp3)/i.test(command)) {
        let res = await axios.get(API('lol', '/api/smule', { url: text }, 'apikey'))
        if (!res.data.status == 200) throw res.data
        await conn.sendFile(m.chat, res.data.result.audio, 'smule.mp4', res.data.result.title ? res.data.result.title : '', m, false, { mimetype: 'audio/mp4' })
        conn.sendReact(m.chat, '', m.key)
    } else if (/smule(video|mp4)?/i.test(command)) {
        let res = await axios.get(API('lol', '/api/smule', { url: text }, 'apikey'))
        if (!res.data.status == 200) throw res.data
        conn.sendFile(m.chat, res.data.result.video, 'smule.mp4', res.data.result.title ? res.data.result.title : '', m)
        conn.sendReact(m.chat, '', m.key)
    }
}
handler.help = ['smuleaudio', 'smulevideo'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^smule(audio|mp3|video|mp4)?$/i
handler.limit = true
export default handler