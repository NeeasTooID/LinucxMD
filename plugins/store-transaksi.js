let handler = async (m, { conn, command, args, usedPrefix, sender, isOwner }) => {
  if (command === 'transaksi') {
    if (!m.mentionedJid[0]) {
      conn.reply(m.chat, '*example*: .transaksi @user', m)
      return
    }

    let user = m.mentionedJid[0]
    let userDB = global.db.data.users[user]
    let pesan = ''

    if (userDB && userDB.transaksi) {
      let transaksi = userDB.transaksi
      pesan = `「 TRANSAKSI ${transaksi.status} 」\n\n📆 DATE : ${transaksi.tanggal}\n⌚ CLOCK     : ${transaksi.jam}\n✨ STATUS  : ${transaksi.status}\n📢 ID TRX  : ${transaksi.id}\n\nOrder ${userDB.name} ${transaksi.status === 'PENDING' ? 'being processed!' : 'Its finished!'}`
    } else {
      pesan = `There are no transactions available for this user.`
    }

    conn.reply(m.chat, pesan, m)
    return
  }

  if (!isOwner) {
    conn.reply(m.chat, 'Sorry, only bot owners can use this command.', m)
    return
  }

  let user = m.mentionedJid[0]
  let status = ''

  switch (command) {
    case 'proses':
      status = 'PENDING'
      break
    case 'done':
      status = 'FINISHED'
      break
    default:
      return
  }

  let tanggal = new Date().toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta' })
  let jam = new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })
  let userDB = global.db.data.users[user]
  let idTrx = ''

  if (userDB && userDB.transaksi && userDB.transaksi.status === status) {
    idTrx = userDB.transaksi.id
  } else {
    idTrx = `#${Math.random().toString(36).substring(7)}`
  }

  let pesan = ''

  if (userDB) {
    userDB.transaksi = {
      tanggal,
      jam,
      status,
      id: idTrx
    }
    global.db.data.users[user] = userDB
    pesan = `Transaction ${status} successfully added to ${userDB.name}.`
  } else {
    pesan = `Could not find user in database.`
  }

  conn.reply(m.chat, pesan, m)
}

handler.help = ['transaksi <@user>', 'done <@user>', 'proses <@user>']
handler.tags = ['store']
handler.command = /^(transaksi|done|proses)$/i
handler.group = true
handler.register = true

export default handler