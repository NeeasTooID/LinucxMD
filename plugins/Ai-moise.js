import uploadFile from '../lib/uploadFile.js';
import { rose as api } from '../lib/roseGet.js';

let handler = async (m, { conn, args, usedPrefix, command, quoted }) => {

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime) throw 'Reply/send your audio with caption .moise';
  
  conn.reply(m.chat, wait, m)

  let media = await q.download();
  let out = await uploadFile(media);
  try {
  const { data } = await api.post("https://api.itsrose.rest/audio/moise", {
                        init_url: out,
                        options: {
                                stems: 2,
                                ai_level: 0,
                                rigidity: 2,
                                accuracy: 4,
                                deep: 0,
                        },
                });
                const { status, message, result } = data;
                if (!status) {
                        return m.reply(message);
                }
                const { id } = result;

                async function pullStatus() {
                        return await api.get("https://api.itsrose.rest/audio/moise/fetch_query", { id }).then((res) => res.data);
                }

                // TODO: find better way to do this
                let statusData;
                do {
                        statusData = await pullStatus();
                        await new Promise((resolve) => setTimeout(resolve, 15 * 1000));
                } while (statusData?.result.status !== "done");

                const { audios } = statusData.result;

                for (const key in audios) {
                        await conn.sendMessage(
                                m.chat,
                                {
                                        audio: {
                                                url: audios[key],
                                        },
                                        mimetype: "audio/mp4",
                                },
                                { quoted: m }
                        );
                }
  
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, eror, m);
  }
};

handler.help = ['moise <reply audio>', 'audiosplitter <reply audio>'];
handler.tags = ['ai', 'tools'];
handler.command = /(moise|audiosplitter)/i;
handler.limit = true;
handler.premium = false;

export default handler;