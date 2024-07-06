import axios from 'axios';

let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Nama AnimeH-nya Mana?\n\ncontoh:\n${usedPrefix + command} isekai harem`
    const { data } = await axios.get(`https://api.itsrose.rest/dewasa/nekopoi/search?query=${text}`, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);
    if (data.status != true) throw `*Pencarian tidak ditemukan*`;
    const res = data.result.filter(item => item.type === "post");
    let capt = `
*NEKOPOI Search*

${res.map(v => `*${v.title}*\nKode: ${v.id}\nUpload: ${v.date}\nThumbnail: ${v.image}`).join`\n\n`}
    `.trim()
    conn.sendFile(m.chat, data.result[0].image, '', capt, m)
}
handler.help = ['nekopoi'].map(v => v + ' <name>')
handler.tags = ['nsfw', 'downloader']
handler.command = /^(nekopoi)$/i
handler.limit = true
handler.nsfw = true

export default handler

