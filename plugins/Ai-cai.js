import axios from 'axios'
import fetch from 'node-fetch'

const payloads = {
    character_id: "8cda8312-1cbd-4b82-8069-7d47b1ae42d2",
    message: "",
    enable_nsfw: true,
    model: "rs_v8_72b"
};

const handler = async (m, { conn, args, text, usedPrefix, command, isOwner }) => {
  if (!text) throw `${usedPrefix}${command} hallo eula. apa kabar sayang?
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
  const updatedPayloads = { ...payloads, message: text };
  const { data } = await axios.request({
    baseURL: "https://api.itsrose.rest",
    url: "/cai/chat",
    method: "POST",
    headers: { Authorization: `${global.rose}` },
    data: updatedPayloads,
  }).catch((e) => e?.response);

  const { status, result } = data;

  if (!status) {
    return m.reply(message); 
  } else {
    const { message } = result;
    m.reply(message)
   }
};

handler.help = handler.command = ['cai', 'chat_ai'];
handler.tags = ['ai'];
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}