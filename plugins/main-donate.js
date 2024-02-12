import fs from 'fs'

let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.pdana
let saweria = global.psaweria
let ovo = global.povo
let gopay = global.pgopay
let numberowner = global.nomorown
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Saweria : ${saweria}
├ Ovo : ${ovo}
├ Dana : ${dana}
├ Gopay : ${gopay}
└────
</> Kamu akan mendapat akses *Premium* jika berdonasi
10k = Premium 30 Hari
20k = Premium 60 Hari
50k = Premium 365 Hari
Berapapun donasi kalian akan sangat berarti 👍
Donasi Akan Muncul Di History Discord!

Terimakasih :D
Contact Owner:
wa.me/${numberowner} (Owner)
`
  m.reply(anu)
}

handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler
