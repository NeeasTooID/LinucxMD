const rewards = {
    exp: 500000,
    chip: 100000,
    potion: 100,
    mythic: 500,
    legendary: 100,
    limit: 100
}

const cooldown = 900000
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
handler.help = ['linucxchan>3']
handler.tags = ['rpg']
handler.command = /^(linucxchan>3|l)$/i
handler.register = true
handler.group = true
handler.cooldown = cooldown
handler.rpg = true
export default handler