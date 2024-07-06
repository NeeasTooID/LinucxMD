let handler = m => m

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

handler.before = async function (m, { conn, user, isBotAdmin, isAdmin }) {
  if (typeof db.data.banned[m.sender] !== 'undefined' && db.data.banned[m.sender].status) {
  if (m.isGroup && isBotAdmin) {
  await sleep(10000)
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  }
  return true
}
export default handler


/*let handler = m => m
handler.all = async function (m, { isBlocked, isGroup, text }) {
let teks = m.text
let regs = /(teks)/i
let isAin = regs.exec(m.text)
if (m.isGroup) {
   if (!db.data.users[m.sender].banned) return 
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
      }
}
module.exports = handler*/