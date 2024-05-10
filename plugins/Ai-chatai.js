import axios from 'axios'
import fetch from 'node-fetch'
import { translate } from '@vitalets/google-translate-api';
const indo = 'id'
const eangrais = 'en'
const payloads = {
    character_id: "8cda8312-1cbd-4b82-8069-7d47b1ae42d2",
    message: "",
    enable_nsfw: true
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
  const mmk = await translate(text, { to: eangrais, autoCorrect: true }).catch(_ => null)     
  //const mmk = await( await fetch(`https://api.lolhuman.xyz/api/translate/auto/en?apikey=${global.lolkey}&text=${text}`)).json()
  const updatedPayloads = { ...payloads, message: mmk.text.toString() };
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
    const maxim = await translate(message, { to: indo, autoCorrect: true }).catch(_ => null)     
    //const maxim = await( await fetch(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=${global.lolkey}&text=${message}`)).json()
          //m.reply(maxim.text.toString())
          m.reply(maxim.text.toString())
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