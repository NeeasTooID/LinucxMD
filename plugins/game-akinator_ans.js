import { Aki } from 'aki-api'
let handler = async (m, { conn, usedPrefix, args }) => {
    conn.akinator = conn.akinator ? conn.akinator: {}
    if (!(m.sender in conn.akinator)) return m.reply('Kamu belum ada di sesi akinator!')
    if (!args[0]) return m.reply('Masukan Jawaban Kamu!')
    if (!/0|1|2|3|4/i.test(args[0])) return m.reply('Invalid Number')
    clearTimeout(conn.akinator[m.sender].waktu)
    await conn.akinator[m.sender].step(args[0])
    let { question, currentStep, progress } = conn.akinator[m.sender]
    if (progress >= 70 || currentStep >= 78) {
        await conn.akinator[m.sender].win()
        let { answers } = conn.akinator[m.sender]
        let cap = `🎮 *Akinator Answer*\n\n`
        cap += `Dia Adalah *${answers[0].name}* Dari *${answers[0].description}*`
        conn.sendFile(m.chat, answers[0].absolute_picture_path, '', cap, m)
        delete conn.akinator[m.sender]
    } else {
        let txt = `🎮 *Akinator* 🎮\n\n@${m.sender.split('@')[0]}\n`
        txt += `_step ${currentStep} ( ${progress.toFixed(2)} % )_\n\n${question}\n\n`
        txt += '🎮 _*Silahkan Jawab Dengan Cara:*_\n'
        txt += `_*Ya* - ${usedPrefix}answer 0_\n`
        txt += `_*Tidak* - ${usedPrefix}answer 1_\n`
        txt += `_*Saya Tidak Tahu* - ${usedPrefix}answer 2_\n`
        txt += `_*Mungkin* - ${usedPrefix}answer 3_\n`
        txt += `_*Mungkin Tidak* - ${usedPrefix}answer 4_`
        conn.akinator[m.sender].chat = await conn.reply(m.chat, txt, m, { mentions: [m.sender] })
        conn.akinator[m.sender].waktu = setTimeout(() => {
            conn.reply(m.chat, `Waktu Memilih Akinator Habis`, conn.akinator[m.sender].chat)
            delete conn.akinator[m.sender]
        }, 60000)
    }
}
handler.command = /^(answer)$/i
handler.limit = true
handler.onlyprem = true
handler.game = true
export default handler