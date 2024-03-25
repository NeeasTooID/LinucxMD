import fetch from 'node-fetch';
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://v.douyin.com/iXpBGvx/`
if (!args[0].match(/douyin/gi)) throw `URL Yang Tuan Berikan *Salah!!!*`
     try {
 let tioxd = await fetch(`https://api.botcahx.eu.org/api/download/douyin?url=${args[0]}&apikey=${global.btc}`)
 conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
if (!tioxd.ok) throw await tioxd.text()
let tiodl = await tioxd.json()
if (!tiodl.status) throw tiodl
let { 
info_video, 
author_info, 
url 
} = tiodl.result
await conn.sendFile(m.chat, url.nowm, 'tiovid.mp4', `${info_video.title}(${info_video.region})\n*Name:* ${author_info.nickname} *(ID:${author_info.id})*\n*Share:* ${info_video.total_share} *Comment:* ${info_video.total_comment}\n*ForVidWatermark:*\n${url.wm}`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
await conn.sendMessage(m.chat, { audio: { url: url.audio }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: info_video.title,
    body: "Douyin Audio Downloader",
    thumbnailUrl: author_info.profile,
    sourceUrl: "",
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: m })
     } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['douyin'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(douyin|douyindl)$/i

handler.limit = true

export default handler
