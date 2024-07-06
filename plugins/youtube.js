import ytdl from 'ytdl-core';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import search from 'yt-search';
const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, args, command }) => {
  if (!args[0]) return m.reply(`*example*: .${command} YTURL`);
  try {
    let results = await search(args[0]);
    let videoId = results.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let url = info.videoDetails.video_url;
    let duration = parseInt(info.videoDetails.lengthSeconds);
    let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
    let views = info.videoDetails.viewCount;
    let minutes = Math.floor(duration / 60);
    let description = results.videos[0].description;
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
}

    let audio = ytdl(videoId, { quality: 'highestaudio' });
    let inputFilePath = 'tmp/' + title + '.webm';
    let outputFilePath = 'tmp/' + title + '.mp3';

    let viewsFormatted = formatViews(views);
    let infoText = `  ◦ *Duration*: ${durationText}
  ◦ *Upload*: ${uploadDate}
  ◦ *Views*: ${viewsFormatted}
  
YTdl By https://github.com/fent/node-ytdl-core
Search By https://github.com/talmobi/yt-search
Sent By Assistant ${global.info.namebot}`;

    /*var pesan = conn.relayMessage(m.chat, {
                extendedTextMessage:{
                text: infoText, 
                contextInfo: {
                     externalAdReply: {
                        title: "AUDIO SEDANG DI KIRIM",
                        body: `Youtube Play by Assisten ${global.info.namebot}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: thumbnailUrl,
                        sourceUrl: "https://youtube.com"
                    }
                }, mentions: [m.sender]
}}, {});*/

/*await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })*/
      if (!args[0].match(/yout/gi)) throw 
      if (!/all/.test(command) && await getDevice(m.key.id) == 'android') {
  conn.sendButton(m.chat, infoText, global.wm, thumbnailUrl, [['🎵 AUDIO', `.ytmp3 ${args [0]}`],['📹 VIDEO', `.ytmp4 ${args[0]}`]], m)
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