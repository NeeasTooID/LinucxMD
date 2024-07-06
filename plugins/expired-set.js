let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Masukkan angka mewakili jumlah hari !\n*Misal : ${usedPrefix + command} 30*`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[who].expired += now + jumlahHari
    conn.reply(m.chat, `Berhasil menetapkan hari kadaluarsa untuk Grup ini selama ${args[0]} hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
handler.help = ['addsewa <hari>']
handler.tags = ['owner']
handler.command = /^(setexpired|addsewa)$/i
handler.rowner = true
handler.group = false

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}



/*
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!text || isNaN(text)) throw `Masukkan angka mewakili jumlah hari !\n*Misal : ${usedPrefix + command} idgroup|30*`

    var hl = []
    hl[0] = text.split('|')[0]
    hl[1] = text.split('|')[1]

    var jumlahHari = 86400000 * hl[1]
    var now = new Date() * 1
    if (now < global.db.data.chats[hl[0]].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[hl[0]].expired += now + jumlahHari
    conn.reply(m.chat, `Berhasil menetapkan hari kadaluarsa untuk Grup ${hl[0]} selama ${hl[1]} hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[hl[1]].expired - now)}`, m)
}
handler.help = ['addsewa <id|hari>']
handler.tags = ['owner']
handler.command = /^(setexpired|addsewa)$/i
handler.rowner = true
handler.group = false

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}
*/