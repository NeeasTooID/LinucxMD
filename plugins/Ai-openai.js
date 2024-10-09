import fetch from 'node-fetch';

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply(wait)
  var apii = await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw global.eror
}
}

handler.help = ['openai'].map(v => v + ' <question>')
handler.tags = ['ai']
handler.command = /^(ai|yula|openai|chatgpt)$/i

handler.register = false
handler.premium = false
handler.limit = true

export default handler