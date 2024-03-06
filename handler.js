import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile, readFileSync } from 'fs'
import chalk from 'chalk'
import fetch from 'node-fetch'
import knights from 'knights-canvas'

const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
            	// Bagian User
                if (!isNumber(user.money)) user.money = 1000
                if (!isNumber(user.health)) user.health = 100
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.limit)) user.limit = 1000
                if (!('registered' in user)) user.registered = false
                if (!user.registered) {
                if (!('name' in user)) user.name = m.name
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
                }
                
                // Bagian Profile Stats
                if (!isNumber(user.afk)) user.afk = -1
                if (!('unreg' in user)) user.unreg = false
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('banned' in user)) user.banned = false
                if (!('lastBanned' in user)) user.lastBanned = 0
                if (!'BannedReason' in user) user.BannedReason = ''
                if (!'WarnReason' in user) user.WarnReason = ''
                if (!isNumber(user.warning)) user.warning = 0
                if (!isNumber(user.level)) user.level = 0
                if (!('role' in user)) user.role = 'Beginner'
                    
                // Bagian Economy Rpg
                if (!isNumber(user.potion)) user.potion = 0
                if (!isNumber(user.trash)) user.trash = 0
                if (!isNumber(user.string)) user.string = 0
                if (!isNumber(user.emerald)) user.emerald = 0
                if (!isNumber(user.diamond)) user.diamond = 0
                if (!isNumber(user.gold)) user.gold = 0
                if (!isNumber(user.botol)) user.botol = 0
                if (!isNumber(user.kardus)) user.kardus = 0
                if (!isNumber(user.kaleng)) user.kaleng = 0
                if (!isNumber(user.plastik)) user.plastik = 0
                if (!isNumber(user.iron)) user.iron = 0
                 if (!isNumber(user.batu)) user.batu = 0
                 if (!isNumber(user.kayu)) user.kayu = 0
                 if (!isNumber(user.sampah)) user.sampah = 0

                // Bagian Rpg Boxs
                if (!isNumber(user.common)) user.common = 0
                if (!isNumber(user.uncommon)) user.uncommon = 0
                if (!isNumber(user.mythic)) user.mythic = 0
                if (!isNumber(user.legendary)) user.legendary = 0
                if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
                if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
                if (!isNumber(user.lastopen)) user.lastopen = 0
                if (!isNumber(user.lastopen)) user.lastrob = 0

                // Bagian Rpg Mancing
                if (!isNumber(user.paus)) user.paus = 0
                if (!isNumber(user.kepiting)) user.kepiting = 0
                if (!isNumber(user.gurita)) user.gurita = 0
                if (!isNumber(user.cumi)) user.cumi = 0
                if (!isNumber(user.buntal)) user.buntal = 0
                if (!isNumber(user.dory)) user.dory = 0
                if (!isNumber(user.lumba)) user.lumba = 0
                if (!isNumber(user.lobster)) user.lobster = 0
                if (!isNumber(user.hiu)) user.hiu = 0
                if (!isNumber(user.udang)) user.udang = 0
                if (!isNumber(user.orca)) user.orca = 0
                if (!isNumber(user.pancing)) user.pancing = 0

                // Bagian Last Rpg
                if (!isNumber(user.lastadventure)) user.lastadventure = 0
                if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                if (!isNumber(user.lastmining)) user.lastmining = 0
                if (!isNumber(user.lasthourly)) user.lasthourly = 0
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!isNumber(user.lastnebang)) user.lastnebang = 0
                if (!isNumber(user.lastnebang)) user.lastnambang = 0
                if (!isNumber(user.lastnebang)) user.lastmulung = 0
                if (!isNumber(user.lastweekly)) user.lastweekly = 0
                if (!isNumber(user.lastpancing)) user.lastpancing = 0
                if (!isNumber(user.pancingdurability)) user.pancingdurability = 0

                // Bagian Prem Limits
                if (!isNumber(user.premium)) user.premium = false
                if (!isNumber(user.premiumTime)) user.premiumTime = 0
                if (!isNumber(user.joinlimit)) user.joinlimit = 0
            } else
                global.db.data.users[m.sender] = {
                money: 1000,
                exp: 0,
                limit: 1000,
                lastclaim: 0,
                registered: false,
                name: m.name,
                age: -1,
                regTime: -1,
                unreg: false,
                afk: -1,
                afkReason: '',
                banned: false,
                warning: 0,
                level: 0,
                role: 'Beginner',
                BannedReason: '',
                WarnReason: '',

                // Bagian Rpg User
                health: 100,
                potion: 10,
                sampah: 0,
                string: 0,
                emerald: 0,
                diamond: 0,
                gold: 0,
                iron: 0,
                batu: 0,
                kayu: 0,
                common: 0,
                uncommon: 0,
                mythic: 0,
                legendary: 0,
                gardenboxs: 0,

                // Bagian Rpg Mancing
                paus: 0,
                kepiting: 0,
                gurita: 0,
                cumi: 0,
                buntal: 0,
                dory: 0,
                lumba: 0,
                lobster: 0,
                hiu: 0,
                udang: 0,
                ikan: 0,
                orca: 0,
                pancing: 0,
                pancingdurability: 0,

                lastadventure: 0,
                lastkill: 0,
                lastdungeon: 0,
                lastmining: 0,
                lasthunt: 0,
                lasthourly: 0,
                lastbansos: 0,
                lastrampok: 0,
                lastclaim: 0,
                lastnebang: 0,
                lastmulung: 0,
                lastnambang: 0,
                lastweekly: 0,
                lastopen: 0,
                lastrob: 0,

                premium: false,
                premiumTime: 0,
            }
            
let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = false
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('autogpt' in chat))
                    chat.chatgpt = false
                if (!('autoSticker' in chat))
                    chat.autoSticker = false
                if (!('premium' in chat))
                    chat.premium = false
                if (!('premiumTime' in chat))
                    chat.premiumTime = false
                if (!('nsfw' in chat))
                    chat.nsfw = true
                if (!('menu' in chat))
                    chat.menu = false
                if (!('gconly' in chat))
                    chat.gconly = true
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    expired: 0,
                    autoSticker: false,
                    premium: false,
                    premiumTime: false,
                    menu: true,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
                if (!('anticall' in settings)) settings.anticall = true
                if (!('restartDB' in settings)) settings.restartDB = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                anticall: true,
                restartDB: 0,
                restrict: false
            }
        } catch (e) {
            console.error(e)
        }
        
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''
        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0
        if (!isOwner && !m.fromMe && opts['self']) return;
        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]
        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }

            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.disable && !(isROwner || isOwner)) { // Bot number
                    fail('disable', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `[❗] Limit harian kamu telah habis, ketik *${usedPrefix}claimlimit* untuk refill\n\natau\nbypass limit dengan berdonasi, ketik *${usedPrefix}donasi*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `[💬] Diperlukan level ${plugin.level} untuk menggunakan perintah ini\n*Level mu:* ${_user.level} 📊`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + ' Limit terpakai')
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }
            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }
        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await conn.readMessages([m.key])
    }
}

export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = './src/avatar_contact.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                            (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', await this.getName(user))
                            
let wel = 'https://telegra.ph/file/caead5d833651946ae53f.jpg'
let lea = 'https://telegra.ph/file/f50df2d5c51158345be9d.jpg'
 
                        this.sendFile(id, action === 'add' ? wel : lea, 'pp.jpg', text, null, false, { mentions: [user] })
                    }
                }
            }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
    }
}

export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || '*Group has been closed!*')
        if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || '*Group has been open!*')
        if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || '*Group has been all participants!*')
        if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || '*Group has been only admin!*')
        if (!text) continue
        this.reply(id, text.trim())
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        this.reply(msg.chat, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan. 
Untuk mematikan fitur ini, ketik
*.enable delete*
          
Untuk menghapus pesan yang dikirim oleh Bot, reply pesan dengan perintah
*.delete*`, msg)
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '*DEVELOPER ONLY* • COMMAND INI HANYA UNTUK DEVELOPER BOT',
        disable: '*DISABLED* • COMMAND INI TELAH DIMATIKAN OLEH OWNER',
        owner: '*OWNER ONLY* • COMMAND INI HANYA UNTUK OWNER BOT',
        mods: '*MODERATOR ONLY* • COMMAND INI HANYA UNTUK MODERATOR',
        premium: '*PREMIUM ONLY* • COMMAND INI HANYA UNTUK PREMIUM USER',
        group: '*GROUP CHAT* • COMMAND INI HANYA BISA DIGUNAKAN DIDALAM GRUP',
        private: '*PRIVATE CHAT* • COMMAND INI HANYA BISA DIGUNAKAN DI PRIVATE CHAT',
        admin: '*ADMIN ONLY* • COMMAND INI HANYA UNTUK ADMIN GRUP',
        botAdmin: '*BOT ADMIN ONLY* • COMMAND INI HANYA UNTUK ADMIN BOT',
        unreg: 'Halo Kak 👋\nAnda harus mendaftar ke database dulu sebelum menggunakan fitur ini\n\n➞ Ketik .register nama.umur \nuntuk mendaftar 😁🙏🏼',
        restrict: '*RESTRICT* • RESTRICT BELUM DINYALAKAN DI GRUP INI',
    }[type]
    if (msg) return conn.reply(m.chat, msg)
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})