import { webp2png } from '../lib/webp2mp4.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    const notImageMessage = `Reply to an image with command *${usedPrefix}${command}*`
    
    if (!m.quoted) throw notImageMessage
    
    const q = m.quoted || m
    let mime = q.mimetype || ''
    
    if (!/image/.test(mime)) throw notImageMessage
    
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    
    await conn.sendFile(m.chat, out, 'out.png', '*DONE (≧ω≦)ゞ*', m)
}

handler.help = ['toimg <reply to image>']
handler.tags = ['image']
handler.command = ['toimg', 'toimage']

export default handler
