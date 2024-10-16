import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { getDevice } from '@adiwajshing/baileys'

let handler = async (m, command) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4\/mp3/.test(mime)
  let link = await (uploadImage ? uploadImage : uploadFile)(media)
  let max = `
${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}
`

  if (!/all/.test(command) && await getDevice(m.key.id) == 'android') {
  await conn.sendButton(m.chat, max, wm, 'https://pomf2.lain.la/f/7q9459vu.jpg', [['Salin / Copy',link,'cta_copy']], m)
   } else conn.sendMessage(m.chat, {
                text: max,
                contextInfo: {
                    externalAdReply: {
                        title: "File-Uploader",
                        body: "",
                        thumbnailUrl: "https://raw.githubusercontent.com/NeofetchNpc/ArchiveTMP/main/img-mp4/thumenu.png",
                        sourceUrl: link,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['tourl <reply image/video>']
handler.tags = ['tools']
handler.command = /^(tourl)$/i
handler.limit = true;
handler.register = true;

export default handler;