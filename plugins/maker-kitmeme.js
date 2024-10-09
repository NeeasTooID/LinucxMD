import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, args, command }) => {
    let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
    if (!/kucing|senyum|monyet/i.test(args[0]) || !txt) throw `Contoh penggunaan:
${usedPrefix + command} tema text

*List tema:*
• kucing
• senyum
• monyet
`.trim()
    let res = `https://ik.imagekit.io/aygemuy/tr:ot-${txt},ots-400,otc-ffff00,or-50/${args[0]}.jpg`
    await conn.sendFile(m.chat, res, false, '', m, false)
}
handler.help = ['kitmeme']
handler.tags = ['maker']
handler.command = /^(kitmeme)$/i
export default handler