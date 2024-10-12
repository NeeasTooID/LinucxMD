import fetch form 'node-fetch';

let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
	if (text.startsWith('https://nekopoi.care/hentai/')) {
	    try {
		const ambil = await( await fetch(`https://api.betabotz.eu.org/api/webzone/nekopoi-detail?query=${text}&apikey=${lann}`)).json()
		let down = ambil.result;
		let cap = `*${down.title.toUpperCase()}*

- *Japanese:* ${down.japanese}
- *Episode:* ${down.episode}
- *View:* ${down.view}
- *Status:* ${down.status}
- *Duration:* ${down.duration}
- *Producer:* ${down.producer}
- *Release:* ${down.aired}
- *Score:* ${down.score}
- *Category:* ${down.category}
- *Genre:* ${down.genre}

*Synopsis:*
_${down.synopsis}_

`
for (let xxx of down.url) {
   cap += `\n${xxx}\n`
}

        conn.sendMessage(m.chat, {
				text: cap,
				contextInfo: {
					externalAdReply: {
						title: "Nekopoi Details",
						body: wm,
						thumbnailUrl: down.img,
						sourceUrl: "https://nekopoi.care",
						mediaType: 1,
						showAdAttribution: true,
						renderLargerThumbnail: true
					}
				}
			})
		} catch (e) {
			console.log(e)
			m.reply('Masukan url yang benar');
		}
	} else if (text.startsWith('https://nekopoi.care/')) {
		try {
		const get2 = await( await fetch(`https://api.betabotz.eu.org/api/webzone/nekopoi-detail?query=${text}&apikey=${lann}`)).json()
		let down2 = get2.result;
		let cap2 = `*${down2.title.toUpperCase()}*

${down2.info}

========================

`

  for (let xmaze of down2.urls) {
    cap2 += `\n*${xmaze.quality}*\n`
    cap2 += `*Download:* ${xmaze.download}\n`
  }
        conn.sendMessage(m.chat, {
				text: cap2,
				contextInfo: {
					externalAdReply: {
						title: "Nekopoi Download",
						body: wm,
						thumbnailUrl: down2.img,
						sourceUrl: "https://nekopoi.care",
						mediaType: 1,
						showAdAttribution: true,
						renderLargerThumbnail: true
					}
				}
			})
		} catch (e) {
			console.log(e)
			m.reply('Masukan url yang benar');
		}

	} else if (text) {
		const searchResultsMMK = await( await fetch(`https://api.betabotz.eu.org/api/webzone/nekopoi-search?query=${text}&apikey=${lann}`)).json()
		let searchResults = searchResultsMMK.result
		if (searchResults && searchResults.length > 0) {
			let mmkreply = `
*NEKOPOI SEARCH*

${searchResults.map(v => `*Name:* ${v.title}\n*Link:* ${v.url}\n======================`).join`\n\n`}
    `.trim()
			conn.sendMessage(m.chat, {
				text: mmkreply,
				contextInfo: {
					externalAdReply: {
						title: "Nekopoi Search",
						body: wm,
						thumbnailUrl: searchResults[0].img,
						sourceUrl: "https://nekopoi.care",
						mediaType: 1,
						showAdAttribution: true,
						renderLargerThumbnail: true
					}
				}
			})
		} else {
			m.reply('Maaf, tidak ditemukan hasil pencarian.')
		}
	} else {
	    let XM4ZE = await( await fetch(`https://api.betabotz.eu.org/api/webzone/nekopoi-update?apikey=${lann}`)).json()
	    let news = XM4ZE.result
	   	let capti = `
*NEKOPOI UPDATE*

${news.map(v => `*Name:* ${v.title}\n*Link:* ${v.url}\n======================`).join`\n\n`}
    `.trim()
			conn.sendMessage(m.chat, {
				text: capti,
				contextInfo: {
					externalAdReply: {
						title: "Nekopoi Update",
						body: wm,
						thumbnailUrl: 'https://files.catbox.moe/c5ecnr.jpg',
						sourceUrl: "https://nekopoi.care",
						mediaType: 1,
						showAdAttribution: true,
						renderLargerThumbnail: true
					}
				}
			})
    }
};

handler.help = ['nekopoiupdate', 'nekopoidetail <url>'];
handler.tags = ['premium'];
handler.command = /^(nekopoi|nekopoiupdate|nekopoi detail|nekopoidl)$/i;
handler.limit = true;
handler.register = true;
handler.premium = true;

export default handler;