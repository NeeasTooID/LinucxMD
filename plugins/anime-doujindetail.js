import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya Mana?\nExample: .doujindetail https://212.32.226.234/manga/arofour-dokushin-baricare-obasan-ga-yuujin-no-musuko-demo-aru-toshishita-danshi-to-no-kankei-ni-hamaru-hanashi/`
  m.reply(wait)
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-detail?url=${text}&apikey=${global.xyro}`)
  let zel = await res.json()
let milf = `
Title: ${zel.data.title}
Tags: ${zel.data.tags}
Status: ${zel.data.metadata.status}
Type: ${zel.data.metadata.type}
Series: ${zel.data.metadata.series}
Author: ${zel.data.metadata.author}
Rating: ${zel.data.metadata.rating}
Link: 
${zel.data.links[0].title}
${zel.data.links[0].url}`
  conn.reply(m.chat, milf, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
}
}
handler.help = ['doujindetail']
handler.tags = ['anime']
handler.command = /^(doujindetail)$/i
handler.limit = true

export default handler