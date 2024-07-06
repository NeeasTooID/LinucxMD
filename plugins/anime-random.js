//MAXIMUS
import fetch from 'node-fetch';
let handler = async (m, { conn, text, usedPrefix, command }) => {
let text2 = `Ketik lagi jika ingin foto lainnya`

if (command == 'akira') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/akira.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'akiyama') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/akiyama.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'anna') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/ana.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'asuna') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/asuna.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'ayuzawa') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/ayuzawa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'boruto') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/boruto.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'chitanda') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/chitanda.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'chitoge') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/chitoge.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'deidara') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/deidara.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'doraemon') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/doraemon.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'elaina') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/elaina.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'emilia') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/emilia.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'asuna') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/asuna.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'erza') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/erza.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'genshin') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/genshin.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'gremory') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/gremory.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'hestia') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/hestia.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'hinata') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/hinata.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'inori') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/inori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'isuzu') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/suzu.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'itachi') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/itachi.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'itori') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/itori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kaga') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kaga.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kagura') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kagura.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kakasih') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kakasih.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kaori') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kaori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kaneki') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kaneki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kosaki') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kosaki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kotori') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kotori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kuriyama') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kuriyama.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kuroha') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kuroha.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'kurumi') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/kurumi.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'loli') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/loli.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'madara') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/madara.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'mikasa') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/mikasa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'miku') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/miku.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'minato') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/minato.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'naruto') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/naruto.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'natsukawa') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/natsukawa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'nezuko') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/nezuko.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'nishimiya') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/nishimiya.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'onepiece') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/onepiece.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'pokemon') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/pokemon.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'rem') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/rem.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'rize') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/rize.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'sagiri') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/sagiri.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'sakura') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/sakura.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'sasuke') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/sasuke.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'shina') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/shina.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'shinka') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/shinka.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'shizuka') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/shizuka.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'shota') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/shota.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'tomori') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/tomori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'toukachan') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/toukachan.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'tsunade') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/tsunade.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'yatogami') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/yatogami.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'yuki') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/yuki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}

if (command == 'waifu') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/waifu.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2, m)}
}
handler.command = handler.help = [
'akira', 
'akiyama', 
'anna', 
'asuna', 
'ayuzawa', 
'boruto', 
'chitanda', 
'chitoge', 
'deidara', 
'doraemon', 
'elaina', 
'emilia', 
'asuna', 
'erza', 
'genshin', 
'gremory', 
'hestia', 
'hinata', 
'inori', 
'itachi', 
'isuzu', 
'itori', 
'kaga', 
'kagura', 
'kakasih', 
'kaori', 
'kaneki', 
'kosaki', 
'kotori', 
'kuriyama', 
'kuroha', 
'kurumi', 
'madara', 
'mikasa', 
'miku', 
'minato', 
'naruto', 
'natsukawa', 
'nezuko', 
'nishimiya', 
'onepiece', 
'pokemon',
'rem', 
'rize',
'sagiri',
'sakura', 
'sasuke',
'shina',
'shinka',
'shizuka',
'shota',
'tomori',
'toukachan',
'tsunade',
'yatogami',
'yuki',
'waifu'
]
handler.tags = ['anime']
handler.premium = false
handler.register = false
handler.limit = true

export default handler