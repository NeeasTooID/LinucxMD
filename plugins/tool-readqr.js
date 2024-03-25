import axios from 'axios'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana? Reply gambar yg gk ada button aja'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
  let img = await q.download?.()
  let url = await uploadImage(img)
  let res = await axios.get(API('lol', '/api/read-qr', { img: url }, 'apikey'))
  m.reply(res.data.result)
}
handler.help = ['readqr']
handler.tags = ['tools']
handler.command = /^(readqr)$/i

handler.limit = true

export default handler