import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*🚩 Masukkan URL lagu!*\n\nExample:\n${usedPrefix + command} https://open.spotify.com/track/2LKOHdMsL0K9KwcPRlJK2v`;
  if (args[0].match(/https:\/\/open.spotify.com/gi)) {
    m.reply(wait);
    try {
      const res = await fetch(`https://api.botcahx.eu.org/api/download/spotify?url=${args[0]}&apikey=${btc}`);
      let jsons = await res.json();
      const {
        thumbnail,
        title,
        name,
        duration,
        url
      } = jsons.result.data;
      const {
        id,
        type
      } = jsons.result.data.artist;
      let captionvid = `> Title: ${title}\n> ID: \`${id}\`\n> Duration: ${duration}\n> Type: ${type}`;
      let pesan = await conn.sendMessage(m.chat, {
        text: captionvid,
        contextInfo: {
          externalAdReply: {
            title: "Spotify Downloader",
            body: "",
            thumbnailUrl: thumbnail,
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
             }, {quoted: m})
    } catch (e) {
      throw `🚩 ${eror}`;
    }
  }
};

handler.help = ['spotify'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(spotify(a(audio)?|mp3)?)$/i
handler.premium = true;

export default handler