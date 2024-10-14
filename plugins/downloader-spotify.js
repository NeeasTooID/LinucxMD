import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `* Masukkan URL lagu!*\n\nExample:\n${usedPrefix + command} https://open.spotify.com/track/5nfF7E8fvLHfrNULjd8jel`;
  if (args[0].match(/https:\/\/open.spotify.com/gi)) {
    m.reply(wait);
    try {
      const res = await fetch(`https://api.ryzendesu.vip/api/downloader/spotify?url=${args[0]}`);
      let jsons = await res.json();
      const {
        title,
        artists,
        album,
        cover,
        releaseDate
      } = jsons.metadata;
      const url = jsons.link;

      let captionvid = `> Title: ${title}\n> Artist: ${artists}\n> Album: ${album}\n> Release Date: ${releaseDate}`;
      
      let pesan = await conn.sendMessage(m.chat, {
        text: captionvid,
        contextInfo: {
          externalAdReply: {
            title: "Spotify Downloader",
            body: "By NeeastooID - LinucxMD",
            thumbnailUrl: cover,
            sourceUrl: args[0],
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      });
      
      await conn.sendMessage(m.chat, {
        document: { url: url }, 
        mimetype: 'audio/mpeg', 
        fileName: `${title}.mp3`,
        caption: ''
      }, { quoted: m });

    } catch (e) {
      throw ` Terjadi kesalahan: ${e}`;
    }
  }
};

handler.help = ['spotify'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(spotify(a(audio)?|mp3)?)$/i;
handler.premium = false;
handler.limit = 500;

export default handler;
