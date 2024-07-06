import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Please send mediafire url!!*`
    let res = await mediafiredl(args[0])  
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    try {
    let caption = `╭╌╌ *MEDIAFIRE DOWNLOAD*
┆ *Name:* ${filename}
┆ *Size:* ${filesizeH}
┆ *Extension:* ${ext}
┊ *Uploaded:* ${aploud}
╰╌╌╌╌─╌╌ ${global.wait}`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })  
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, '*Sorry there was an error accepting the request.*', m)
  }
}
handler.help = ['mediafire'].map(v => v + ' *⧼url⧽*')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.limit = true

export default handler