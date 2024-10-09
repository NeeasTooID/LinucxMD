import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {

let text2 = `NIH KAK (⁠✿⁠^⁠‿⁠^⁠)`

if (command == 'storyanime' ) {
let res = await( await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/storyanime.json`)).json()
let blow = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, blow, 'foto.mp4', text2, m)}
}
handler.command = handler.help = ['storyanime']
handler.tags = ['anime']
handler.limit = true

export default handler