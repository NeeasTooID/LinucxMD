import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-search?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let foto = json.data[0].thumbnail
  json = json.data.map((v) => `*Title:* ${v.title}\n*Title_ID:* ${v.title_id}\n*Awal:* ${v.awal}\n*Terbaru:* ${v.terbaru}\n*Link:* ${v.url}\n*Deskripsi:* ${v.description}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, foto, 'foto.jpg', json, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Menemukan Judul Yang Kamu Masukan`)
}
}
handler.help = ['komikusearch']
handler.tags = ['anime']
handler.command = /^(komikusearch)$/i
handler.limit = true

export default handler
