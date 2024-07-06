import uploadFile from '../lib/uploadFile.js';
import { rose as api } from '../lib/roseGet.js';

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
      const img = await q.download();
      const url = await uploadFile(img);
      const { data } = await api.get("https://api.itsrose.rest/image/recolor", {
			url,
			json: true,
		});

		const { status, message, result } = data;

		if (!status) {
			return m.reply(message);
		}

		await conn.sendMessage(
			m.chat,
			{ image: Buffer.from(result.base64Image, "base64") },
			{ quoted: m }
		);
  } catch (e) {
    console.error(e);
    m.reply(eror);
  }
}

handler.help = ['recolor'].map(v => v + ' <caption / reply img>')
handler.tags = ['ai'];
handler.command = /^(recolor)$/i
handler.premium = false;
handler.limit = true;

export default handler;