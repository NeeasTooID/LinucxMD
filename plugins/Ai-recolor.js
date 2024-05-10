import uploadImage from '../lib/uploadImage.js';
import axios from 'axios';

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
      const img = await q.download();
      const out = await uploadImage(img);
      const api = `https://api.itsrose.rest/image/recolor?url=${out}&accept=false`
      const { data } = await axios.get(api, { headers: { Authorization: `${global.rose}` }, responseType: 'arraybuffer' });
      const caption = `Sudah jadi, tuan!`;
      conn.sendFile(m.chat, Buffer.from(data), 'result.jpg',   caption, m);
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi Gagal/Error.`);
  }
}

handler.help = ['recolor'].map(v => v + ' <caption / reply img>')
handler.tags = ['ai'];
handler.command = /^(recolor)$/i
handler.premium = false;
handler.limit = true;

export default handler;