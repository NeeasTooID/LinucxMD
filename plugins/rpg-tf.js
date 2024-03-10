let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Contoh: *${usedPrefix}transfer money 100 @tag*\n\n*List Yang Bisa Di Transfer :*\n• [ 🎟 ] Money\n• [ 🍷 ] Potion\n• [ 🥕 ] Limit\n\nLinuxxMD>///<`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : Math.min(1) // Mengubah batasan jumlah transfer menjadi minimal 1
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw '❗Tag Salah Satu, Atau Ketik Nomernya!!'
        let users = global.db.data.users
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].money >= count * 1) {
                    try {
                        global.db.data.users[m.sender].money -= count * 1
                        global.db.data.users[who].money += count * 1
                        conn.reply(m.chat, `✅Berhasil Mentransfer Uang Sebesar Rp.${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].money += count * 1
                        m.reply('❌Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, '❗Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `❗Uang Kamu Tidak Mencukupi Untuk Mentransfer Sebesar ${count}`.trim(), m)
                break
            case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `✅Berhasil Mentransfer Limit Sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('❌Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, '❗Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `❗Limit Kamu Tidak Mencukupi Untuk Mentransfer Sebesar ${count} Limit`.trim(), m)
                break
            case 'potion':
                if (global.db.data.users[m.sender].potion >= count * 1) {
                    try {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[who].potion += count * 1
                        conn.reply(m.chat, `✅Berhasil Mentransfer ${count} Potion`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].potion += count * 1
                        m.reply('❌Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, '❗Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `❗Potion Kamu Tidak Cukup`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Contoh: *${usedPrefix}transfer money 100 @tag*\n\n*List Yang Bisa Di Transfer :*\n•》Money\n• Limit\n• Potion\n• Sampah\n• Diamond\n• Common\n• Uncommon\n• Mythic\n• Legendary\n• String\n🪵 Kayu\n• Batu\n• Iron`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Contoh: *${usedPrefix}transfer money 100 @tag*\n\n*List Yang Bisa Di Transfer :*\n•》Money\n• Limit\n• Potion\n• Sampah\n• Diamond\n• Common\n• Uncommon\n• Mythic\n• Legendary\n• String\n🪵 Kayu\n• Batu\n• Iron`.trim(), m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, '❗Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['transfer']
handler.tags = ['rpg']
handler.command = /^(transfer|tf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

export default handler
