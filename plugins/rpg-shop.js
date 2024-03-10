const limit = 10000
const potion = 20000
const sampah = 5000
const kayu = 10000
const batu = 1000
const string = 40000
const iron = 50000
const gold = 25000
const diamond = 100000
const emerald = 5000
const pickaxe = 1700
const kardus = 5000
const botol = 5000
const kaleng = 5000

const spotion = 10000
const ssampah = 4000
const skayu = 5000
const sstring = 30000
const sbatu = 2000
const siron = 40000
const sgold = 50000
const sdiamond = 50000
const semerald = 2000
const sbotol = 100000
const skaleng = 1000000
const skardus = 10000000

let handler = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _pickaxe = global.db.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 1700 : '' || _pickaxe == 1 ? 3000 : '' || _pickaxe == 2 ? 5500 : '' || _pickaxe == 3 ? 10500 : '' || _pickaxe == 4 ? 27000 : '')
    const uppickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 25 : '' || _pickaxe == 2 ? 55 : '' || _pickaxe == 3 ? 75 : '' || _pickaxe == 4 ? 120 : '')
    const durpickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 40 : '' || _pickaxe == 2 ? 60 : '' || _pickaxe == 3 ? 80 : '' || _pickaxe == 4 ? 100 : '')
    const repickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 35 : '' || _pickaxe == 3 ? 65 : '' || _pickaxe == 4 ? 100 : '')
    const drepickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 25 : '' || _pickaxe == 3 ? 40 : '' || _pickaxe == 4 ? 60 : '')
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')

    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender

    const Kchat = `*List Barang RPG*\n
- Limit [ 🎟 ] > Rp.${limit}
- Potion [ 🍷 ] > Rp.${potion}
- Sampah [ 🗑] > Rp.${sampah}
- Kayu [ 🪵 ] > Rp.${kayu}
- String [ 🕸 ] > Rp.${string}
- Iron [ ⛓️ ] > Rp.${iron}
- Diamond [ 💎 ] > Rp.${diamond}
- Emerald [ 🟢 ] > Rp.${emerald} 
- Gold [ 🪙 ] > Rp.${gold}
- Batu [ 🪨 ] > Rp.${batu}
- Pickaxe [ ⛏️ ] > Rp.${pickaxe}
- Kardus [ 📁 ] Rp.${kardus}
- Kaleng [ 🥃 ] > Rp.${kaleng}
- Botol [ 🍶 ] > Rp.${botol}
\n Exemple : .beli Emerald 1 | .jual Emerald 1
`.trim()

    try {
        if (/beli/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)

            switch (type) {
                case 'emerald':
                    if (global.db.data.users[m.sender].money >= emerald * count) {
                        global.db.data.users[m.sender].money -= emerald * count
                        global.db.data.users[m.sender].emerald += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Emerald Dengan Harga Rp.${emerald * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Emerald Dengan Harga Rp.${emerald * count}`,m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].money >= diamond * count) {
                        global.db.data.users[m.sender].money -= diamond * count
                        global.db.data.users[m.sender].diamond += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga Rp.${diamond * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Diamond Dengan Harga Rp.${diamond * count}`,m)
                    break
                case 'iron':
                    if (global.db.data.users[m.sender].money >= iron * count) {
                        global.db.data.users[m.sender].money -= iron * count
                        global.db.data.users[m.sender].iron += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Iron Dengan Harga Rp.${iron * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Iron Dengan Harga Rp.${iron * count}`,m)
                    break
                case 'string':
                    if (global.db.data.users[m.sender].money >= string * count) {
                        global.db.data.users[m.sender].money -= string * count
                        global.db.data.users[m.sender].string += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} String Dengan Harga Rp.${string * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} String Dengan Harga Rp.${string * count}`,m)
                    break
                case 'potion':
                    if (global.db.data.users[m.sender].money >= potion * count) {
                        global.db.data.users[m.sender].money -= potion * count
                        global.db.data.users[m.sender].potion += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga Rp.${potion * count}`, m)
                    } else conn.reply(m.chat, `Uang Tiidak Cukup Untuk Membeli ${count} Potion Dengan Harga Rp.${potion * count}`,m)
                    break
                case 'limit':
                    if (global.db.data.users[m.sender].money >= limit * count) {
                        global.db.data.users[m.sender].money -= limit * count
                        global.db.data.users[m.sender].limit += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Limit Dengan Harga Rp.${limit * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Limit Dengan Harga Rp.${limit * count}`,m)
                    break
                case 'kayu':
                    if (global.db.data.users[m.sender].money >= kayu * count) {
                        global.db.data.users[m.sender].money -= kayu * count
                        global.db.data.users[m.sender].kayu += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Kayu Dengan Harga Rp.${kayu * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Kayu Dengan Harga Rp.${kayu * count}`,m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].money >= sampah * count) {
                        global.db.data.users[m.sender].money -= sampah * count
                        global.db.data.users[m.sender].sampah += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Trash Dengan Harga Rp.${sampah * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Trash Dengan Harga Rp.${sampah * count}`,m)
                    break
                case 'pickaxe':
                    if (global.db.data.users[m.sender].money >= pickaxe * count) {
                        global.db.data.users[m.sender].money -= pickaxe * count
                        global.db.data.users[m.sender].sampah += count * 1
                        conn.reply(m.chat, `Sukses Membeli ${count} Packaxe Dengan Harga Rp.${pickaxe * count}`, m)
                    } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Trash Dengan Harga Rp.${pickaxe * count}`,m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].money += diamond * count
                        global.db.data.users[m.sender].diamond -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond Dengan Harga Rp.${sdiamond * count}`.trim(), m)
                    } else conn.reply(m.chat, `Diamond Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'emerald':
                    if (global.db.data.users[m.sender].emerald >= count * 1) {
                        global.db.data.users[m.sender].money += semerald * count
                        global.db.data.users[m.sender].emerald -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Emerald Dengan Harga Rp.${semerald * count}`.trim(), m)
                    } else conn.reply(m.chat, `Emerald Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'iron':
                    if (global.db.data.users[m.sender].iron >= count * 1) {
                        global.db.data.users[m.sender].money += siron * count
                        global.db.data.users[m.sender].iron -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Iron Dengan Harga Rp.${siron * count}`.trim(), m)
                    } else conn.reply(m.chat, `Iron Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'string':
                    if (global.db.data.users[m.sender].string >= count * 1) {
                        global.db.data.users[m.sender].money += sstring * count
                        global.db.data.users[m.sender].string -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} String Dengan Harga Rp.${sstring * count}`.trim(), m)
                    } else conn.reply(m.chat, `String Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'kayu':
                    if (global.db.data.users[m.sender].kayu >= count * 1) {
                        global.db.data.users[m.sender].money += skayu * count
                        global.db.data.users[m.sender].kayu -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Kayu Dengan Harga Rp.${skayu * count}`.trim(), m)
                    } else conn.reply(m.chat, `Kayu Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].money += ssampah * count
                        global.db.data.users[m.sender].sampah -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Trash Dengan Harga Rp.${ssampah * count}`.trim(), m)
                    } else conn.reply(m.chat, `Trash Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga Rp.${spotion * count}`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'gold':
                    if (global.db.data.users[m.sender].gold >= count * 1) {
                        global.db.data.users[m.sender].money += sgold * count
                        global.db.data.users[m.sender].gold -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Gold Dengan Harga Rp.${sgold * count}`.trim(), m)
                    } else conn.reply(m.chat, `Gold Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'batu':
                    if (global.db.data.users[m.sender].batu >= count * 1) {
                        global.db.data.users[m.sender].money += sbatu * count
                        global.db.data.users[m.sender].batu -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Batu Dengan Harga Rp.${sbatu * count}`.trim(), m)
                    } else conn.reply(m.chat, `Batu Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'kardus':
                    if (global.db.data.users[m.sender].kardus >= count * 1) {
                        global.db.data.users[m.sender].money += skardus * count
                        global.db.data.users[m.sender].kardus -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Kardus Dengan Harga Rp.${skardus * count}`.trim(), m)
                    } else conn.reply(m.chat, `Batu Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'botol':
                    if (global.db.data.users[m.sender].botol >= count * 1) {
                        global.db.data.users[m.sender].money += sbotol * count
                        global.db.data.users[m.sender].botol -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Botol Dengan Harga Rp.${sbotol * count}`.trim(), m)
                    } else conn.reply(m.chat, `Batu Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'kaleng':
                    if (global.db.data.users[m.sender].kaleng >= count * 1) {
                        global.db.data.users[m.sender].money += skaleng * count
                        global.db.data.users[m.sender].kaleng -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Kaleng Dengan Harga Rp.${skaleng * count}`.trim(), m)
                    } else conn.reply(m.chat, `Batu Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        console.log(e)
    }
}

handler.help = ['beli', 'jual']
handler.tags = ['rpg']
handler.command = /^(beli|jual)$/i
handler.group = true

export default handler
