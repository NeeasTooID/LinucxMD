import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!args[0]) throw `*Select Tag:*
blowjob
neko
trap
waifu`
  let res = await fetch(`https://api.waifu.pics/nsfw/${text}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButton(m.chat, `Search: ${args[0]}`, global.wm, json.url, [['NEXT', `.animensfw ${args[0]}`]], m)
}
handler.command = /^(animensfw)$/i
handler.tag = ['anime', 'nsfw']
handler.help = ['animensfw']

handler.nsfw = true
handler.limit = true

export default handler