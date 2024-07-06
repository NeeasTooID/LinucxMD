import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        m.reply('Contoh penggunaan: .spotify https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA');
        return;
    }
    
    try {
        let res = await fetch(`https://api.neastooid.xyz/api/downloader/spotidl?url=${encodeURIComponent(text)}`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch audio from Spotify API (${res.status} ${res.statusText})`);
        }
        
        let json = await res.json();
        
        if (!json.v1_audio_url) {
            throw new Error('Audio URL not found in API response');
        }
        
        m.reply('Please wait..., akan memakan waktu beberapa saat.');
        await conn.sendFile(m.chat, json.v1_audio_url, 'audio.mp3', null, m, true, {
            type: 'audioMessage', 
            ptt: true 
        });
    } catch (e) {
        console.error(e);
        m.reply('Error occurred, please try again later.');
    }
}

handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify(a(audio)?|mp3)?)$/i;

handler.limit = true;

export default handler;
