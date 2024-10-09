import fetch from "node-fetch"
let handler = async(m, { conn, usedPrefix, command, text }) => {
	if  (command == 'doaharian') {
	let res = await(await fetch('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/religion/doaharian.json')).json()
	const sections = Object.values(res.result.data).map((v, index) => ({
        title: v.title, rows: [
           { title: v.title, rowId: usedPrefix + 'doaharian-get ' + index, description: v.arabic }
    ]}))
    const listMessage = {
        text: `乂 *_Doa Harian_*`,
        footer: `_Silahkan Pilih Doa Harian Dibawah Ini..._`,
        title: '',
        buttonText: 'Tap!',
        sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m })
    }
    if (command == 'doaharian-get') {
    	let res = await(await fetch('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/religion/doaharian.json')).json()
        let { title, arabic, latin, translation } = res.result.data[text]
        let teks = `乂 _*${title}*_
        
_*Arabic:*_ ${arabic}

_*Latin:*_ ${latin}

_*Translation:*_ ${translation}
`
        m.reply(teks)
    }
}
handler.help = ['doaharian']
handler.tags = ['islamic']
handler.command = /^(doaharian|doaharian-get)$/i
export default handler