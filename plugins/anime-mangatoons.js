import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mangatoons?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Judul:* ${v.judul}\n*Genre:* ${v.genre}\n*Link:* ${v.link}\n*Thumbnail:* ${v.thumbnail}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
  } catch (e) {
m.reply(`Terjadi Kesalagan, Mangatoons Yang Kamu Cari Tidak Dapat Di Temukan`)
}
}
handler.help = ['mangatoons']
handler.tags = ['anime']
handler.command = /^(mangatoons)$/i
handler.limit = true

export default handler