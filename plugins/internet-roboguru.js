import fetch from 'node-fetch'
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Contoh Penggunaan!\n\nContoh:\n${usedPrefix + command} sma|sejarah|siapakah penemu lampu?`
    let [kelas, pelajaran, pertanyaan] = text.split('|')
    if (!kelas) return m.reply('_grade parameter must be one of\n sd, smp, sma, sbmptn-utbk._')
    if (!pelajaran) return m.reply('_subject parameter must be one of\n matematika, bahasa-indonesia, ipa-terpadu, penjaskes, ppkn, ips-terpadu, seni, agama, bahasa-daerah, fisika, biologi, bahasa-inggris, geografi, sosiologi, sejarah, ekonomi, teknologi-informasi, kimia, kewirausahaan._')
    if (!pertanyaan) return m.reply('_query parameter cannot be empty._')
    let res = await fetch(API('lol', '/api/roboguru', { query: pertanyaan, grade: kelas, subject: pelajaran }, 'apikey'))
    let data = await res.json()
    let cap = data.result.map((v, i) => {
        return `
*${i + 1}.* ${v.question}

*Jawaban:* ${v.answer}
`.trim()
    }).join('\n\n\n')
    m.reply(cap)
}
handler.help = ['roboguru'].map(v => v + ' <grade>|<subject>|<query>')
handler.tags = ['internet']
handler.command = /^roboguru$/i
export default handler