import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, args }) => {
    if (!args[0]) throw `Format Salah!\n*Contoh:*\n${usedPrefix + command} ${link.web} 1`
    if (/short(url|link)?/i.test(command)) {
        switch (args[1] || '') {
            case '1':
                let url-1 = axios.get(API('lol', '/api/shortlink', { url: args[0] }, 'apikey'))
                m.reply(url-1.data.result)
                break
            case '2':
                let url-2 = axios.get(API('lol', '/api/shortlink2', { url: args[0] }, 'apikey'))
                m.reply(url-2.data.result)
                break
            case '3':
                let url-3 = axios.get(API('lol', '/api/shortlink3', { url: args[0] }, 'apikey'))
                m.reply(url-3.data.result)
                break
            case '4':
                let url-4 = axios.get(API('lol', '/api/shortlink3', { url: args[0] }, 'apikey'))
                m.reply(url-4.data.result)
                break
            default:
                return m.reply(`Format Salah!\n*Contoh:*\n${usedPrefix + command} ${link.web} 1`)
            }
        }
}
handler.help = ['short <url> <type>']
handler.tags = ['internet']
handler.command = /^(short(url|link)?)$/i
handler.limit = true
export default handler