import axios from 'axios'
import cheerio from 'cheerio'
let handler = async (m, { conn }) => {
    let data = await hoax()
    let src = data.getRandom()
    let cap = `
*Judul:* ${src.title}
*Date:* ${src.date}

*Desc:* _${src.desc}_

*Link:* ${src.link}
`.trim()
    await conn.sendFile(m.chat, src.thumbnail, null, cap, m)
}
handler.help = ['turnbackhoax']
handler.tags = ['internet']
handler.command = /^turnbackhoax|tbh$/i

export default handler

function hoax() {
    return new Promise((resolve, reject) => {
        axios.get(`https://turnbackhoax.id/`).then(tod => {
            const $ = cheerio.load(tod.data)
            let hasil = []
            $("figure.mh-loop-thumb").each(function(a, b) {
                $("div.mh-loop-content.mh-clearfix").each(function(c, d) {
                    let link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href')
                    let img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src')
                    let title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim()
                    let desc = $(d).find("div.mh-excerpt > p").text().trim()
                    let date = $(d).find("span.mh-meta-date.updated").text().trim()
                    const Data = {
                        title: title,
                        thumbnail: img,
                        desc: desc,
                        date: date,
                        link: link
                    }
                    hasil.push(Data)
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}