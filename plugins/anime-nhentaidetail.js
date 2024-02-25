import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Linknya?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/nhentai-detail?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.data.thumbnail, '', json.data.info, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
}
}
handler.help = ['nhentaidetail']
handler.tags = ['anime']
handler.command = /^(nhentaidetail)$/i
handler.limit = true

export default handler