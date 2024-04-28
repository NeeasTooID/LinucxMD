import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let infixity = async (m) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) throw 'No media found';

    let media = await q.download();
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link = await (isTele ? uploadImage : uploadFile)(media);

    // Gambar lebar
    let response = await fetch(`https://linucxapi.zanixon.xyz/api/tools/removebg?url=${encodeURIComponent(link)}&orientation=landscape`);
    let json = await response.json();

    if (json.status && json.code === 200) {
      let result = json.result;
      if (result && result.image_data) {
        let caption = `Remove Background by Ins AI 0.1\nImage Size: ${result.image_size}`;
        await conn.sendMessage(m.chat, { image: { url: result.image_data }, caption: caption }, { quoted: m });
      } else {
        m.reply('Gagal menghapus latar belakang gambar, coba lagi nanti.');
      }
    } else {
      m.reply('Gagal menghapus latar belakang gambar, coba lagi nanti.');
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply(`Terjadi kesalahan dalam memproses permintaan. Error: ${error.message}`);
  }
};

infixity.help = ['removebg'].map(v => 'reset' + v);
infixity.tags = ['tools'];
infixity.command = /^(removebg)$/i;

export default infixity;