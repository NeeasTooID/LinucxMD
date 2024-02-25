import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-search?q=${text}&apikey=${global.xyro}`)
  m.reply(wait)
  try {
  let json = await res.json()
  let foto = json.data[0].thumbnail
  json = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Status:* ${v.status}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, foto, '', json, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Doujin Yang Kamu Cari Tidak Di Temukan`)
}
}
handler.help = ['doujinsearch']
handler.tags = ['anime']
handler.command = /^(doujinsearch)$/i
handler.limit = true

export default handler