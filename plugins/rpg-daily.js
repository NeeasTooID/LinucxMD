const free = 1000
const prem = 5000
const limitfree = 5
const limitprem = 10
const moneyfree = 1000
const moneyprem = 5000

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 60000
    if (new Date - global.db.data.users[m.sender].lastclaim < 60000) throw `Kamu Sudah Mengambilnya Hari Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi`

    global.db.data.users[m.sender].exp += isPrems ? prem : free
    global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
    global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree

    conn.reply(m.chat, `Selamat Kamu Mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+${isPrems ? limitprem : limitfree} Limit`, m)
    global.db.data.users[m.sender].lastclaim = new Date * 1
}

handler.help = ['daily']
handler.tags = ['rpg']
handler.command = /^(dl|daily)$/i
handler.fail = null

export default handler

function msToTime(duration) {
    var hours = Math.floor(duration / (1000 * 60 * 60)),
        minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes

    return hours + " Jam " + minutes + " Menit"
}
