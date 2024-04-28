const rewards = {
    exp: 100000,
    chip: 15000,
    limit: 100,
    common: 100000,
    unconmon: 100000,
    mythic: 500,
    legendary: 100
}

const cooldown = 5000
let handler = async (m, {usedPrefix}) => {
    if (global.db.data.chats[m.chat].rpg == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ʀᴘɢ ɢᴀᴍᴇ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ', wm, null, [['ᴇɴᴀʙʟᴇ', '.on rpg']], m)
    let user = global.db.data.users[m.sender]
    let imgr = flaaa.getRandom()
    if (new Date - user.lastmonthly < cooldown) return m.reply(`ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ *ʀᴇᴡᴀʀᴅs*, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${((user.lastmonthly + cooldown) - new Date()).toTimeString()}`.trim())
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `➠ ${rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
    }
    m.reply(`🔖 ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :
${text}`.trim())
    user.lastmonthly = new Date * 1
}
handler.help = ['lmd']
handler.tags = ['rpg']
handler.command = /^(lmd)$/i
handler.register = true
handler.group = true
handler.cooldown = cooldown
handler.rpg = true
export default handler