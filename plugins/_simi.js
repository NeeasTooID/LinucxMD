import axios from "axios"
export async function before(m) {
    if (m.isBaileys && m.fromMe) return
    let chat = global.db.data.chats[m.chat]
    if (m.text.startsWith('.') || m.text.startsWith('#') || m.text.startsWith('!') || m.text.startsWith('/') || m.text.startsWith('\/')) return
    if (chat.simi && !chat.isBanned && m.isGroup && m.text) {
        try {
            let simi = await getMessage(m.text, 'id')
            m.reply(simi)
        } catch (e) {
            throw 'Maaf aku tidak mengerti'
        }
    }
    return
}

async function getMessage(yourMessage, langCode) {
    const res = await axios.post('https://api.simsimi.vn/v2/simtalk',
        new URLSearchParams({
            'text': yourMessage,
            'lc': langCode
        })
    )

    if (res.status > 200)
        throw new Error(res.data.success)

    return res.data.message;
}