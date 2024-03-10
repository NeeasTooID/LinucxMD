let handler = async (m, { conn, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let { health, diamond, potion, common, uncommon, mythic, legendary, level, money, exp, sampah, gardenboxs, limit, botol, kayu, batu, iron, string, kaleng, kardus, gold, emerald, pancing, pancingdurability } = user
    let who = m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = m.sender
    
    // Bagian Sortir
    let sorted = Object.entries(global.db.data.users)
    let sortedBy = (prop) => sorted.sort((a, b) => b[1][prop] - a[1][prop])
    let getRank = (prop) => sortedBy(prop).map(v => v[0]).indexOf(m.sender) + 1

    let str = `
╭──────━• *STATUS*
│📇 *Name: ${await conn.getName(name)}*
│❤️️ *Health:* ${health}
│🎫 *Limit:* ${limit}
│💹 *Money:* $${money}
│📊 *Level:* ${level}
│✨ *Exp:* ${exp}
╰──────────━⃝┅⃝━━────────┄⸙
${readMore}
╭──────━• *TOOLS*
│🎣 *Fishingrod:* ${pancing == 0 ? '❌' : ['Wooden', 'Iron', 'Diamond', 'Netherite'][pancing] + ' Fishingrod'}
│╰ *Durability:* ${pancingdurability}
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
│📊 *Top level:* ${getRank('level')} / ${sorted.length}
│💹 *Top Money:* ${getRank('money')} / ${sorted.length}
│🪙  *Top Gold:* ${getRank('gold')} / ${sorted.length}
│💎 *Top Diamond:* ${getRank('diamond')} / ${sorted.length}
│🥤 *Top Potion:* ${getRank('potion')} / ${sorted.length}
│📦 *Top Common:* ${getRank('common')} / ${sorted.length}
│🛍️ *Top Uncommon:* ${getRank('uncommon')} / ${sorted.length}
│🎁 *Top Mythic:* ${getRank('mythic')} / ${sorted.length}
│🧰 *Top Legendary:* ${getRank('legendary')} / ${sorted.length}
│🗑️ *Top Sampah:* ${getRank('sampah')} / ${sorted.length}
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
