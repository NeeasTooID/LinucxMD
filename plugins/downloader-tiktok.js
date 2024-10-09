import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;    
    try {
        if (!text.match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;        
        m.reply(wait);      
        const response = await axios.get(`https://api.botcahx.eu.org/api/dowloader/tiktok?url=${text}&apikey=${btc}`);        
        const res = response.data.result;      
        var { video, title, title_audio, audio } = res;
        let capt = `乂 *T I K T O K*\n\n`;
        capt += `◦ *Title* : ${title}\n`;
        capt += `◦ *Audio* : ${title_audio}\n`;
        capt += `\n`;        
        await conn.sendFile(m.chat, video, null, capt, m);
        conn.sendMessage(m.chat, { audio: { url: audio[0] }, mimetype: 'audio/mpeg' }, { quoted: m });         
    } catch (e) {
        console.log(e);
        throw `🚩 ${eror}`;
    }
};
handler.help = ['tiktok'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i;
handler.limit = true;
handler.register = false;
handler.xmaze = true;
export default handler;