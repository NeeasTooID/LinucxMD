import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://api.lolhuman.xyz/api/quotes/islami?apikey=RyHar'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result) throw json
 
  conn.sendButton(m.chat, `${json.result}`, wm, [['N E X T', '.quotesislami']], m)
}
handler.help = ['islami']
handler.tags = ['quotes']
handler.command = /^(quotesislami|islami)$/i
handler.limit = true
export default handler