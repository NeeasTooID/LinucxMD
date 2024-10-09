/*export async function before(m, { isAdmin, isBotAdmin, conn }) {
  if (m.isBaileys && m.fromMe) {
    return true;
  }
  let chat = global.db.data.chats[m.chat];
  if (chat.antiBot) {
    if (m.isBaileys && m.fromMe == false) {
      if (isAdmin || !isBotAdmin) {} else {
        m.reply("*Bot Lain Terdeteksi*\n\nHusshhh Sana Pergi Dari Grup Ini!!!");
        return await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
      }
      return true;
    }
  }
  return true;
}*/