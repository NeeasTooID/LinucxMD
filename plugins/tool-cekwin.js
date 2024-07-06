let linkRegex = /[a-zA-Z]/i

let handler = async (m, { conn, text, command, args, usedPrefix }) => {
  let mmk = args[1]
  let tmatch = text.split(" ")[0]
  let wrnow = text.split(" ")[1]
  let needwr = text.split(" ")[2]
     if (!tmatch) return m.reply('Contoh penggunaan:\n.cekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>');
     if (!wrnow) return m.reply('Contoh penggunaan:\n.cekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>');
     if (!needwr) return m.reply('Contoh penggunaan:\n.cekwr <total_pertandingan_ml> <win_rate_sekarang> <target_win_rate>');
  
  if (linkRegex.exec(tmatch) || linkRegex.exec(wrnow) || linkRegex.exec(needwr)) return m.reply('Input tidak valid. Pastikan semua input berupa angka.');
  
  let tLose = Math.round(`${tmatch}` * (100 - `${wrnow}`) / 100);
  let seratusPersen = Math.round(tLose * (100 / (100 - `${needwr}`)))
  let final = (seratusPersen - `${tmatch}`);
  const maxim = (`*RESULT WIN RATE*
  
Anda memerlukan sekitar ${final} win tanpa lose untuk mendapatkan win rate ${needwr}%`)
  m.reply(maxim);
}
handler.help = ['cekwr']
handler.tags = ['tools']
handler.command = /^(cekwr|cekwinrate)$/i
handler.premium = false

export default handler