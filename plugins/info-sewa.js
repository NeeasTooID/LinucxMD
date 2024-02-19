let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa List* 」
│ • *Permanent :* 25K
┠──「 *Premium List* 」
│ • *1 Bulan :* 30K
│ • *5 Bulan :* 60K
│ • *12 Bulan :* 100K
┠──「 *Pembayaran* 」
│ • *Dana/Ovo/Gopay/Pulsa : 6283897390164*
│ • *Wa owner : wa.me/6283897390164*
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|prem|premium)$/i

export default handler
