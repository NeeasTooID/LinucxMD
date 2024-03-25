/*import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} iwan fals - wakil rakyat`
try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    const kon = await fetch(`https://aemt.me/lirik?text=${teks}`)
    const caunima = await kon.json()
    for(let mmk of caunima.result) {
    m.reply(`
Lyrics *${mmk.judul}*

${mmk.lirik}
`.trim())
   }
} catch (e) {
    m.reply('Lirik Tidak Ditemukan')
  }
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler*/


import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} iwan fals - wakil rakyat`
try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    const api = `https://aemt.me/lirik?text=${teks}`
    const { data } = await axios.get(api)
    for(let mmk of data.result) {
    m.reply(`
Lyrics *${mmk.judul}*

${mmk.lirik}
`.trim())
   }
} catch (e) {
    m.reply('Lirik Tidak Ditemukan')
  }
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler