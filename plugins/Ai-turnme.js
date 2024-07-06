import axios from 'axios';
import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  if (!text) throw `*S T Y L E   T Y P E*
Aether  
Airbender  
Anime  
Avatar  
Baby  
Barbie  
Beauty  
Blindbox  
Block  
Chocolate  
Cyberpunk  
Danil  
Firebender  
Ghair  
Gothic  
Gtav  
Hell  
Heroes  
Horror  
Illustration  
Impasto  
Jojo  
Junet  
Lightning  
Luminous  
Old  
Onepiece  
Papercut  
Pastel  
Pixar  
Pixel  
Pokemon  
Rdr  
Retro  
Rickmorty  
Spirited  
Tatoo  
Thunder 
Zombie

${usedPrefix}${command} style|prompt

*example:* ${usedPrefix}${command} cyberpunk|blue eyes
`
  
  let [ style, prompt ] = text.split('|');
  let media = await q.download();
  let url = await uploadImage(media);
  let setStyle;
  
  switch(style) {
      case 'aether':
      setStyle = 'aether';
      break;
      case 'airbender':
      setStyle = 'airbender';
      break;
      case 'anime':
      setStyle = 'anime';
      break;
      case 'avatar':
      setStyle = 'avatar';
      break;
       case 'baby':
      setStyle = 'baby';
      break;
       case 'barbie':
      setStyle = 'barbie';
      break;
       case 'beauty':
      setStyle = 'beauty';
      break;
       case 'blindbox':
      setStyle = 'blindbox';
      break;
       case 'block':
      setStyle = 'block';
      break;
       case 'chocolate':
      setStyle = 'chocolate';
      break;
       case 'cyberpunk':
      setStyle = 'cyberpunk';
      break;
       case 'danil':
      setStyle = 'danil';
      break;
      case 'firebender':
      setStyle = 'firebender';
      break;
      case 'ghair':
      setStyle = 'ghair';
      break;
      case 'gothic':
      setStyle = 'gothic';
      break;
       case 'gtav':
      setStyle = 'gtav';
      break;
       case 'hell':
      setStyle = 'hell';
      break;
       case 'heroes':
      setStyle = 'heroes';
      break;
       case 'horror':
      setStyle = 'horror';
      break;
       case 'illustration':
      setStyle = 'illustration';
      break;
       case 'impasto':
      setStyle = 'impasto';
      break;
       case 'jojo':
      setStyle = 'jojo';
      break;
       case 'junet':
      setStyle = 'junet';
      break;
      case 'lightning':
      setStyle = 'lightning';
      break;
      case 'luminous':
      setStyle = 'luminous';
      break;
      case 'old':
      setStyle = 'old';
      break;
       case 'onepiece':
      setStyle = 'onepiece';
      break;
       case 'papercut':
      setStyle = 'papercut';
      break;
       case 'pastel':
      setStyle = 'pastel';
      break;
       case 'pixar':
      setStyle = 'pixar';
      break;
       case 'pixel':
      setStyle = 'pixel';
      break;
       case 'pokemon':
      setStyle = 'pokemon';
      break;
       case 'rdr':
      setStyle = 'rdr';
      break;
       case 'retro':
      setStyle = 'retro';
      break;
      case 'rickmorty':
      setStyle = 'rickmorty';
      break;
      case 'spirited':
      setStyle = 'spirited';
      break;
      case 'tatoo':
      setStyle = 'tatoo';
      break;
       case 'thunder':
      setStyle = 'thunder';
      break;
       case 'zombie':
      setStyle = 'zombie';
      break;
      default:
      throw '*Style* yang dipilih tidak tersedia.';
  };
  
  const payload = {
  init_image: url,
  style: `${setStyle}`,
  skin: "default",
  image_num: 1,
  prompt: `${prompt}`
};
m.reply(`_Preparing ${command}..._`)
  const { data } = await axios.post("https://api.itsrose.rest/image/turnMe", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    console.log(message); 
  } else {
    const { images, metadata, generation_time } = result;
    let prompt = metadata.prompt;
    let style = metadata.style;
    let w = metadata.W;
    let h = metadata.H;
    
    let medata = `*I N F O :*
*Style*: ${style}
*Prompt*: ${prompt}`;
    
    for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 1000);
      });
    }
    m.reply(medata);
  }
};

handler.help = ['turnme <style|prompt>'];
handler.tags = ['ai'];
handler.command =  /^(turnme)$/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler