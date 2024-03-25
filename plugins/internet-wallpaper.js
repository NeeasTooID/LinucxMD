import axios from 'axios'
import cheerio from 'cheerio' 
import { googleImage } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukan Query!\n\nContoh:\n${usedPrefix + command} Anime`)
    try {
        let res = await wallpaper(text, Math.floor(Math.random() * 10))
        let img = res.getRandom()
        await conn.sendMessage(m.chat, { image: { url: img.image[0] }, fileName: 'wallpaper.jpeg', mimetype: 'image/jpeg', caption: `Result from: *${capitalize(text)}*` }, { quoted: m })
    } catch {
        try {
            let res = await pinterest('wallpaper ' + text)
            conn.sendFile(m.chat, res, null, `Result from: *${capitalize(text)}*`, m)
        } catch {
            try {
                let res = await googleImage('wallpaper ' + text)
                conn.sendFile(m.chat, res.getRandom(), null, `Result from: *${capitalize(text)}*`, m)
            } catch (e) {
                return m.reply(`Query ${text} Tidak Ditemukan :(\nMau Coba Lagi? :)`)
            }
        }
    }
}
handler.help = ['wallpaper'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^wallpaper$/i

export default handler

async function pinterest(query) {
    let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
    let json = await res.json()
    let data = json.resource_response.data.results
    if (!data.length) throw `Query "${query}" not found :/`
    return data[~~(Math.random() * (data.length))].images.orig.url
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}