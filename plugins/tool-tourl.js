import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4\/mp3/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let max = `${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}

${global.wm}`
         conn.sendMessage(m.chat, {
                text: max,
                contextInfo: {
                	forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.info.channel,
                   serverMessageId: null,
                   newsletterName: global.info.namechannel,
                   },
                    externalAdReply: {
                        title: "File-Uploader",
                        body: "Uploader LinucxMD",
                        thumbnailUrl: "https://telegra.ph/file/859c5320e30a065037e19.jpg",
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
handler.limit = true

export default handler