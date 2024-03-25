import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Usernamenya`
  m.reply(wait)
  try {
    let res = await fetch(`https://www.forestapi.my.id/api/telegram/user/${text}`)
    let zel = await res.json()
   conn.sendFile(m.chat, zel.image_url, 'anu.jpg', `Username: ${zel.username}\nName: ${zel.name}\nBio: ${zel.bio}`, m)
   } catch (e) {
   throw e
   }
}
handler.help = ['stalktelegram']
handler.tags = ['internet']
handler.command = /^(stalktelegram)$/i
handler.limit = false
handler.premium = true 
export default handler