import api from 'api-dylux';
import api2 from 'btch-downloader';

var handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Urlnya Mana Banh? >:('
  m.reply(wait)
  let v = args[0]
  
  const yt = await api.ytmp3(v)
  const data = await api2.youtube(v)
  const info = `*F I L E  T Y P E*

• Judul: ${yt.title}
• Views: ${yt.views}
• Durasi: ${yt.duration}
• Ukuran: ${yt.size} ( ${yt.sizeB} )
• Kualitas: ${yt.quality}`
  conn.sendMessage(m.chat, {
    document: { url: yt.dl_url }, 
    mimetype: 'audio/mpeg', 
    fileName: yt.title + `.mp3`,
    caption: info
  }, {quoted: m})
  if (yt.sizeB > 15000) return m.reply(`SizeFile: ${yt.size}\nTidak dapat mengirim Voice Note. Silahkan ambil music yang bertype File`)
  conn.sendFile(m.chat, data.mp3, 'kasar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = /^(yt(a(udio)?|mp3))$/i

handler.premium = false
handler.limit = true

export default handler;