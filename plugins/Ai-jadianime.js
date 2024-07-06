import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';
import axios from 'axios';

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  let maximus = [
    "aether",
    "anime",
    "baby",
    "barbie",
    "beauty",
    "blindbox",
    "block",
    "chocolate",
    "christmas_anime",
    "cyberpunk",
    "ghair",
    "gothic",
    "gtav",
    "hallowen",
    "hell",
    "heroes",
    "horror",
    "impasto",
    "jojo",
    "lightning",
    "luminous",
    "old",
    "onepiece",
    "pastel",
    "pokemon",
    "rdr",
    "retro",
    "rickmorty",
    "spirited",
    "statue",
    "surya",
    "synthwave",
    "thunder",
    "wonka",
    "zombie"
]
  let anime = "anime";
  let query = args[0] ? args[0] : anime;
  let list = `*OTHER STYLE*

aether, anime, baby, barbie, beauty, blindbox, block, chocolate, christmas_anime, cyberpunk, ghair, gothic, gtav, halloween, hell, heroes, horror, impasto, jojo, lightning, luminous, old, onepiece, pastel, pokemon, rdr, retro, rickmorty, spirited, statue, surya, synthwave, thunder, wonka, zombie

*example:* ${usedPrefix}${command} gtav`;
	try {
  let q = m.quoted ? m.quoted : m;
  let media = await q.download();
  let url = await uploadImage(media);
    
    const payload = {
  init_image: url,
  style: query,
  skin: "default",
  image_num: 1,
  prompt: "smooth, hd, hdr"
};
    m.reply(wait)
    const { data } = await axios.post("https://api.itsrose.rest/image/turnMe", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { status, result } = data;
  
  const { images, metadata } = result;
    
    for (const image of images) {
    await conn.sendFile(m.chat, image, 'mm.jpg', `Here your image.\n\n*Style:* ${query}\n\n——————————————\n\n${list}`, m);
}
    } catch (e) {
    console.log(e)
    conn.reply(m.chat, eror, m)
    }
};
handler.help = ['jadianime <style>'];
handler.tags = ['ai']
handler.command = /^(jadianime|toanime)$/i;
handler.register = false
handler.premium = false
handler.limit = true
handler.xmaze = true

export default handler