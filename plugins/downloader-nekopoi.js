import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `*Mana Code-nya?*\n\nSilahkan cari kode dengan menulis\n_${usedPrefix}nekopoi query_`
  const { data } = await axios.get(`https://api.itsrose.rest/dewasa/nekopoi/detail?id=${text}`, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);
  if (data.status != true) throw `*Code Salah!!!*\n\nSilahkan cari kode dengan menulis\n_${usedPrefix}nekopoi query_`
  let cap = `*${data.result.title}*
  
• *SINOPSIS:* ${data.result.series.content}\n
• *GENRE:* ${data.result.series.genre}

`
  for (let json of data.result.stream) {
   cap += `*STREAMING:*\n${json.link}`
  	}
  for (let down of data.result.download) {
    cap += `\n\n*[ ${down.type} ]*\n`
    cap += `${down.links.map(v => `\`\`\`${v.name}:\`\`\` ${v.link}`).join`\n`}
    `.trim()
  }
   await conn.sendMessage(m.chat, {
			image:await(await fetch(data.result.image)).buffer(),
			caption: cap
		}, { quoted: m })
}
handler.help = ['nekopoidl *⧼code⧽*']
handler.command = /^(nekopoidownload|nekopoidl|nekodl)$/i
handler.tags = ['downloader','nsfw']

handler.nsfw = true
handler.limit = true

export default handler