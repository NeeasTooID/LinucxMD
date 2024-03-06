var handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`${conn.getName(m.sender)} Telah AFK

Alasan ➠ ${text ? ': ' + text : ''}`)
  }
  handler.help = ['afk']
  handler.tags = ['user']
  handler.command = /^afk$/i
  
  export default handler
