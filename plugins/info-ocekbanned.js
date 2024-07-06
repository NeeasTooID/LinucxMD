let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!user.banned) return conn.reply(m.chat, `${who == m.sender ? 'Kamu' : `@${who.replace(/@.+/, '')}` } Tidak Di Banned`, m, { mentions: [who] })
    conn.reply(m.chat, `${who == m.sender ? 'Kamu': `@${who.replace(/@.+/, '')}` } Telah Di Banned Dikarenakan:\n${user.BannedReason}`, m, { mentions: [who] })
}
handler.help = ['ocekbanned']
handler.tags = ['info']
handler.command = /^(ocekbanned)$/i
export default handler