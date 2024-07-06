import uploadFile from '../lib/uploadFile.js';
import { rose as api } from '../lib/roseGet.js';

let handler = async (m, { conn, args, usedPrefix, command, quoted }) => {

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime) throw 'Reply/send your image with caption .ocr';
  
  conn.reply(m.chat, wait, m)

  let media = await q.download();
  let out = await uploadFile(media);
  try {
  const { data } = await api.post("https://api.itsrose.rest/image/ocr", {
			init_image: out,
		});

		const { status, message, result } = data;

		if (!status) {
			return m.reply(message);
		}

		await conn.sendMessage(m.chat, { text: result.text }, { quoted: m });
  
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, eror, m);
  }
};

handler.help = ['ocr <reply image>'];
handler.tags = ['ai', 'tools'];
handler.command = /(ocr)/i;
handler.limit = true;
handler.premium = false;

export default handler;