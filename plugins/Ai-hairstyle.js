import fetch from 'node-fetch';
import FormData from 'form-data';
import axios from 'axios';

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  if (!text) throw `*S T Y L E - C H O I C E*
» fishtail_girl
» mermaid_girl
» bluntbangs_girl
» curtains_girl
» slicked_man
» side_man
» school_girl
» shorthair_girl
» straight_girl
» shor_man
» k_man
» natural_man
» comma_man

Reply/Send image dengan menulis ${usedPrefix}${command} <style>`

  let [style, ...message] = text.split(' ');
  message = message.join(' ');
  let pushname = m.pushName || "No Name";
  let setStyle;

  switch(style) {
      case 'fishtail_girl':
      setStyle = 'fishtail_girl';
      break;
      case 'mermaid_girl':
      setStyle = 'mermaid_girl';
      break;
       case 'bluntbangs_girl':
      setStyle = 'bluntbangs_girl';
      break;
      case 'curtains_girl':
      setStyle = 'curtains_girl';
      break;
       case 'school_girl':
      setStyle = 'school_girl';
      break;
       case 'shorthair_girl':
      setStyle = 'shorthair_girl';
      break;
       case 'straight_girl':
      setStyle = 'straight_girl';
      break;
      case 'shor_man':
      setStyle = 'shor_man';
      break;
      case 'k_man':
      setStyle = 'k_man';
      break;
      case 'natural_man':
      setStyle = 'natural_man';
      break;
      case 'comma_man':
      setStyle = 'comma_man';
      break;
      case 'slicked_man':
      setStyle = 'slicked_man';
      case 'side_man':
      setStyle = 'side_man';
      break;
      default:
      throw '*Invalid style*.';
  }
let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'reply/send ur image with caption .hairstyle ⧼style⧽';
  let media = await q.download();
  m.reply(wait)
    const API_URL = `https://api.itsrose.rest/image/hair_style?hair_id=${setStyle}`;
    const form = new FormData();
    form.append("file", Buffer.from(media), {
    filename: 'img.jpg',
    contentType: 'image/jpg'
});
    const { data: responseData, status } = await axios.post(API_URL, form, {
      headers: {
        Authorization: `${global.rose}`,
        ...form.getHeaders(),
        'accept': 'application/json',
      },
      responseType: "arraybuffer"
    });
    if (status !== 200) {
      return "error";
    }
    try {
    await conn.sendMessage(m.chat, {
			image: responseData,
			caption: wm
		}, { quoted: m });
		   } catch (e) {
    console.log(e)
    conn.reply(m.chat, eror, m)
  };
};

handler.help = ['changehair'];
handler.tags = ['ai'];
handler.command = /^(changehair|hair)$/i;
handler.premium = false;
handler.limit = true;

export default handler