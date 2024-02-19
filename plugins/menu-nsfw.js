export async function handler(m, { conn, command }) {
  await conn.reply(m.chat, wait, m)
  try {
    if (command == 'pgay') {
      const res = `https://api.botcahx.eu.org/api/nsfw/gay?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pahegao') {
      const res = `https://api.botcahx.eu.org/api/nsfw/ahegao?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pass') {
      const res = `https://api.botcahx.eu.org/api/nsfw/ass?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pbdsm') {
      const res = `https://api.botcahx.eu.org/api/nsfw/bdsm?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pblowjob') {
      const res = `https://api.botcahx.eu.org/api/nsfw/blowjob?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
     if (command == 'pcuckold') {
      const res = `https://api.botcahx.eu.org/api/nsfw/cuckold?apikey=ct${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pcum') {
      const res = `https://api.botcahx.eu.org/api/nsfw/cum?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pero') {
      const res = `https://api.botcahx.eu.org/api/nsfw/ero?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pfemdom') {
      const res = `https://api.botcahx.eu.org/api/nsfw/femdom?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pfoot') {
      const res = `https://api.botcahx.eu.org/api/nsfw/foot?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pgangbang') {
      const res = `https://api.botcahx.eu.org/api/nsfw/gangbang?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pglasses') {
      const res = `https://api.botcahx.eu.org/api/nsfw/glasses?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'phentai') {
      const res = `https://api.botcahx.eu.org/api/nsfw/hentai?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pgifs') {
      const res = `https://api.botcahx.eu.org/api/nsfw/gifs?apikey=${btc}`;
      await conn.sendFile(m.chat, res, null, '', m);
    }
    if (command == 'pjahy') {
      const res = `https://api.botcahx.eu.org/api/nsfw/jahy?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pmanga') {
      const res = `https://api.botcahx.eu.org/api/nsfw/manga?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pmasturbation') {
      const res = `https://api.botcahx.eu.org/api/nsfw/masturbation?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pneko') {
      const res = `https://api.botcahx.eu.org/api/nsfw/neko?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pneko2') {
      const res = `https://api.botcahx.eu.org/api/nsfw/neko2?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'porgy') {
      const res = `https://api.botcahx.eu.org/api/nsfw/orgy?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'ppanties') {
      const res = `https://api.botcahx.eu.org/api/nsfw/panties?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'ppussy') {
      const res = `https://api.botcahx.eu.org/api/nsfw/pussy?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'ptentacles') {
      const res = `https://api.botcahx.eu.org/api/nsfw/tentacles?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pyuri') {
      const res = `https://api.botcahx.eu.org/api/nsfw/yuri?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pthighs') {
      const res = `https://api.botcahx.eu.org/api/nsfw/thighs?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
    if (command == 'pzettai') {
      const res = `https://api.botcahx.eu.org/api/nsfw/zettai?apikey=${btc}`;
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
    }
   } catch (err) {
  console.error(err)
  throw "🚩 Terjadi kesalahan"
   };
};
handler.command = handler.help = ['pgay','pahegao','pass','pbdsm','pblowjob','pcuckold','pcum','pero','pfemdom','pfoot','pgangbang','pglasses','phentai','pgifs','pjahy','pmanga','pmasturbation','pneko','pneko2','porgy','ptentacles','ppussy','ppanties','pthighs','pyuri','pzettai']
handler.tags = ['nsfw']
handler.limit = true
handler.premium = true

export default handler;