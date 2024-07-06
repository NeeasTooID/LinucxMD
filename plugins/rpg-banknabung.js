const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('kamu belum mempunyai kartu ATM\n\nSilahkan membuat atm dengan menulis\n*.craft atm*')
  if (user.bank > user.fullatm) return m.reply('Uang Di ATM sudah penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya nya sudah mencapai batas')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Sukses menabung sebesar ${count} Money 💹`, m)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`, m)
}
handler.help = ['atm <jumlah>']
handler.tags = ['rpg']
handler.command = /^(atm([0-9]+)|atm|atmall)$/i
handler.rpg = true
handler.group = true
export default handler