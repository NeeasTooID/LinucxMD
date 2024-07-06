import api from 'api-dylux';

var handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://twitter.com/ketchupnude/status/1713239814533955723`
    try {
         const data = await api.twitter(args[0])
         conn.sendFile(m.chat, data.HD, null, 'HD', m)
         conn.sendFile(m.chat, data.SD, null, 'SD', m)
        
     } catch (e) {
        console.log(e)
        m.reply(eror)
    }
};
handler.command = /^(twitterdl|twitter)$/i
handler.help = ['twitter'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.register = false;
handler.group = false;
handler.limit = true;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
export default handler;