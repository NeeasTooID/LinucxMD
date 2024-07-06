import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example : ${usedPrefix + command} liyue`
	let res = await fetch(`https://genshin.jmp.blue/nations/${encodeURIComponent(text)}`)
	let res2 = await fetch(`https://genshin.jmp.blue/nations`)
	let json = await res.json()
	let json2 = await res2.json()
	if (json.name != undefined) {
		let ini_txt = `*Name : ${json.name}*\n\n`
		ini_txt += `*Element :* ${json.element}\n`
		ini_txt += `*Archon :* ${json.element}\n`
		ini_txt += `*ControllingEntity : ${json.controllingEntity}*`
		await m.reply(ini_txt)
	} else {
		let ini_txt = `*Not Found*\n\n*Available nations is :*\n${json2.join(", ")}`
		m.reply(ini_txt)
	}
}

handler.menu = ['gination'].map(v => v + ' <query>')
handler.tags = ['genshin']
handler.command = /^((gi|genshin)nation?)$/i

handler.limit = true

export default handler