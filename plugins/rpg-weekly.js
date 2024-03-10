const prem = 15000
const limitprem = 30
const moneyprem = 15000
const free = 5000 // tambahkan nilai hadiah dasar
const limitfree = 20 // tambahkan nilai hadiah dasar

let handler = async (m, { isPrems, conn }) => { // tambahkan conn di parameter
    let time = global.db.data.users[m.sender].lastweekly + 300000
    if (new Date - global.db.data.users[m.sender].lastweekly < 300000) throw `Kamu Sudah Mengambilnya Minggu Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi`
    global.db.data.users[m.sender].exp += isPrems ? prem : free
    global.db.data.users[m.sender].money += isPrems ? moneyprem : free // ganti moneyfree dengan free
    global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
    conn.reply(m.chat, `Selamat Kamu Mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? limitprem : limitfree} Limit`, m)
    global.db.data.users[m.sender].lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly|wl)$/i

handler.fail = null
handler.group = true

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

    monthly = (monthly < 10) ? "0" + monthly : monthly
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return monthly + " Hari " + hours + " Jam " + minutes + " Menit"
}