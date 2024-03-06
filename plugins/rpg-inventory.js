let handler = async (m, { conn, usedPrefix }) => {
// Bagian Biasa
let health = global.db.data.users[m.sender].health
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let sampah = global.db.data.users[m.sender].sampah
    let gardenboxs = global.db.data.users[m.sender].gardenboxs
    let limit = global.db.data.users[m.sender].limit
    let botol = global.db.data.users[m.sender].botol
    let kayu = global.db.data.users[m.sender].kayu 
    let batu = global.db.data.users[m.sender].batu
    let iron = global.db.data.users[m.sender].iron
    let string = global.db.data.users[m.sender].string
    let kaleng = global.db.data.users[m.sender].kaleng
    let kardus = global.db.data.users[m.sender].kardus
    let gold = global.db.data.users[m.sender].gold
    let emerald = global.db.data.users[m.sender].emerald
    let pancing = global.db.data.users[m.sender].pancing
    let dpancing = global.db.data.users[m.sender].pancingdurability
    let who = m.sender
   let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = m.sender
            // Bagian Sortir
            let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
            let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
            let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
            let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
            let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
            let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
            let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
            let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
            let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
            let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
            let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
            let usersmoney = sortedmoney.map(v => v[0])
            let usersgold = sortedgold.map(v => v[0])
            let usersarlok = sortedarlok.map(v => v[0])
            let usersdiamond = sorteddiamond.map(v => v[0])
            let userspotion = sortedpotion.map(v => v[0])
            let userssampah = sortedsampah.map(v => v[0])
            let userslevel = sortedlevel.map(v => v[0])
            let userscommon = sortedcommon.map(v => v[0])
            let usersuncommon = sorteduncommon.map(v => v[0])
            let usersmythic = sortedmythic.map(v => v[0])
            let userslegendary = sortedlegendary.map(v => v[0])

    let str = `╭──────━• *STATUS*
│📇 *Name: ${await conn.getName(name)}*
│❤️️ *Health:* ${health}
│🎫 *Limit:* ${limit}
│💹 *Money:* $${money}
│📊 *Level:* ${level}
│✨ *Exp:* ${exp}
╰──────────━⃝┅⃝━━────────┄⸙
${readMore}
╭──────━• *TOOLS*
│🎣 *Fishingrod:* ${pancing == 0 ? '❌' : '' || pancing == 1 ? 'Wooden Fishingrod' : '' || pancing == 2 ? 'Iron Fishingrod' : '' || pancing == 1 ? 'Diamond Fishingrod' : '' || pancing == 1 ? 'Netherite Fishingrod' : '' }
│╰ *Durability:* ${dpancing}
│ # Masih Tahap Pengembangan!
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *INVENTORY*
│🥤 *Potion:* ${potion}
│💎 *Diamond:* ${diamond}
│🪙  *Gold:* ${gold}
│⛓  *Iron:* ${iron}
│🕸️ *String:* ${string}
│🪨  *Batu:* ${batu}
│🪵  *Kayu:* ${kayu}
│📦 *Kardus:* ${kardus}
│🗑️ *Sampah:* ${sampah}
│🥫 *Kaleng:* ${kaleng}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *CRATE*
│📦 *Common:* ${common}
│🛍️ *Uncommon:* ${uncommon}
│🎁 *Mythic:* ${mythic}
│🧰 *Legendary:* ${legendary}
│🛄 *Gardenboxs:* ${gardenboxs}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *ACHIEVEMENT*
│📊 *Top level:* ${userslevel.indexOf(m.sender) + 1} / ${userslevel.length}
│💹 *Top Money:* ${usersmoney.indexOf(m.sender) + 1} / ${usersmoney.length}
│🪙  *Top Gold:* ${usersgold.indexOf(m.sender) + 1} / ${usersgold.length}
│💎 *Top Diamond:* ${usersdiamond.indexOf(m.sender) + 1} / ${usersdiamond.length}
│🥤 *Top Potion:* ${userspotion.indexOf(m.sender) + 1} / ${userspotion.length}
│📦 *Top Common:* ${userscommon.indexOf(m.sender) + 1} / ${userscommon.length}
│🛍️ *Top Uncommon:* ${usersuncommon.indexOf(m.sender) + 1} / ${usersuncommon.length}
│🎁 *Top Mythic:* ${usersmythic.indexOf(m.sender) + 1} / ${usersmythic.length}
│🧰 *Top Legendary:* ${userslegendary.indexOf(m.sender) + 1} / ${userslegendary.length}
│🗑️ *Top Sampah:* ${userssampah.indexOf(m.sender) + 1} / ${userssampah.length}
╰──────────━⃝┅⃝━━────────┄⸙
`.trim()
conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: m })
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory)$/i
handler.register = true
handler.limit = true
handler.group = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)