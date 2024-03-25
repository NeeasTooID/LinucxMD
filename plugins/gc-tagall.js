let handler = async(m, { conn, usedPrefix, text, participants }) => {
    let teks = `${text ? text: '*––––––『 TAG All 』––––––*'}\n\n${readMore}`
    for (let mem of participants) {
        teks += `\n@${mem.id.split('@')[0]}`
    }
    await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
handler.help = ['tagall <message>']
handler.tags = ['group', 'adminry']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)