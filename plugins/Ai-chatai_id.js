import axios from 'axios'

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `
*example:* ${usedPrefix}${command} EULA
`
  const payload = {
  query: `${text}`
  };
  const { data } = await axios.post("https://api.itsrose.life/cai/search_characters", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { result, status } = data;

  if (!status) {
    console.log(message); 
  } else {
    
    const { characters } = result;
    let capt = `${characters.map(v => `*ID:* ${v.character_id}\n*Nama:* ${v.name}\n*——————————————————————*`).join`\n\n`}`.trim()
    m.reply(capt);
    }
};

handler.help = ['chatai_id'];
handler.tags = ['ai'];
handler.command = /^(chatai_id)$/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler;