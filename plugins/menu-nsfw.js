import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    try {
        let imageUrl;
        if (command == 'phentai') {
            let response = await fetch('https://linucxapi.zanixon.xyz/nsfw-ass'); // Ganti <URL_Router> dengan URL router Anda
            let body = await response.text();
            let $ = cheerio.load(body);
            imageUrl = $('img').attr('src'); // Mengambil atribut src dari tag img
        } else if (command == 'pass') {
            let response = await fetch('https://linucxapi.zanixon.xyz/nsfw-ass'); // Ganti <URL_Router> dengan URL router Anda
            let body = await response.text();
            let $ = cheerio.load(body);
            imageUrl = $('img').attr('src'); // Mengambil atribut src dari tag img
        } else if (command == 'pero') {
            let response = await fetch('https://linucxapi.zanixon.xyz/nsfw-ero'); // Ganti <URL_Router> dengan URL router Anda
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

handler.help = ['phentai', 'pass', 'pero'];
handler.tags = ['nsfw'];
handler.command = /^(phentai|pass|pero)$/i;
handler.limit = 100;
handler.premium = false;

export default handler;