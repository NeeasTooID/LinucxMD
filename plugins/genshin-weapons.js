import genshindb from 'genshin-db'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example : *${usedPrefix + command} temptation*`
	try {
		let anu = await genshindb.weapons(text)
		let ini_txt = `_${anu.description}_\n\n`
		ini_txt += `*${anu.name}*\n\n`
		ini_txt += `*Main Stat :* ${anu.mainStatText}\n`
		ini_txt += `*Base Stat :* ${anu.baseStatText}\n`
		ini_txt += `*Base ATK Value :* ${anu.baseAtkValue}\n`
		ini_txt += `*Weapontype :* ${anu.weaponText}\n`
		ini_txt += `*Rarity :* ⭐ ${anu.rarity}\n\n`
		ini_txt += `*Refine 1 :*\n`
		ini_txt += `> ${anu.r1.description}\n\n`
		ini_txt += `*Refine 2 :*\n`
		ini_txt += `> ${anu.r2.description}\n`
		ini_txt += `*Refine 3 :*\n`
		ini_txt += `> ${anu.r3.description}\n\n`
		ini_txt += `*Refine 4 :*\n`
		ini_txt += `> ${anu.r4.description}\n\n`
		ini_txt += `*Refine 5 :*\n`
		ini_txt += `> ${anu.r5.description}\n\n`
		ini_txt += `*Effect :* ${anu.effectName}\n`
		conn.sendMessage(m.chat, {
                text: ini_txt,
                contextInfo: {
                    externalAdReply: {
                        title: "Genshin Weapons",
                        body: "Powered by Assisten YuLa💕",
                        thumbnailUrl: anu.images.awakenicon,
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m })
	} catch (e) {
		console.log(e)
		let anu2 = await genshindb.weapons(`names`, { matchCategories: true })
		m.reply(`*Not Found*\n\n*Available Weapons is :*\n${anu2.join(", ")}`)
	}
}

handler.help = ['giweapons'].map(v => v + ' <query>')
handler.tags = ['genshin']
handler.command = /^gi(weapons|wp)$/i

handler.group = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)