import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Nama Manganya!!`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mal-manga?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let anu = json.data[0].thumbnail
  res = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Volum:* ${v.vol}\n*Score:* ${v.score}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, anu, 'anunya.png', res, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Manga Yang Kamu Cari Tidak Di Temukan`)
}
}
handler.help = ['mangainfo']
handler.tags = ['anime']
handler.command = /^(mangainfo)$/i
handler.limit = true
export default handler
