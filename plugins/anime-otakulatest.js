import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/otakudesu-latest?apikey=${global.xyro}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Hari:* ${v.day}\n*Tanggal:* ${v.date}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
   } catch (e) {
m.reply(eror)
}
}
handler.help = ['otakulatest']
handler.tags = ['anime']
handler.command = /^(otakulatest)$/i
handler.limit = true
export default handler
