import FormData from 'form-data';
import axios from 'axios'; // Corrected the 'fetch' import
import fs from 'fs';
import uploadFile from '../lib/uploadFile.js';

const apiUrl = 'https://api.itsrose.rest/image/vid2vid';

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  if (!text) throw ` • S T Y L E - C H O I C E
Fire
Demon
Studio
School
Tradition
Chibi
Vintage
Horror
Flame
Prince
Yuki
Future
Isekai
Space
Manga
Rockstar
Ghost
Football
Tech
Survivor
Paladin
Romantic
Cyberpunk
Galaxy
Shinobi
Fantasy
Tokyo
Lawyer
B-ball
Shonen
Battle
Ice
Aqua
Stellar
Fury
Elf
Sorcerer
Medieval
Vampire
Chaotic
Villain
Hammer
Toxic
Serpent
Clown
Soldier
Cobra
Warrior
Ninja
Dystopia
Noble
Detective
Steampunk
Pirate
Caveman
Knight
Student
Western
Explorer
Festival
Corpse
Princess
Inventor
Superhero
Ocean
Dragon
Spell
Fisherman
Frost
Elder
Hula
Alien
Officer
Defender
Skeleton
Evil
Stoneage
    
*NOTE:* reply/send ur image with caption .${command} ⧼style⧽`

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime) throw 'Reply/send your image with caption .vid2vid ⧼style⧽';
  
  conn.reply(m.chat, wait, m)

  let media = await q.download();
  let out = await uploadFile(media);
  let result = await main(`${out}`, `${text}`)
  try {
    await 
    conn.sendFile(m.chat, result.result.video, null, `*Here's your image.*`, m);
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, eror, m);
  }
};

handler.help = ['vid2vid <reply video & caption style>'];
handler.tags = ['ai'];
handler.command = /(vid2vid|v2v)/i;
handler.limit = true;
handler.premium = false;

export default handler

async function getBuffer(url, options = {}) {
  try {
    const res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

async function main(url, text) {
  try {
    const videoFile = await getBuffer(url);
    const formData = new FormData();
    formData.append('file', videoFile, { filename: 'video_anime.mp4', contentType: 'video/mp4' });
    const response = await axios.post(apiUrl, formData, {
      params: {
        style: text
      },
      headers: {
        Authorization: `${global.rose}`,
        ...formData.getHeaders(),
        'accept': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}