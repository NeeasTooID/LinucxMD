import axios from "axios"
import PDFDocument from "pdfkit"
import { extractImageThumb } from "@adiwajshing/baileys"
import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async(m, { conn, args }) => {

let code = (args[0] || '').replace(/\D/g, '')
if (!code) throw 'imput Code';
try {
m.reply(wait)
let data = await( await fetch(`https://api.betabotz.eu.org/api/webzone/nhentai-detail?query=${code}&apikey=${global.lann}`)).json()
let thumb = data.result.images[0]
let buffer = await (await fetch(thumb)).buffer()		
let jpegThumbnail = await extractImageThumb(buffer)		
let imagepdf = await toPDF(data.result.images)		
let txt = `${data.result.title}\n\n`
   + `*Artists:* ${data.result.metadata.artists ? data.result.metadata.artists : '—'}\n`
   + `*Languages:* ${data.result.metadata.languages ? data.result.metadata.languages : '—'}\n`
   + `*Pages:* ${data.result.metadata.pages}\n`
   + `*Tags:* ${data.result.metadata.tags ? data.result.metadata.tags : '—'}`
await conn.sendMessage(m.chat, { document: imagepdf, jpegThumbnail, fileName: data.result.title + '.pdf', mimetype: 'application/pdf', caption: txt }, { quoted: m })
     } catch (e) {
     console.log(e)
     m.reply(eror)
  }
} 
handler.command = /^(nhentaidl)$/i
handler.tags = ['downloader', 'premium', 'nsfw']
handler.help = ['nhentaidl <code> ']
handler.premium = true
handler.nsfw = true

export default handler 

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}