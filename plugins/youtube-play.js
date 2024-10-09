/* 
 * XM4ZE 
 * https://github.com/XM4ZE
 */

import {
	youtubedl
} from '@bochilteam/scraper';
import {
	toAudio
} from '../lib/converter.js'
import api from 'btch-downloader';
import search from 'yt-search';
import fetch from 'node-fetch';
import ytdl from 'ytdl-core';
import fs from 'fs';

let handler = async (m, {
	conn,
	text
}) => {
	if (!text) return m.reply('*example*: .play eula song');
	if (text.startsWith('https://')) return m.reply(`Silahkan gunakan \`.ytmp3 atau .yta\` untuk mendapatkan audio`)
	let results = await search(text);
	let videoId = results.videos[0].videoId;
	let durasi = results.videos[0].timestamp;
	let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
	let author = results.videos[0].author.name;
	let views = results.videos[0].views;
	let links = results.videos[0].url;
	let title = results.videos[0].title
	let detik = results.videos[0].seconds

// Do not change below
	let infoText = `  ◦ *Duration*: ${durasi}
  ◦ *Author*: ${author}
  ◦ *Views*: ${views}
  
YT-DL By 
- api.betabotz.eu.org
- api.botcahx.eu.org
- github:fent/node-ytdl-core
- github:bochilteam/scraper
- npm:btch-downloader 

SEARCH By 
- github.com/talmobi/yt-search

SENT By 
- ${global.info.namebot}`;

	var pesan = conn.sendMessage(m.chat, {
		text: infoText,
		contextInfo: {
			forwardingScore: 9999,
			isForwarded: true,
			forwardedNewsletterMessageInfo: {
				newsletterJid: global.info.channel,
				serverMessageId: null,
				newsletterName: global.info.namechannel,
			},
			externalAdReply: {
				title: "AUDIO SEDANG DI KIRIM",
				body: `Youtube Play by Assisten ${global.info.namebot}`,
				thumbnailUrl: thumbnailUrl,
				sourceUrl: links,
				mediaType: 1,
				renderLargerThumbnail: true
			},
		},
	}, {});

	if (detik > 900) return m.reply(`Audio *${durasi}*\n_Tidak dapat mengirim, maksimal durasi 15 Menit_`);
		try {
			const yt = await (await fetch(`https://api.betabotz.eu.org/api/download/ytmp3?url=${links}&apikey=${lann}`)).json()
			await conn.sendMessage(m.chat, {
				audio: {
					url: yt.result.mp3
				},
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			});
		} catch (e) {
			console.log(e);
			try {
				let btch = api.youtube(links)
				await conn.sendMessage(m.chat, {
					audio: {
						url: btch.mp3
					},
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				});
			} catch (e) {
				console.log(e)
				try {
					let boc = await youtubedl(links)
					let mx = await boc.audio['128kbps'].download()
					await conn.sendMessage(m.chat, {
						audio: {
							url: mx
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					});
				} catch (e) {
					console.log(e)
					m.reply(`An error occurred while searching for the song: ${e.message}`);
				}
			}
	}
};

handler.help = ['youtubeplay'].map(v => v + ' name/url');
handler.tags = ['downloader'];
handler.command = /^(ytplay|play|youtubeplay|song|music)$/i;
handler.limit = true;
handler.register = true;

export default handler;