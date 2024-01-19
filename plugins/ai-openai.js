import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Pengembang LinuxxMD? `;
  try {
    await m.reply(wait); // Assuming wait is defined somewhere in your code
    const apii = await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?text=${text}&apikey=TukangM`);
    const res = await apii.json();
    await m.reply(res.message);
  } catch (err) {
    console.error(err);
    throw 'Terjadi kesalahan dalam menjawab pertanyaan';
  }
};

handler.command = handler.help = ['ai'];
handler.tags = ['ai'];
handler.premium = false;

export default handler;
