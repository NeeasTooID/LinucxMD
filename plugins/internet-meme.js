import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn }) => {
    let res = await googleImage('meme indonesia')
    let image = res.getRandom()
    await conn.sendFile(m.chat, image, null, 'Asupan Recehnya Kak', m, null)
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
handler.limit = true
export default handler