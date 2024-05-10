import axios from 'axios';
import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `
*example:* ${usedPrefix}${command} currently in the room, Japanese themed 
`
  if (!text.includes(',')) throw `Tolong gunakan prompt dengan benar. Gunakan koma *[ , ]* untuk memisahkan argumen.\n*Contoh:* ${usedPrefix}${command} currently in the room, Japanese themed`;  
  try {
  let q = m.quoted ? m.quoted : m;
  let media = await q.download();
  let url = await uploadImage(media);

  const payload = {
  prompt: text,
  type: "url|base64",
  init_image: url
};

  const { data } = await axios.post("https://api.itsrose.rest/image/outpainting", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { result, status } = data;

  if (!status) {
    console.log(message); 
  } else {
    const { type, mimetype, images } = result;
    let tipe = result.type
    let mimitype = result.mimetype
    
    let medata = `*Prompt*: ${text}
*Type*: ${tipe}
*Mimetype*: ${mimitype}

${global.wm}`;
    
    for (const image of images) {
      await conn.sendFile(m.chat, Buffer.from(image, 'base64'), 'gambar.jpg', medata, m)
            }
        }
    } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
   }
};

handler.help = ['outpainting <image & prompt>'];
handler.tags = ['ai'];
handler.command =  /outpainting|opaint/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler