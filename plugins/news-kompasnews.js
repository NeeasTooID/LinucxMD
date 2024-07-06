import axios from 'axios'
import cheerio from 'cheerio'
let handler = async (m, { conn }) => {
    let data = await kompasnews()
    let text = data.map((v, i) => {
        return `
*${i + 1}.* ${v.title.trim()}
  > Date: _${v.date}_
  > Desc: _${v.desc}_
  
  > Link: _${v.link}_
`.trim()
    }).join('\n\n')
    m.reply(text)
}
handler.help = ['kompasnews']
handler.tags = ['news']
handler.command = /^kompas(news)?/i
handler.owner = false

export default handler

function kompasnews() {
    return new Promise((resolve, reject) => {
        axios.get(`https://news.kompas.com/`).then(({ data }) => {
            const $ = cheerio.load(data)
            let hasil = []
            $("div.col-bs9-3").each(function(c, d) {
                let title = $(d).find("h3.article__title > a.article__link").text()
                let desc = $(d).find("div.article__lead").text().trim()
                let date = $(d).find("div.article__date").text().trim()
                let link = $(d).find("h3.article__title > a.article__link").attr('href')
                const Data = {
                    title: title,
                    desc: desc,
                    date: date,
                    link: link
                }
                hasil.push(Data)
            })
            resolve(hasil)
        }).catch(reject)
    })
}