import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/
global.owner = [['6283897390164', 'Npc', true]]
global.mods = []
global.prems = []
global.nomorbot = '6283895099347'
global.nomorown = '6283897390164'
global.nomorwa = '0'


/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'Npnpicyy'
global.namebot = 'LinucxMD'
global.wm = '© LinucxMD By YusupKakuu'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat dengan ${namebot}\nLinucxMD\n+6283895099347`
global.stickauth = `© LinucxMD Unemployment`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

/*============= OWNER INFO =============*/
global.nameown1= 'Npnpcy'
global.nameown2 = 'CupMenolakMcy'
/*============= MEDIA LINK =============*/
global.Linkgc = 'Bentar'
global.lynk = ''


//*============= SOSMED =============*/
global.sig = 'https://www.instagram.com/yusupk._'
global.sgh = 'https://github.com/NeeasTooID' //github
global.sgc = 'https://whatsapp.com/channel/0029VaEK2Vc9mrGbK9s0Iv3p' //group whatsapp
global.sdc = 'https://discord.com/invite/JkMqE7tHKT' //discord
global.sfb = 'https://www.facebook.com/yusuf.venezzuellaa?mibextid=ZbWKwL'
global.snh = 'https://s.id/yusupkakuu'

/*============= DONASI =============*/
global.pdana = '083897390164'
global.povo = '083897390164'
global.pgopay = '083897390164'
global.plinkaja = '-' //link aja
global.ppulsa = '083897390164'
global.ppulsa2 = '083895099347'
global.psaweria = 'https://saweria.co/YUSUP909'
global.bank1 = '-'
global.bank2 = '-'


/*============= TAMPILAN =============*/
global.ListHargaSewa = '├ Permanen 10k'
global.LyAtas1 = '☰ ━━━ ❨'
global.LyAtas2 = '❩ ━━┄┈ •⟅'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============= RESPON =============*/
global.wait = 'Please Wait...'
global.eror = 'Error!'

/*============= WEB API KEY =============*/
global.deepai = 'YOUR_APIKEY_HERE'
global.openai = 'YOUR_APIKEY_HERE'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'YOUR_APIKEY_HERE'  //openAI Organization name
global.rose = 'Rs-Zeltoria'
global.xzn = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://skizo.tech/
global.xyro = 'YOUR_APIKEY_HERE' //https://api.xyroinee.xyz/
global.ryzen = 'YOUR_APIKEY_HERE' //daftar di api.ryzendesu.vip/

global.APIs = {
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz/',
  rose: 'https://api.itsrose.site/',
  xzn : 'https://skizo.tech/',
  ryzen : 'https://api.ryzendesu.vip/'
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'

  'https://skizo.tech/' : '',
  'https://api.itsrose.site/': 'Rs-Zeltoria',
  'https://api.ryzendesu.vip/': ''
}

/*============= OTHER =============*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg'
global.giflogo = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg'
global.thumbs = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumblvlup = [
  'https://i.pinimg.com/originals/a0/34/8a/a0348ae908d8ac4ced76df289eb41e1a.jpg',
  'https://i.pinimg.com/originals/be/3b/47/be3b477371cc249e49fd0bb3284de7d7.jpg',
  'https://i.pinimg.com/originals/63/c3/37/63c337596b3391df0e72a9729ceca7b6.jpg',
  'https://i.pinimg.com/originals/db/ed/5a/dbed5afac55d266602d0ca0c67622bb9.jpg'
]

global.dtu = 'INSTAGRAM'
global.urlnya = "https://www.instagram.com/yusupk._"
global.dtc = 'CALL OWNER'
global.phn = '0838 9739 0164'


/*============= JANGAN DIUBAH =============*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/*============= RESPON GAME =============*/
global.benar = 'Good Job! ◕◡◕'
global.salah = 'Not Bad! ◕◠◕'
global.dikit = "Dikit Lagi, Semangat!!"


/*============= RPG GAME =============*/
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
