import { googleImage } from '@bochilteam/scraper'
const isHent = /18?|sepon(g|k)?|desah|xnxx|mia|khalifah|sexy|bikini|bugil|r34|xx(x)?|sex|porno|tete|payudara|penis|montok|ngocok|oppai|naked|bikini|sex?(y|i)|boha?(y|i)|tete?k|titi?t|hent(ai|ao)?|animeh|pussy|dick|xnxx|kontol|col?mek|co?li|cum|hot|me?me?(k|g)|neocoil?l|yame?te|kimochi|boke?p|nsfw|rule?34|telanjang|crot|peju/i
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukan Query!\n\nContoh:\n${usedPrefix + command} Elaina`
    let isHentai = isHent.exec(text)
    if (!isHentai) {
        const res = await googleImage(text)
        let image = res.getRandom()
        let link = image
        await conn.sendFile(m.chat, link, text + '.jpeg', `🔎 *Result:* ${text}\n🌎 *Source:* Google`, m, false)
    } else return m.reply('Jangan Mencari Hal Aneh!, Ketahuan Owner Bakal Di Banned')
}
handler.help = ['gimage <query>']
handler.tags = ['internet']
handler.command = /^(gimage)$/i
handler.limit = true

export default handler