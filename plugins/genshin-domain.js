import fetch from 'node-fetch'

const handler = async (m, { conn, args, text, usedPrefix, command, isOwner }) => {
  if (!text) throw `${usedPrefix}${command} senin
  
*-= LIST DOMAINS =-*
— Senin
— Selasa
— Rabu
— Kamis
— Jumat
— Sabtu
` 
let Maximus;

  switch(text) {
       case 'senin':
      Maximus = 'Senin';
      break;
       case 'selasa':
      Maximus = 'Selasa';
      break;
       case 'rabu':
      Maximus = 'Rabu';
      break;
       case 'kamis':
      Maximus = 'Senin';
      break;
       case 'jumat':
      Maximus = 'Selasa';
      break;
       case 'sabtu':
      Maximus = 'Rabu';
      break;
      default:
      throw `*-= LIST DOMAINS =-*
— Senin
— Selasa
— Rabu
— Kamis
— Jumat
— Sabtu
` 
}
let data = await fetch(`https://raw.githubusercontent.com/XM4ZE/DATABASE/master/domain/${Maximus}.jpg`)
let image = await data.buffer()

conn.sendFile(m.chat, image, "mtype.jpg", `${text} - Domains`, m)
};
handler.help = handler.command = ['gidomain'];
handler.tags = ['genshin'];

export default handler;