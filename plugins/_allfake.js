import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	let fotonyu = 'https://telegra.ph/file/9dd7a83500f01d3441449.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				externalAdReply: {
                    showAdAttribution: true,
					title: "LinucxMD - MD",
					body: "Unemployment 2024",
					mediaUrl: sgc,
					description: '',
					previewType: "PHOTO",
					thumbnail: await (await fetch(fotonyu)).buffer(),
					sourceUrl: "https://whatsapp.com/channel/0029VaEK2Vc9mrGbK9s0Iv3p",			
				}
			}
		}
		global.sig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            title: 'Yaemiko MD',
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sig
         }
       }
     }
   }
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
