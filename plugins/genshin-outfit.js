import genshindb from 'genshin-db'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example : *${usedPrefix + command} outrider*`
	try {
		let anu = await genshindb.outfits(text)
		let ini_txt = `*Found : ${anu.name}*\n\n`
		ini_txt += `_"${anu.description}"_\n\n`
		ini_txt += `*Character :* ${anu.characterName}`
		ini_txt += `${anu.url.modelviewer ? `\n_${anu.url.modelviewer}_` : ''}`
		m.reply(ini_txt)
	} catch (e) {
		console.log(e)
		try {
			let anu2 = await genshindb.outfits(`${text}`, { matchCategories: true })
			m.reply(`*List ${text} outfit :*\n\n- ` + anu2.toString().replaceAll(',','\n- '))
		} catch (e) {
			console.log(e)
			let anu2 = await genshindb.outfits(`names`, { matchCategories: true })
			m.reply(`*Not Found*\n\n*Available outfits is :*\n${anu2.join(", ")}`)
		}
	}
}

handler.menu = ['gioutfit'].map(v => v + ' <query>')
handler.tags = ['genshin']
handler.command = /^((gi|genshin)(costume?|outfit?))$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)