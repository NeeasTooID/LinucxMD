import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let loadd = [
 '> ■ □ □ □ □ □ □ □ □ □ □ 10%',
 '> ■ ■ ■ □ □ □ □ □ □ □ □ 40%',
 '> ■ ■ ■ ■ ■ ■ □ □ □ □ □ 60%',
 '> ■ ■ ■ ■ ■ ■ ■ ■ ■ □ □ 80%',
 '> ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■100%',
 'Loading Complate!...'
 ]
 
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`
*Link:* ${link}
*Size:* ${media.length} Byte
*Expired:* ${isTele ? 'No Expiry Date' : 'Unknown'}
Npnpicyy❤️‍🩹`)
}
handler.help = ['upload']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
handler.limit = true
export default handler