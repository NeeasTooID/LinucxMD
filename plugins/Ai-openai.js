import axios from 'axios'

const payloads = {
    prompt: ""
};

const handler = async (m, { conn, args, text, usedPrefix, command, isOwner }) => {
  if (!text) throw `${usedPrefix}${command} hallo eula. apa kabar sayang?
` 
try {
  const updatedPayloads = { ...payloads, prompt: text };
  const { data } = await axios.request({
    baseURL: "https://api.itsrose.rest",
    url: "/chatGPT/completions",
    method: "POST",
    headers: { Authorization: `${global.rose}` },
    data: updatedPayloads,
  }).catch((e) => e?.response);

    const { status, message } = data;
          await conn.sendMessage(m.chat, {
                text: message,
                contextInfo: {
                    externalAdReply: {
                        title: "ChatGPT",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/b70c17d01e41146501827.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
          }, {quoted: m})
      } catch(e) {
      console.log(e)
        m.reply('Server Down')
    }
};

handler.help = ['openai'].map(v => v + ' <question>')
handler.tags = ['ai']
handler.command = /^(ai|yula|openai|chatgpt)$/i

handler.register = false
handler.premium = false
handler.limit = true

export default handler