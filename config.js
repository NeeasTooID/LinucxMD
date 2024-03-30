import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*========= GLOBAL APIKEY ==========*/
global.btc = 'tMNbXw3t'
global.lolkey = 'e4ea69cba864dfa7d4968fdb'
global.rose = 'Rs-putangina'
global.lann = 'apicacad'

/*============== NOMOR ==============*/
global.nomorown = '6283897390164'
global.info = {
	nomorbot: '6283895099347',
	nomorown: '6283897390164',
	namebot: 'LinucxMD',
	nameown: 'YusupKakuu'
}

/*============== OWNER ==============*/
global.owner = [
['6283897390164', 'Npc', 'true']
]
global.mods = ['6283897390164']
global.prems = ['6283897390164']

/*=============== API ===============*/
global.APIs = {
  neoxr: 'https://api.neoxr.eu.org',
  lol: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  TioXD: 'https://api.botcahx.eu.org',
  lann: 'https://api.betabotz.eu.org',
} 

global.APIKeys = {
  'https://api.neoxr.eu.org': 'apinyrusak',
  'https://api.lolhuman.xyz': 'e4ea69cba864dfa7d4968fdb',
  'https://api.botcahx.eu.org': 'tMNbXw3t',
  'https://api.itsrose.life': 'Rs-putangina',
}

/*============= WATERMARK =============*/
global.wm = 'LinucxMD'
global.author = '©NeastooID'
global.stickpack = 'LinucxMD'
global.stickauth = '©NeastooID'
global.multiplier = 38 // The higher, The harder levelup

/*============== TEXT ==============*/
global.nameown = 'Npc'
global.waown = 'wa.me/6283897390164'
global.mail = 'yusup90990@gmail.com'
global.fb = 'https://facebook.com/yusupkakuu'
global.ig = 'https://instagram.com/yusupk_.'
global.gcbot = 'https://chat.whatsapp.com/FuhuxbUO5uTEg6kEznHxrb'
global.wait = '_*LinucxMD sedang memproses...*_'
global.eror = '*Server LinucxMD down*'
global.maxwarn = '2'
global.qris = 'https://telegra.ph/file/23f47546f7757c14a1415.png'
global.thum = 'https://telegra.ph/file/6b1f0e28608489c37b261.jpg'
global.wm = '©NeastooID'
global.pricelist = '*LIMIT* kamu habis. kamu bisa order akses premium\n\n*PREMIUM USER PRICE LIST*\n\n*3 Day premium*\n- Harga: Rp. 5.000 IDR\n- ID Pesanan: 3day\n\n*7 Day premium*\n- Harga: Rp. 10.000 IDR\n- ID Pesanan: 7day\n\n*30 Day premium*\n- Harga: Rp. 15.000 IDR\n- ID Pesanan: 30day\n\n*60 Day premium*\n- Harga: Rp. 30.000 IDR\n- ID Pesanan: 60day\n\n\n*Example:* .premium <ID Pembayaran>\n*Example:* .premium 30day'

/*=========== TYPE DOCUMENT ===========*/
global.doc = {
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    rtf: 'text/rtf'
}

/*========== HIASAN ===========*/
global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',
	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',
	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

global.elainajpg = [
    'https://telegra.ph/file/873e34abaa70a919512f1.jpg',
    'https://telegra.ph/file/3e43fcfaea6dc1ba95617.jpg'
]
global.flaaa = [
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
global.hwaifu = [
    'https://i.pinimg.com/originals/fd/21/41/fd21419275236bb153de3c8dcbbf3bf9.jpg',
    'https://i.pinimg.com/originals/80/4f/1a/804f1a05f9996c96a2d492b4854b7fd5.jpg'
]

/*============== EMOJI ==============*/
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})
