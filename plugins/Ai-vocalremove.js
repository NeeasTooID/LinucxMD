import FormData from 'form-data';
import axios from 'axios';
import fs from 'fs';
import uploadFile from '../lib/uploadFile.js';

const apikey = `${global.rose}`;
const apiUrl = 'https://api.itsrose.rest/audio/moise';

let handler = async (m, { conn, args, usedPrefix, command, quoted }) => {

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime) throw 'Reply/send your image with caption .vocalremover';
  
  conn.reply(m.chat, wait, m)

  let media = await q.download();
  let out = await uploadFile(media);
  let result = await main(`${out}`)
  try {
    await 
    conn.sendFile(m.chat, result.result.instrumental, null, null, m);
    conn.sendFile(m.chat, result.result.vocals, null, null, m);
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, eror, m);
  }
};

handler.help = ['vocalremover <reply audio>'];
handler.tags = ['ai', 'tools'];
handler.command = /(vocalremover|moise)/i;
handler.limit = true;
handler.premium = false;

export default handler;

async function getBuffer(url, options = {}) {
  try {
    const res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

async function main(url) {
  try {
    const videoFile = await getBuffer(url);
    const formData = new FormData();
    formData.append('file', videoFile, { filename: 'video_anime.mp4', contentType: 'video/mp4' });
    const response = await axios.post(apiUrl, formData, {
      headers: {
        Authorization: `${global.rose}`,
        ...formData.getHeaders(),
        'accept': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}