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
global.Linkgc = 'https://chat.whatsapp.com/CjgkxnajTPXAivDPUZgzjy'
global.lynk = 'htpps://saweria.co/YUSUP909'

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
global.ppulsa = '083897390164'
global.ppulsa2 = '083895099347'
global.psaweria = 'https://saweria.co/YUSUP909'

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
global.deepai = '8bd452ee-51b4-4202-b6f5-3c96c5e3b1f4' // generator ai
global.openai = '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'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-lOgBXMHcj0ntOQKVF0vvdDIH'  //openAI Organization name
global.rose = 'Rs-Zeltoria' //
global.ryzen = '84295850' //daftar di api.ryzendesu.vip/
global.xzn = 'npnpicyy' // NPNPCY
global.lol = 'e4ea69cba864dfa7d4968fdb' // NPNPCY
global.xyro = 'ClaraKeyOfficial' //
global.btc = 'TukangM' //

global.APIs = {
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz/',
  rose: 'https://api.itsrose.site/',
  xzn : 'https://skizo.tech/',
  ryzen : 'https://api.ryzendesu.vip/'
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'

  'https://skizo.tech/' : 'npnpicyy',
  'https://api.itsrose.site/': 'Rs-Zeltoria',
  'https://api.ryzendesu.vip/': '84295850'
}

/*============= OTHER =============*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/9822dac1c196097de953b.jpg' //Main Thumbnail
global.fotonya1 = 'https://telegra.ph/file/52ea9e08940b847d58a2a.jpg' //ganti jadi foto bot mu
global.thumblvlup = [
  'https://telegra.ph/file/6c8024f4b2243f63ba7d2.jpg',
  'https://telegra.ph/file/bbe43eb2cd4228fee5955.jpg',
  'https://telegra.ph/file/fb4a2bdf046e8e8ff98d7.jpg',
  'https://telegra.ph/file/be01e6e8ed782de254871.jpg'
]

/*============= JANGAN DIUBAH =============*/
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