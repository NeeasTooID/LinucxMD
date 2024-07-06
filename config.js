import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


/*========= GLOBAL APIKEY =========*/
// ISI APIKEY KALIAN DI BAGIAN 'ENTER YOUR APIKEY' SIMBOL JANGAN DI HAPUS
global.btc = 'Enter your apikey' // apikey Botchax
global.rose = 'Enter your apikey' // apikey Rose
global.lann = 'Enter your apikey' // apikey Beta


/*============== API ==============*/
// ISI APIKEY KALIAN DI BAGIAN 'ENTER YOUR APIKEY' SIMBOL JANGAN DI HAPUS
global.APIs = {
  rose: 'https://api.itsrose.rest',
  TioXD: 'https://api.botcahx.eu.org',
  lann: 'https://api.betabotz.org',
  ness: 'https://api.neastooid.xyz',
} 

global.APIKeys = {
  'https://api.betabotz.eu.org': 'Enter your apikey',
  'https://api.botcahx.eu.org': 'Enter your apikey',
  'https://api.itsrose.rest': 'Enter your apikey',
}


/*============ NOMOR ============*/
// BOLEH DI EDIT ASALKAN JANGAN ADA SIMBOL YANG DI HAPUS
global.info = {
	nomorbot: '6283895099347',
	nomorown: '6283897390164',
	namebot: 'LinucxMD',
	nameown: 'Npc',
	channel: '120363241570452835@newsletter',
	namechannel: 'LinucxMD - UNEMPLOYMENT BOTZ'
}


/*============ OWNER ============*/
// BOLEH DI EDIT ASALKAN JANGAN ADA SIMBOL YANG DI HAPUS
global.owner = [
['6283897390164', 'Npc', 'true'], // Boleh di ganti
['6283895099347', 'LinucxMD', 'true'] // Jangan di ganti 
]

global.mods = ['62'] // Opsional boleh ganti atau tidak 
global.prems = ['62'] // Opsional boleh ganti atau tidak 


/*=========== WATERMARK ===========*/
// BOLEH DI EDIT ASALKAN JANGAN ADA SIMBOL YANG DI HAPUS
global.wm = 'NEASTOOID 🌐' // Opsional boleh ganti atau tidak 
global.author = 'NPC' // Opsional boleh ganti atau tidak 
global.stickpack = 'LINUCXMD 🌐' // Opsional boleh ganti atau tidak 
global.stickauth = 'NPC' // Opsional boleh ganti atau tidak 


/*=========== TEXT & IMAGE ===========*/
// BOLEH DI EDIT ASALKAN JANGAN ADA SIMBOL YANG DI HAPUS
global.nameown = 'Npc' // Ganti jadi nama kalian
global.waown = 'wa.me/6283897390164' // ganti nomor tanpa menghilangkan wa.me/
global.mail = 'neastooid@gmail.com' // boleh taruh email kalian
global.fb = 'https://facebook.com/' // boleh taruh link fb kalian
global.ig = 'https://instagram.com/yusupk._' // boleh taruh link ig kalian
global.gcbot = 'https://whatsapp.com/channel/0029VaEK2Vc9mrGbK9s0Iv3p' // boleh taruh link group kalian
global.qris = 'https://telegra.ph/file/f11ccd2ca8a5136aacfb3.jpg' // Wajib isi untuk pembayaran. isi dengan qris
global.welcome = 'https://telegra.ph/file/6922e4375c183c8d1cfcb.jpg' // Welcome Group 
global.leave = 'https://telegra.ph/file/8c7792e78ed015a7d0a59.jpg' // Leave Group
global.vn = 'https://github.com/XM4ZE/DATABASE/raw/master/wallpaper/KARA.mp3?raw=true' // Allmenu Voice
global.thumvid = 'https://github.com/XM4ZE/DATABASE/raw/master/wallpaper/Vid_20240220_073653.mp4?raw=true' // Allmenu Video thumbnail
global.maximus = '' // [OPSIONAL] isi dengan link thumbnail kalian. link ini akan muncul di semua menu dan taruh di tengah-tengah simbol itu


/*===================DO NOT EDIT=====================*/


// DI BAWAH INI JANGAN DI EDIT
/*============== NO EDIT ==============*/
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.xmenus = 'https://raw.githubusercontent.com/XM4ZE/DATABASE/master/wallpaper/publicmenus.json'
global.multiplier = 38
global.wait = '*Starting Processing . . .*'
global.eror = '*Failed to process . . .*'
global.maxwarn = '2'
global.pricelist = '*LIMIT* kamu habis. kamu bisa order akses premium\n\n*PREMIUM USER PRICE LIST*\n\n*3 Day premium*\n- Harga: Rp. 5.000 IDR\n- ID Pesanan: 3day\n\n*7 Day premium*\n- Harga: Rp. 10.000 IDR\n- ID Pesanan: 7day\n\n*30 Day premium*\n- Harga: Rp. 15.000 IDR\n- ID Pesanan: 30day\n\n*60 Day premium*\n- Harga: Rp. 30.000 IDR\n- ID Pesanan: 60day\n\n\n*Example:* .premium <ID Pembayaran>\n*Example:* .premium 30day'


/*========== TYPE DOCUMENT ==========*/
global.doc = {
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    rtf: 'text/rtf'
}


// DI BAWAH INI JANGAN DI EDIT LAGI PULA GAK DI PAKAI
/*============= HIASAN ==============*/
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
    'https://telegra.ph/file/3e43fcfaea6dc1ba95617.jpg',
    'https://telegra.ph/file/c738a9fc0722a59825cbb.mp4',
    'https://telegra.ph/file/4018167852aef19651f46.jpg'
]
global.flaaa = [
    //'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
    //'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    //'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
global.hwaifu = [
    'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
    'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg'
]


// DI BAWAH INI JANGAN DI EDIT!!!
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