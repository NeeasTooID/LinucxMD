import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/nhentai-search?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Author:* ${v.author}\n*Index:* ${v.index}\n*Title:* ${v.title}\n*Link:* ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Nhentai Yang Kamu Cari Tidak Di Temukan`)
}
}
handler.help = ['nhentaisearch']
handler.tags = ['anime']
handler.command = /^(nhentaisearch)$/i
handler.limit = true

export default handler