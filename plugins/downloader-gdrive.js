import { GDriveDl } from '../lib/scrape1.js'

let handler = async (m, { conn, args }) => {
    
	const someincludes = ( data, id ) => {
        let res = data.find(el => id.includes(el) )
        return res ? true : false;
    }
	
	try {
        if (!args[0]) return m.reply(`[!] Input GoogleDrive URL`); // Check if args[0] (URL) is provided
		let res = await GDriveDl(args[0])
		if (res.fileSize.slice(-2) == "GB") return m.reply(`Ngotak dong.\nMana bisa ngirim video ${res.fileSize}`)
		if (!someincludes(['kB','KB'], res.fileSize.slice(-2)) && parseInt(res.fileSize) > 500) return m.reply(`Filesize: ${res.fileSize}\nTidak dapat mengirim, maksimal file 500 MB`)
		let txt = `*[ Downloading file ]*\n\n`
		txt += `*Name :* ${res.fileName}\n`
		txt += `*Size :* ${res.fileSize}\n`
		txt += `*Type :* ${res.mimetype}`
		await m.reply(txt)
		if (!res.downloadUrl) throw error
		await conn.sendFile(m.chat, res.downloadUrl, res.fileName + res.mimetype, res.fileName + res.mimetype, m)
	} catch (e) {
		console.error(e)
		throw 'Bot tidak memiliki akses ke GoogleDrive ini'
	}
}

handler.help = ['gdrive'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(gdrive)$/i

handler.limit = true
handler.register = true

export default handler
