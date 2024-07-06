import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

            let startTime = new Date();
            let resl = await animeVideo()
            let cap =  `*Fetching:* ${(new Date() - startTime) / 1000} seconds`;
            m.reply(wait)
            await conn.sendFile(m.chat, resl.source, "", cap, m)
    }
handler.help = ["amv"]
handler.tags = ["anime"]
handler.command = /^(amv)$/i
handler.register = false
handler.premium = false
handler.limit = true

export default handler

async function animeVideo() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}