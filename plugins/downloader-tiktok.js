import api from 'btch-downloader'

let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
if (!args[0].match(/tiktok/gi)) throw `URL Yang Tuan Berikan *Salah!!!*`;
try {
let maximus = await api.ttdl(args[0]);
let caption = `◥ *T I K T O K  D O W N L O A D* ◤

• *Name Videos:* 
— ${maximus.title}

• *Name Audio:* 
— ${maximus.title_audio}

_Sedang mengirim Audio video. harap tunggu sebentar_\n`;
await conn.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await conn.sendFile(m.chat, maximus.audio[0], 'kasar.mp3', null, m)
      } catch (e) {
		console.log(e)
		m.reply(eror)
	}
};
handler.help = ['tiktok'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i;
handler.limit = true;
handler.register = false;
export default handler;