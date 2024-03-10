let handler = async (m, { conn, usedPrefix, owner }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (120000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].health > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 120000) {
                let _health = `${Math.floor(Math.random() * 101)}`.trim()
                let health = (_health * 1)
                let exp = `${Math.floor(Math.random() * 10000)}`.trim() 
                let uang = `${Math.floor(Math.random() * 100000)}`.trim() 
                let emerald = `${Math.floor(Math.random() * 10)}`.trim() 
                let _potion = ['1','2','3']
                let potion = _potion[Math.floor(Math.random() * _potion.length)]
                let _sampah = Array.from({ length: 50 }, (_, i) => (i + 1).toString())
                let sampah = pickRandom(_sampah)
                let _diamond = Array.from({ length: 10 }, (_, i) => (i + 1).toString())
                let diamond = pickRandom(_diamond)
                let _common = ['1','2','3']
                let common = pickRandom(_common)
                let _uncommon = ['1','2','1','2']
                let uncommon = pickRandom(_uncommon)
                let _mythic = `${pickRandom(['1','3','1','1','2'])}`
                let mythic = (_mythic * 1)
                let _gardenboxs = `${pickRandom(['1','3','1','1','2'])}`
                let gardenboxs = (_gardenboxs * 1)
                let _legendary = `${pickRandom(['1','3','1','1','2'])}`
                let legendary = (_legendary * 1)
                let itemrand = [`*${mythic} Peti Mistis Langka*`,`*${legendary} Peti Legendary Langka*`]
                let rendem = itemrand[Math.floor(Math.random() * itemrand.length)]
                let str = `
Nyawa Mu Berkurang Sebesar -${health * 1}, Karena Kamu Berpetualang Dan Melawan ${pickRandom(['Raksasa', 'Beruang', 'Harimau', 'Macan', 'Iblis'])} Tapi Kamu Mendapatkan:
*💥Exp:* ${exp} 
*💰Money:* ${uang}
*💎Berlian:* ${diamond}
*🐲Emerald:* ${emerald}
*🗑️Sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*Diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*Common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*Uncommon crate:* ' + uncommon + ''}${gardenboxs == 0 ? '' : '\n*Gardenboxs crate:* ' + gardenboxs + ''}
Dan Mendapatkan ${itemrand}
`.trim()
            
                setTimeout(() => {
                    conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f5a3e56788cca63c4dad3.jpg' }, caption: str }, { quoted: m })
                }, 0)
                global.db.data.users[m.sender].health -= health * 1
                global.db.data.users[m.sender].exp += exp * 1
                global.db.data.users[m.sender].money += uang * 1
                global.db.data.users[m.sender].potion += potion * 1
                global.db.data.users[m.sender].diamond += diamond * 1
                global.db.data.users[m.sender].emerald += emerald * 1
                global.db.data.users[m.sender].common += common * 1 
                global.db.data.users[m.sender].uncommon += uncommon * 1
                global.db.data.users[m.sender].sampah += sampah * 1
                global.db.data.users[m.sender].mythic += mythic * 1
                global.db.data.users[m.sender].legendary += legendary * 1
                global.db.data.users[m.sender].gardenboxs += gardenboxs * 1
                global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `❗Kamu Sudah Berpetualang Hari Ini, Dan Kamu Membutuhkan Istirahat Selama *${timers}*`, m)
        } else conn.reply(m.chat, '❗Minimal 80 Health Untuk Bisa Berpetualang\nKamu Bisa Menggunakan Potion Dengan Cara *.heal*\nJika Tidak Mempunyai Potion Kamu Bisa Beli Dengan Cara *.beli potion (jumlah)*', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}

handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(petualang|adventure|adv)$/i
handler.group = true
handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
    let m = Math.floor(ms / 60000) % 2
    let s = Math.floor(ms / 1000) % 60
    console.log({ms,m,s})
    return [m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
