import fetch from 'node-fetch';
import api from 'btch-downloader';

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!(args[0] || '').match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`Example: *${usedPrefix}${command}* https://www.youtube.com/watch?v=K9_VFxzCuQ0`)
	await m.reply(wait);
	try {
		let anu = await( await fetch(`https://api.betabotz.eu.org/api/download/ytmp3?url=${args[0]}&apikey=${lann}`)).json()
		let txt = `*${anu.result.title}*\n\n`
		+ `⌲ Resolution : 360p\n`
		+ `⌲ Duration : ${anu.result.duration}`
		await conn.sendFile(m.chat, anu.result.mp4, `${anu.result.title}.mp4`, txt, m)
    } catch (e) {
		console.log(e)
        try {
	        let btch = await api.youtube(args[0]);
	        await conn.sendMessage(m.chat, { video: { url: btch.mp4 }, caption: wm }, { quoted: m })
	    } catch (e) {
	        console.log(e)
	        m.reply(eror)
	    }	        
    }
};

handler.menudownload = ['ytvideo <url>']
handler.tagsdownload = ['downloader']
handler.command = /^(yt(v(ideo)?|mp4))$/i

handler.premium = false;
handler.limit = true;

export default handler;