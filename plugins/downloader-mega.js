import { File } from 'megajs'
import { fileTypeFromBuffer } from 'file-type'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.room = conn.room ? conn.room : {}
    if (!args[0]) return m.reply(`Masukan Url!\n\nContoh :\n${usedPrefix + command} https://mega.nz/file/FltHDCzD#oNm8SD_e9oFTCczmnEW4zB9gsakSGzVaVtd9euj7yK8`)
    let id = 'mega_' + m.sender
    if (id in conn.room) return m.reply('Kamu Masih Mendownload!')
    conn.room[id] = true
    let file = File.fromURL(args[0])
    m.reply(wait)
    try {
        file = await file.loadAttributes()
        let data = await file.downloadBuffer()
        let mimetype = await fileTypeFromBuffer(data)
        await conn.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
    } catch (e) {
        console.log(e)
        throw 'Internal Error'
    } finally {
        delete conn.room[id]
    }
}
handler.help = ['mega'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^mega(dl)?$/i
handler.limit = true
export default handler