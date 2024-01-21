import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Input Text Dan Karakter!\nExample: ${usedPrefix + command} hai Kirito|kamu sedang apa?`;
  
  try {
    const [logic, prompt] = text.split('|');
    m.reply(`Tunggu sebentar...`);
    const res = await fetch(`https://api.botcahx.eu.org/api/search/c-ai?prompt=${prompt}?&char=${logic}&apikey=${btc}`);
    const json = await res.json();
    m.reply(json.message);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat menjalankan perintah.');
  }
};

handler.command = handler.help = ['c-ai', 'character-ai'];
handler.tags = ['ai'];
handler.owner = false;
handler.limit = true;
handler.group = false;
handler.private = false;

export default handler;
