import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {
if (command == 'cekexpbtc' )  {
    if (!text) throw `Masukan username`
    let api1 = await fetch(`https://api.botcahx.eu.org/api/checkexp?username=${text}`)
    let body = await api1.text()
    m.reply(body)  
  } else if (command == 'cekexplann') 
    {
      if (!text) throw `Masukan username`
      let api2 = await fetch(`https://api.betabotz.eu.org/api/checkexp?username=${text}`)
      let body = await api2.text()
      m.reply(body)  
  }
}          
handler.command = ['cekexpbtc', 'cekexplann']
handler.help = ['cekexpbtc <username>','cekexplann <username>'];
handler.tags = ['main'];

export default handler;