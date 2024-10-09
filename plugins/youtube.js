import fetch from 'node-fetch';
const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, args, command }) => {
  if (!(args[0] || '').match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`*Example:* \n${usedPrefix}${command} https://youtu.be/pvlDjh_UgvA`)
  try {
    let results = await (await fetch(`https://api.betabotz.eu.org/api/download/ytmp3?url=${args[0]}&apikey=${lann}`)).json()
    let info = results.result;
    let videoId = info.id;
    let title = info.title;
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let duration = parseInt(info.duration);
    let source = info.source;
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    let infoText = `  ◦ *Title*: ${title}
  ◦ *Duration*: ${durationText}
  ◦ *Source*: ${source}
  
YTdl By ${global.info.namebot}
GetInfo By: 
- api.betabotz.eu.org
- api.botcahx.eu.org
Sent By Assistant ${global.info.namebot}`;

      if (!/all/.test(command) && await getDevice(m.key.id) == 'android') {
  conn.sendButton(m.chat, infoText, global.wm, thumbnailUrl, [['🎵 AUDIO', `.ytmp3 ${args[0]}`],['📹 VIDEO', `.ytmp4 ${args[0]}`]], m)
  } else conn.reply(m.chat, `*Silahkan tulis ini untuk mendownload audio:*\n> .ytmp3 linkYt\n\n*Silahkan tulis ini untuk mendownload Video:*\n> .ytmp4 linkYt`, m)

  } catch (e) {
    console.log(e);
    m.reply(`Could not find results. Please enter the URL correctly`);
  }
};

handler.help = ['youtube'].map(v => v + ' url');
handler.tags = ['downloader'];
handler.command = /^(yt|youtube)$/i;
handler.register = false
handler.premium = false;
handler.limit = true;

export default handler