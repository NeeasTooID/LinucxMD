import axios from 'axios'
import cheerio from 'cheerio'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, 'Masukan Query Yang Ingin Dicari!', m)
    let res = await wiki(text)
    res[0].thumb ? conn.sendFile(m.chat, res[0].thumb, text + '.jpeg', res[0].wiki, m, false) :
    conn.reply(m.chat, res[0].wiki, m)
}
handler.help = ['wikipedia'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(wikipedia)$/i
export default handler

async function wiki(query) {
    const res = await axios.get(`https://id.m.wikipedia.org/wiki/${query}`)
    const $ = cheerio.load(res.data)
    const hasil = []
    let wiki = $('#mf-section-0').find('p').text()
    let thumb = $('meta[property="og:image"]').attr('content')
    hasil.push({
        wiki, thumb
    })
    return hasil
}