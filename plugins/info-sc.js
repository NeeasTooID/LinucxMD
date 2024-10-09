import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   let xm4ze = await( await fetch(xmenus)).json()
   let thum = xm4ze[Math.floor(Math.random() * xm4ze.length)]
   let maximus = `*XMYULA-MD BY XM4ZE*

> https://github.com/XM4ZE/XMYULA-MD

_Don't forget to give me 5 Stars 🙂_`
		conn.sendMessage(m.chat, {
            text: maximus,
            contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.info.channel,
                   serverMessageId: null,
                   newsletterName: global.info.namechannel,
                   },
                   externalAdReply: {
                   title: global.info.namebot + `© 2024`,
                   body: 'Powered By Maximus',
                   thumbnailUrl: thum,
                   sourceUrl: 'https://github.com/XM4ZE/XMYULA-MD',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })
	} catch (e) {
		console.log(e)
		throw `Fitur Error.`
	}
};

handler.command = /^(sc|script)$/i
handler.register = false;
handler.premium = false;

export default handler;