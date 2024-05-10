import axios from 'axios'
import fetch from 'node-fetch'
const payloads = {
    text: "",
    model_id: "82a155cc139f85ee1b78b854a551c280",
};

const handler = async (m, { conn, args, text, usedPrefix, command, isOwner }) => {
  if (!text) throw `${usedPrefix}${command} text
` 
    if (isOwner) {
  if (args[0] === 'set') {
    if (args.length % 2 !== 1) {
      return m.reply('Invalid arguments.');
    }

    for (let i = 1; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      if (key && value) {
        payloads[key] = value;
        m.reply(`*${key}* has been set to *${value}*.`);
      }
    }
    return;
  }

  if (args[0] === 'payload') {
    let payloadInfo = '*Payloads*:';
    for (const [key, value] of Object.entries(payloads)) {
      payloadInfo += `\n${key}: ${value}`;
    }
    return m.reply(payloadInfo);
  }
}
  await sleep(2000)
  const updatedPayloads = { ...payloads, text: text };
  const { data } = await axios.request({
    baseURL: "https://api.itsrose.rest",
    url: "/sovits/tts/inference_text",
    method: "POST",
    headers: { Authorization: `${global.rose}` },
    data: updatedPayloads,
  }).catch((e) => e?.response);

  const { status, result } = data;

  if (!status) {
    return m.reply(message); 
  } else {
    const { audio, generation_time } = result;
    
          await conn.sendFile(m.chat, audio, `mmk.mp3`, null, m)
   }
};

handler.help = handler.command = ['sovits', 'svc'];
handler.tags = ['ai'];
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}