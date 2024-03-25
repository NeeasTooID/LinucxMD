import axios from 'axios';
import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw ` *Example:* 
Reply videos or send videos by writing
*${usedPrefix}${command} style*

*T Y P E  S T Y L E*
SPACE
EXPLORER
FESTIVAL
CORPSE
MEDIEVAL
PRINCESS
INVENTOR
SUPERHERO
OCEAN
DRAGON
SPELL
FISHERMAN
FROST
WARRIOR
ELDER
HULA
ALIEN
OFFICER
DEFENDER
SKELETON
EVIL
STONEAGE
` 
  let q = m.quoted ? m.quoted : m;
  let media = await q.download();
  let url = await uploadImage(media);

  const payload = {
    style: `${text}`,
    zoom_steps: 50,
    type: "url|base64",
    init_image: url,
  };

  const { data } = await axios.post("https://api.itsrose.life/image/deforum", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    console.log(message); 
  } else {
    const { video, generation_time, metadata } = result;
    let second = generation_time;
    let style = metadata.style;
    let zoom_steps = metadata.zoom_steps;
    
    let medata = `*Style:* ${style}
*Zoom Steps:* ${zoom_steps}
*Second:* ${second}`
m.reply('Harap Tunggu. Sedang memproses gambar')
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { video: { url: video } });
          resolve();
        }, generation_time * 1000);
      })
    m.reply(medata);
  }
};

handler.help = ['deforum <reply video & style>'];
handler.tags = ['ai'];
handler.command = /(deforum)/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler