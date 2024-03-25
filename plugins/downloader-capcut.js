import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let wr = `Masukan Url Capcut!\n\nContoh:\n${usedPrefix + command} https://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`
    if (!args[0]) return m.reply(wr)
    if (!/www.capcut/i.test(args[0])) return m.reply('Invalid Url!')
    m.reply(wait)
    let { usage, title, description, originalVideoUrl } = await capcut(args[0])
    let cap = `
Usage: ${usage}

${title}
${description}
`.trim()
    conn.sendFile(m.chat, originalVideoUrl, null, cap, m)
}
handler.help = ['capcut'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^capcut(dl)?$/i
handler.limit = true
export default handler

async function capcut(Url) {
    let token = Url.match(/\d+/)[0]
    let res = await axios(`https://ssscapcut.com/api/download/${token}`, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 13; CPH2217 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile Safari/537.36',
            'X-Requested-With': 'acr.browser.barebones',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://ssscapcut.com/',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cookie': 'sign=2cbe441f7f5f4bdb8e99907172f65a42; device-time=1685437999515'
        }
    }).then((v) => {
        return v.data
    })
    return res
}