 import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    try {
        let imageUrl;
        if (command == 'waifu') {
            let response = await fetch('https://linucxapi.zanixon.xyz/anime-waifu'); // Ganti <URL_Router> dengan URL router Anda
            let body = await response.text();
            let $ = cheerio.load(body);
            imageUrl = $('img').attr('src'); // Mengambil atribut src dari tag img
        } else if (command == 'waifuv2') {
            let response = await fetch('https://linucxapi.zanixon.xyz/anime-waifuv2'); // Ganti <URL_Router> dengan URL router Anda
            let body = await response.text();
            let $ = cheerio.load(body);
            imageUrl = $('img').attr('src'); // Mengambil atribut src dari tag img
        } else if (command == 'pero') {
            let response = await fetch(' '); // Ganti <URL_Router> dengan URL router Anda
            let body = await response.text();
            let $ = cheerio.load(body);
            imageUrl = $('img').attr('src'); // Mengambil atribut src dari tag img
        }

        // Menentukan ekstensi gambar (png atau jpg) dari URL
        let extension = imageUrl.split('.').pop();
        
        // Mengambil gambar dari URL dan mengirimkannya ke obrolan
        let imgResponse = await fetch(imageUrl);
        let imgBuffer = await imgResponse.buffer();
        conn.sendFile(m.chat, imgBuffer, `anu.${extension}`, '', m);
    } catch (error) {
        console.error('Failed to fetch image:', error);
        conn.reply(m.chat, 'Failed to fetch image', m);
    }
}

handler.help = ['waifu', 'waifuv2'];
handler.tags = ['random'];
handler.command = /^(waifu|waifuv2)$/i;
handler.limit = 10;
handler.premium = false;

export default handler;