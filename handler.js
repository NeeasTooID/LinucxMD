import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const printMessage = (await import('./lib/print.js')).default
/**
* @type {import('@adiwajshing/baileys')}
*/
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
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.limit))
                    user.limit = 100
                if (!isNumber(user.freelimit))
                    user.freelimit = 0
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.skata))
                    user.skata = 0
                if (!isNumber(user.joinlimit))
                    user.joinlimit = 1
                if (!isNumber(user.pc))
                    user.pc = 0
                if (!isNumber(user.ojekk))
                    user.ojekk = 0
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('unreg' in user))
                    user.unreg = false
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!('lastBanned' in user))
                    user.lastBanned = 0
                if (!'BannedReason' in user)
                    user.BannedReason = ''
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Beginner'
                    
                if (!isNumber(user.chip))
                    user.chip = 0
                if (!isNumber(user.atm))
                    user.atm = 0
                if (!isNumber(user.fullatm))
                    user.fullatm = 0
                if (!isNumber(user.bank))
                    user.bank = 0
                if (!isNumber(user.health))
                    user.health = 100
                if (!isNumber(user.potion))
                    user.potion = 0
                if (!isNumber(user.trash))
                    user.trash = 0
                if (!isNumber(user.wood))
                    user.wood = 0
                if (!isNumber(user.rock))
                    user.rock = 0
                if (!isNumber(user.string))
                    user.string = 0
                if (!isNumber(user.petfood))
                    user.petfood = 0
                    

                if (!isNumber(user.emerald))
                    user.emerald = 0
                if (!isNumber(user.diamond))
                    user.diamond = 0
                if (!isNumber(user.gold))
                    user.gold = 0
                if (!isNumber(user.botol))
                    user.botol = 0
                if (!isNumber(user.kardus))
                    user.kardus = 0
                if (!isNumber(user.kaleng))
                    user.kaleng = 0
                if (!isNumber(user.gelas))
                    user.gelas = 0
                if (!isNumber(user.plastik))
                    user.plastik = 0
                if (!isNumber(user.iron))
                    user.iron = 0

                if (!isNumber(user.common))
                    user.common = 0
                if (!isNumber(user.uncommon))
                    user.uncommon = 0
                if (!isNumber(user.mythic))
                    user.mythic = 0
                if (!isNumber(user.legendary))
                    user.legendary = 0
                if (!isNumber(user.umpan))
                    user.umpan = 0
                if (!isNumber(user.pet))
                    user.pet = 0

                if (!isNumber(user.paus))
                    user.paus = 0
                if (!isNumber(user.kepiting))
                    user.kepiting = 0
                if (!isNumber(user.gurita))
                    user.gurita = 0
                if (!isNumber(user.cumi))
                    user.cumi = 0
                if (!isNumber(user.buntal))
                    user.buntal = 0
                if (!isNumber(user.dory))
                    user.dory = 0
                if (!isNumber(user.lumba))
                    user.lumba = 0
                if (!isNumber(user.lobster))
                    user.lobster = 0
                if (!isNumber(user.hiu))
                    user.hiu = 0
                if (!isNumber(user.udang))
                    user.udang = 0
                if (!isNumber(user.orca))
                    user.orca = 0

                if (!isNumber(user.banteng))
                    user.banteng = 0
                if (!isNumber(user.gajah))
                    user.gajah = 0
                if (!isNumber(user.harimau))
                    user.harimau = 0
                if (!isNumber(user.kambing))
                    user.kambing = 0
                if (!isNumber(user.panda))
                    user.panda = 0
                if (!isNumber(user.buaya))
                    user.buaya = 0
                if (!isNumber(user.kerbau))
                    user.kerbau = 0
                if (!isNumber(user.sapi))
                    user.sapi = 0
                if (!isNumber(user.monyet))
                    user.monyet = 0
                if (!isNumber(user.babihutan))
                    user.babihutan = 0
                if (!isNumber(user.babi))
                    user.babi = 0
                if (!isNumber(user.ayam))
                    user.ayam = 0

                if (!isNumber(user.lastadventure))
                    user.lastadventure = 0
                if (!isNumber(user.lastkill))
                    user.lastkill = 0
                if (!isNumber(user.lastmisi))
                    user.lastmisi = 0
                if (!isNumber(user.lastdungeon))
                    user.lastdungeon = 0
                if (!isNumber(user.lastwar))
                    user.lastwar = 0
                if (!isNumber(user.lastsda))
                    user.lastsda = 0
                if (!isNumber(user.lastduel))
                    user.lastduel = 0
                if (!isNumber(user.lastmining))
                    user.lastmining = 0
                if (!isNumber(user.lasthunt))
                    user.lasthunt = 0
                if (!isNumber(user.lastgift))
                    user.lastgift = 0
                if (!isNumber(user.lastberkebon))
                    user.lastberkebon = 0
                if (!isNumber(user.lastdagang))
                    user.lastdagang = 0
                if (!isNumber(user.lasthourly))
                    user.lasthourly = 0
                if (!isNumber(user.lastbansos))
                    user.lastbansos = 0
                if (!isNumber(user.lastrampok))
                    user.lastrampok = 0
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.lastnebang))
                    user.lastnebang = 0
                if (!isNumber(user.lastweekly))
                    user.lastweekly = 0
                if (!isNumber(user.lastmonthly))
                    user.lastmonthly = 0
                if (!isNumber(user.lastlinux))
                    user.lastlinux = 0

                if (!isNumber(user.apel))
                    user.apel = 0
                if (!isNumber(user.anggur))
                    user.anggur = 0
                if (!isNumber(user.jeruk))
                    user.jeruk = 0
                if (!isNumber(user.mangga))
                    user.mangga = 0
                if (!isNumber(user.pisang))
                    user.pisang = 0
                if (!isNumber(user.makanan))
                    user.makanan = 0
                if (!isNumber(user.bibitanggur))
                    user.bibitanggur = 0
                if (!isNumber(user.bibitpisang))
                    user.bibitpisang = 0
                if (!isNumber(user.bibitapel))
                    user.bibitapel = 0
                if (!isNumber(user.bibitmangga))
                    user.bibitmangga = 0
                if (!isNumber(user.bibitjeruk))
                    user.bibitjeruk = 0

                if (!isNumber(user.horse))
                    user.horse = 0
                if (!isNumber(user.horseexp))
                    user.horseexp = 0
                if (!isNumber(user.cat))
                    user.cat = 0
                if (!isNumber(user.catexp))
                    user.catexp = 0
                if (!isNumber(user.fox))
                    user.fox = 0
                if (!isNumber(user.foxhexp))
                    user.foxexp = 0
                if (!isNumber(user.dog))
                    user.foxexp = 0
                if (!isNumber(user.dogexp))
                    user.dogexp = 0
                if (!isNumber(user.robo))
                    user.robo = 0
                if (!isNumber(user.roboexp))
                    user.roboexp = 0

                if (!isNumber(user.horselastfeed))
                    user.horselastfeed = 0
                if (!isNumber(user.catlastfeed))
                    user.catlastfeed = 0
                if (!isNumber(user.robolastfeed))
                    user.robolastfeed = 0
                if (!isNumber(user.foxlastfeed))
                    user.foxlastfeed = 0
                if (!isNumber(user.doglastfeed))
                    user.doglastfeed = 0

                if (!isNumber(user.robo))
                    user.robo = 0
                if (!isNumber(user.robodurability))
                    user.robodurability = 0
                if (!isNumber(user.armor))
                    user.armor = 0
                if (!isNumber(user.armordurability))
                    user.armordurability = 0
                if (!isNumber(user.sword))
                    user.sword = 0
                if (!isNumber(user.sworddurability))
                    user.sworddurability = 0
                if (!isNumber(user.pickaxe))
                    user.pickaxe = 0
                if (!isNumber(user.pickaxedurability))
                    user.pickaxedurability = 0
                if (!isNumber(user.fishingrod))
                    user.fishingrod = 0
                if (!isNumber(user.fishingroddurability))
                    user.fishingroddurability = 0

                if (!isNumber(user.premium))
                    user.premium = false
                if (!isNumber(user.premiumTime))
                    user.premiumTime = 0
                if (!isNumber(user.joinlimit))
                    user.joinlimit = 0
            } else
                global.db.data.users[m.sender] = {
                money: 0,
                exp: 0,
                limit: 100,
                freelimit: 0,
                skata: 0,
                registered: false,
                name: m.name,
                pc: 0,
                joinlimit: 1,
                age: -1,
                regTime: -1,
                unreg: false,
                afk: -1,
                afkReason: '',
                banned: false,
                warn: 0,
                level: 0,
                rokets: 0,
                role: 'Beginner',
                makanan: 0,
                ojekk: 0,
                BannedReason: '',

                chip: 0,
                bank: 0,
                atm: 0,
                fullatm: 0,
                health: 100,
                potion: 10,
                trash: 0,
                wood: 0,
                rock: 0,
                string: 0,
                emerald: 0,
                diamond: 0,
                gold: 0,
                iron: 0,
                common: 0,
                uncommon: 0,
                mythic: 0,
                legendary: 0,
                umpan: 0,
                pet: 0,
                horse: 0,
                horseexp: 0,
                horselastfeed: 0,
                cat: 0,
                catexp: 0,
                catlastfeed: 0,
                fox: 0,
                foxexp: 0,
                foxlastfeed: 0,
                robo: 0,
                roboexp: 0,
                robolastfeed: 0,
                dog: 0,
                dogexp: 0,
                doglastfeed: 0,

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
                banteng: 0,
                harimau: 0,
                gajah: 0,
                kambing: 0,
                buaya: 0,
                kerbau: 0,
                sapi: 0,
                monyet: 0,
                babi: 0,
                ayam: 0,

                armor: 0,
                armordurability: 0,
                sword: 0,
                sworddurability: 0,
                pickaxe: 0,
                pickaxedurability: 0,
                fishingrod: 0,
                fishingroddurability: 0,
                robo: 0,
                robodurability: 0,
                apel: 20,
                pisang: 0,
                anggur: 0,
                mangga: 0,
                jeruk: 0,

                lastadventure: 0,
                lastkill: 0,
                lastmisi: 0,
                lastdungeon: 0,
                lastwar: 0,
                lastsda: 0,
                lastduel: 0,
                lastmining: 0,
                lasthunt: 0,
                lastgift: 0,
                lastberkebon: 0,
                lastdagang: 0,
                lasthourly: 0,
                lastbansos: 0,
                lastrampok: 0,
                lastclaim: 0,
                lastnebang: 0,
                lastweekly: 0,
                lastmonthly: 0,
                lastlinux: 0,

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
                if (!('listStr' in chat))
                    chat.listStr = {}
                if (!('delete' in chat))
                    chat.delete = false
                if (!('antiLinkkick' in chat)) 
                    chat.antiLinkkick = false 
                if (!('antiLinkdelete' in chat))
                    chat.antiLinkdelete = false
                if (!('pembatasan' in chat))
                    chat.pembatasan = false
                if (!('antiSticker' in chat))
                    chat.antiSticker = false
                if (!('antiLinkWa' in chat))
                    chat.antiLinkWa = false
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiVirtex' in chat))
                    chat.antiVirtex = false
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!('antiBadword' in chat))
                    chat.antiBadword = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!('rpg' in chat))
                    chat.rpg = true
                if (!('game' in chat))
                    chat.game = true
                if (!('teks' in chat))
                    chat.teks = false
                if (!('autolevelup' in chat))
                    chat.autolevelup = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                isBanned: false,
                welcome: false,
                detect: false,
                sWelcome: '',
                sBye: '',
                sPromote: '',
                sDemote: '',
                listStr: {},
                delete: true,
                antiLinkkick: false,
                antiLinkdelete: false,
                pembatasan: false,
                antiLinkWa: false,
                antiSticker: false,
                viewonce: false,
                antiToxic: false,
                antiVirtex: false,
                antiBadword: false,
                simi: false,
                nsfw: false,
                rpg: false,
                game: false,
                teks: true,
                autolevelup: false,
                expired: 0,
            }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('composing' in settings)) settings.composing = false
                if (!('restrict' in settings)) settings.restrict = true
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!isNumber(settings.restartDB)) settings.restartDB = 0
                if (!('backup' in settings)) settings.backup = false
                if (!isNumber(settings.backupDB)) settings.backupDB = 0
                if (!('cleartmp' in settings)) settings.cleartmp = false
                if (!isNumber(settings.lastcleartmp)) settings.lastcleartmp = 0
                if (!isNumber(settings.status)) settings.status = 0
                if (!('anticall' in settings)) settings.anticall = true
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                composing: false,
                restrict: true,
                autorestart: true,
                restartDB: 0,
                backup: false,
                backupDB: 0,
                cleartmp: false,
                lastcleartmp: 0,
                status: 0,
                anticall: true,
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
        const isPrems = isROwner || (db.data.users[m.sender].premiumTime > 0 || db.data.users[m.sender].premium)

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque,
            time = 1000 * 5
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

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)): {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants: []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender): {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid): {}) || {} // Your Data
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
            let _prefix = plugin.customPrefix ? plugin.customPrefix: conn.prefix ? conn.prefix: global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]]:
                Array.isArray(_prefix) ? // Array?
                _prefix.map(p => {
                    let re = p instanceof RegExp ? // RegExp in Array?
                    p:
                    new RegExp(str2Regex(p))
                    return [re.exec(m.text), re]
                }):
                typeof _prefix === 'string' ? // String?
                [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]:
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
                plugin.command.test(command):
                Array.isArray(plugin.command) ? // Array?
                plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) : cmd === command) : typeof plugin.command === 'string' ? // String?
                plugin.command === command : false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    let ban = db.data.banned[m.sender]
                    if (typeof ban !== 'undefined' && ban.status) 
                        return
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && name != 'mode-bot.js' && chat?.isBanned)
                        return
                    if (name != 'owner-unbanuser.js' && name != 'cek-banned.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) {
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) {
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) {
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) {
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) {
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) {
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) {
                    fail('private', m, this)
                    continue
                }
                if (plugin.register && !_user.registered) {
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.onlyprem && !m.isGroup && !isPrems) {
                    fail('onlyprem', m, this)
                    continue
                }
                if (plugin.rpg && m.isGroup && !global.db.data.chats[m.chat].rpg) {
                    fail('rpg', m, this)
                    continue
                }
                if (plugin.game && m.isGroup && !global.db.data.chats[m.chat].game) {
                    fail('game', m, this)
                    continue
                }
                if (plugin.nsfw && m.isGroup && !global.db.data.chats[m.chat].nsfw) {
                    fail('nsfw', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp): 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && _user.limit < plugin.limit * 1) {
                        function _0xb831(_0x57785a,_0x36c98d){var _0x338bdd=_0x338b();return _0xb831=function(_0xb83186,_0x40d604){_0xb83186=_0xb83186-0x197;var _0x2813e7=_0x338bdd[_0xb83186];return _0x2813e7;},_0xb831(_0x57785a,_0x36c98d);}var _0x29f1dc=_0xb831;function _0x338b(){var _0xaef65d=['683973gxtyQB','pricelist','40cHXxtX','29194srpBuy','17120gpBmcq','1873785SrGPPw','641815yfJDqI','4iSZNFe','8755334zojbxW','206484RfPzBU','2659080wxvtiq','relayMessage','chat','150vZukrF'];_0x338b=function(){return _0xaef65d;};return _0x338b();}(function(_0x3c44cc,_0x769015){var _0x1aae9c=_0xb831,_0x259fe8=_0x3c44cc();while(!![]){try{var _0x51d616=parseInt(_0x1aae9c(0x1a0))/0x1+parseInt(_0x1aae9c(0x1a4))/0x2+parseInt(_0x1aae9c(0x19f))/0x3*(parseInt(_0x1aae9c(0x1a1))/0x4)+parseInt(_0x1aae9c(0x199))/0x5*(parseInt(_0x1aae9c(0x1a3))/0x6)+parseInt(_0x1aae9c(0x1a2))/0x7+parseInt(_0x1aae9c(0x19c))/0x8*(parseInt(_0x1aae9c(0x19a))/0x9)+-parseInt(_0x1aae9c(0x19e))/0xa*(parseInt(_0x1aae9c(0x19d))/0xb);if(_0x51d616===_0x769015)break;else _0x259fe8['push'](_0x259fe8['shift']());}catch(_0x10c88c){_0x259fe8['push'](_0x259fe8['shift']());}}}(_0x338b,0xaeacd),this[_0x29f1dc(0x197)](m[_0x29f1dc(0x198)],{'liveLocationMessage':{'degreesLatitude':42.923901,'degreesLongitude':143.196106,'accuracyInMeters':0x0,'degreesClockwiseFromMagneticNorth':0x2,'caption':global[_0x29f1dc(0x19b)],'sequenceNumber':0x2,'timeOffset':0x3,'contextInfo':m}},{}));
                    continue
                }
                if (plugin.level > _user.level) {
                	this.reply(m.chat, `[💬] Mohon maaf level yang di perlukan untuk menggunakan fitur ini ${plugin.level}\n*Level mu:* ${_user.level} 📊`, m)
                    continue
                }
                if (plugin.age > _user.age) {
                	this.reply(m.chat, `[💬] Umurmu harus diatas ${plugin.age} Tahun untuk menggunakan fitur ini...`, m)	
                    continue
                }
                let isCmddd =/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.text)
                if ( isCmddd && !isPrems && !m.isGroup ) {
                    var _0x292eab=_0x191c;(function(_0x55b69d,_0x3117ab){var _0x4aafe1=_0x191c,_0x265a3e=_0x55b69d();while(!![]){try{var _0x578188=-parseInt(_0x4aafe1(0xea))/0x1*(-parseInt(_0x4aafe1(0xe3))/0x2)+parseInt(_0x4aafe1(0xec))/0x3+parseInt(_0x4aafe1(0xdc))/0x4+parseInt(_0x4aafe1(0xe5))/0x5+parseInt(_0x4aafe1(0xe9))/0x6*(-parseInt(_0x4aafe1(0xe8))/0x7)+-parseInt(_0x4aafe1(0xe1))/0x8+-parseInt(_0x4aafe1(0xe6))/0x9*(parseInt(_0x4aafe1(0xe0))/0xa);if(_0x578188===_0x3117ab)break;else _0x265a3e['push'](_0x265a3e['shift']());}catch(_0x705c66){_0x265a3e['push'](_0x265a3e['shift']());}}}(_0x5ede,0x451b8),this[_0x292eab(0xdf)](m[_0x292eab(0xe2)],{'text':_0x292eab(0xde)+global[_0x292eab(0xe7)]['nomorown']+_0x292eab(0xe4),'contextInfo':{'mentionedJid':[m[_0x292eab(0xeb)]],'externalAdReply':{'title':'','body':'','thumbnailUrl':_0x292eab(0xdd),'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}}));function _0x191c(_0x2b5c25,_0x4d9ebe){var _0x5edecb=_0x5ede();return _0x191c=function(_0x191c9d,_0x33130f){_0x191c9d=_0x191c9d-0xdc;var _0x4a076f=_0x5edecb[_0x191c9d];return _0x4a076f;},_0x191c(_0x2b5c25,_0x4d9ebe);}function _0x5ede(){var _0x4b20c6=['330216UpoadF','\x0a\x0aThank\x20you\x20for\x20using\x20our\x20bot\x20#MaximusStore','1437800mfRpAP','18NRzDAM','info','1549107aNyNoY','12ZMVZaJ','1ckjBuP','sender','1627239wZbQtf','196388DaAJki','https://telegra.ph/file/0b32e0a0bb3b81fef9838.jpg','⚠️\x20Menggunakan\x20bot\x20dalam\x20obrolan\x20pribadi\x20hanya\x20untuk\x20pengguna\x20premium.\x0a\x0a*PREMIUM\x20USER\x20PRICE\x20LIST*\x0a\x0a*3\x20Day\x20premium*\x0a-\x20OrderID:\x203\x0a-\x20Price:\x20Rp.\x205.000\x20IDR\x0a\x0a*7\x20Day\x20premium*\x0a-\x20OrderID:\x207\x0a-\x20Price:\x20Rp.\x2010.000\x20IDR\x0a\x0a*30\x20Day\x20premium*\x0a-\x20OrderID:\x2030\x0a-\x20Price:\x20Rp.\x2015.000\x20IDR\x0a\x0a*60\x20Day\x20premium*\x0a-\x20OrderID:\x2060\x0a-\x20Price:\x20Rp.\x2030.000\x20IDR\x0a\x0a*90\x20Day\x20premium*\x0a-\x20OrderID:\x2090\x0a-\x20Price:\x20Rp.\x2040.000\x20IDR\x0a\x0a*365\x20Day\x20premium*\x0a-\x20OrderID:\x20365\x0a-\x20Price:\x20Rp.\x20115.000\x20IDR\x0a\x0aTolong\x20ikuti\x20cara\x20pembayaran\x20ini.\x0a\x0aSilahkan\x20tulis\x20seperti\x20ini\x20:\x20*.order\x20<OrderID>*\x0aContoh:\x20*.order\x2030*\x0a\x0aJika\x20anda\x20terlalu\x20bodoh.\x20anda\x20bisa\x20langsung\x20menghubungi\x20nomor\x20owner\x20kami\x20melalui\x20link\x20di\x20bawah\x20ini:\x0awa.me/','sendMessage','737210rFojPf','1368560FXphrx','chat'];_0x5ede=function(){return _0x4b20c6;};return _0x5ede();}
                    continue
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
                    /*if (m.limit)
                       await m.reply('Kamu menggunakan fitur limit\n╰► - 1 Limit')*/// lain kali jangan lupa tanda kurung nya ya! ... fixed by Fokusdotid (Fokus ID)
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
        let user,
        stats = global.db.data.stats
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
                        stat.success = m.error != null ? 0: 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0: now
                } else
                    stat = stats[m.plugin] = {
                    total: 1,
                    success: m.error != null ? 0: 1,
                    last: now,
                    lastSuccess: m.error != null ? 0: now
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
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (global.db.data.settings[this.user.jid].autoread)
            await this.readMessages([m.key]).catch(() => {})

        if (global.db.data.settings[this.user.jid].composing)
            await this.sendPresenceUpdate('composing', m.chat).catch(() => {})
    }
}

/**
* Handle groups participants update
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate
*/
function _0x4ced(_0x19ad75,_0x808e8d){const _0xf00ab5=_0xf00a();return _0x4ced=function(_0x4cede1,_0x4e7cec){_0x4cede1=_0x4cede1-0x6c;let _0x327a2f=_0xf00ab5[_0x4cede1];return _0x327a2f;},_0x4ced(_0x19ad75,_0x808e8d);}function _0xf00a(){const _0x4f2ab5=['bye','8265618KJDqQg','add','@subject','readFileSync','getName','𝙶𝚛𝚘𝚞𝚙\x20𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗','@desc','@user\x20```is\x20now\x20Admin```','sDemote','split','sPromote','sBye','desc','https://telegra.ph/file/15216d659ba3b0bd5645c.jpg','remove','sWelcome','Bye,\x20@user!','1933036iskEvB','./src/avatar_contact.png','3sfankE','18008020Lvjvek','profilePictureUrl','5BPQpbv','sdemote','fromCharCode','repeat','demote','sendMessage','102877oUqiGS','88DBQwNL','6529698ayrxSS','promote','https://telegra.ph/file/27af7cd34b16276e304a9.jpg','@user','spromote','replace','data','groupMetadata','metadata','295786mHQyoZ','623588DPbiCQ','welcome','image','chats','@user\x20```is\x20no\x20longer\x20Admin```'];_0xf00a=function(){return _0x4f2ab5;};return _0xf00a();}(function(_0x2328bc,_0xa36189){const _0x5bd0b1=_0x4ced,_0x48fae8=_0x2328bc();while(!![]){try{const _0x566951=parseInt(_0x5bd0b1(0x80))/0x1+-parseInt(_0x5bd0b1(0x8b))/0x2*(parseInt(_0x5bd0b1(0x77))/0x3)+parseInt(_0x5bd0b1(0x75))/0x4*(-parseInt(_0x5bd0b1(0x7a))/0x5)+parseInt(_0x5bd0b1(0x92))/0x6+-parseInt(_0x5bd0b1(0x8c))/0x7*(-parseInt(_0x5bd0b1(0x81))/0x8)+parseInt(_0x5bd0b1(0x82))/0x9+-parseInt(_0x5bd0b1(0x78))/0xa;if(_0x566951===_0xa36189)break;else _0x48fae8['push'](_0x48fae8['shift']());}catch(_0x574646){_0x48fae8['push'](_0x48fae8['shift']());}}}(_0xf00a,0xb8134));export async function participantsUpdate({id:_0x4e9dc1,participants:_0x576501,action:_0x2c8055}){const _0x5150b3=_0x4ced;if(opts['self'])return;if(this['isInit'])return;let _0x15ba20=global['db'][_0x5150b3(0x88)][_0x5150b3(0x8f)][_0x4e9dc1]||{},_0x206164='';switch(_0x2c8055){case _0x5150b3(0x93):case _0x5150b3(0x72):if(_0x15ba20[_0x5150b3(0x8d)]){let _0x29d480=await this[_0x5150b3(0x89)](_0x4e9dc1)||(conn[_0x5150b3(0x8f)][_0x4e9dc1]||{})[_0x5150b3(0x8a)];for(let _0x5eb666 of _0x576501){let _0x45fce0=fs[_0x5150b3(0x95)](_0x5150b3(0x76));try{_0x45fce0=await this[_0x5150b3(0x79)](_0x5eb666,_0x5150b3(0x8e));}catch(_0x53de13){}finally{_0x206164=(_0x2c8055==='add'?(_0x15ba20[_0x5150b3(0x73)]||this[_0x5150b3(0x8d)]||conn[_0x5150b3(0x8d)]||'Welcome,\x20@user!')['replace'](_0x5150b3(0x94),await this[_0x5150b3(0x96)](_0x4e9dc1))[_0x5150b3(0x87)](_0x5150b3(0x98),_0x29d480[_0x5150b3(0x70)]?String[_0x5150b3(0x7c)](0x200e)[_0x5150b3(0x7d)](0xfa1)+_0x29d480[_0x5150b3(0x70)]:''):_0x15ba20[_0x5150b3(0x6f)]||this[_0x5150b3(0x91)]||conn[_0x5150b3(0x91)]||_0x5150b3(0x74))['replace']('@user','@'+_0x5eb666[_0x5150b3(0x6d)]('@')[0x0]);let _0x4cb6db=_0x5150b3(0x71),_0x4421d6=_0x5150b3(0x84);await this[_0x5150b3(0x7f)](_0x4e9dc1,{'text':_0x206164,'contextInfo':{'mentionedJid':[_0x5eb666],'externalAdReply':{'title':await this['getName'](_0x4e9dc1),'body':_0x5150b3(0x97),'thumbnailUrl':_0x2c8055===_0x5150b3(0x93)?_0x4cb6db:_0x4421d6,'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':null});}}}break;case _0x5150b3(0x83):_0x206164=_0x15ba20[_0x5150b3(0x6e)]||this[_0x5150b3(0x86)]||conn[_0x5150b3(0x86)]||_0x5150b3(0x99);case _0x5150b3(0x7e):if(!_0x206164)_0x206164=_0x15ba20[_0x5150b3(0x6c)]||this[_0x5150b3(0x7b)]||conn[_0x5150b3(0x7b)]||_0x5150b3(0x90);_0x206164=_0x206164[_0x5150b3(0x87)](_0x5150b3(0x85),'@'+_0x576501[0x0][_0x5150b3(0x6d)]('@')[0x0]);if(_0x15ba20['detect'])this[_0x5150b3(0x7f)](_0x4e9dc1,{'text':_0x206164,'mentions':this['parseMention'](_0x206164)});break;}}
/**
* Handle groups update
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate
*/
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
     for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id],
        text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
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
        await this.reply(msg.chat, `
⧻Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.disable antidelete*
`.trim(), msg, { mentions: [participant] })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: 'This command is for *R-OWNER* Only',
        owner: 'This command is for *OWNER* Only',
        mods: 'This command is for *MODS* Only',
        premium: '*Price Premium Akses*\n3 Day *IDR 5,000*\n14 Day *IDR 10,000*\n30 Day *IDR 15,000*\n1 Year *IDR 110,000*\n\nOrder : *.order*',
        group: 'This command is for *GROUP* Only',
        private: 'This command is for *PRIVATE* Only',
        admin: 'This command is for *ADMINS* Only',
        botAdmin: 'This command is for *BOT-ADMINS* Only',
        onlyprem: 'This command is for *PREMIUM* Only',
        nsfw: 'This Command Has Not Been Activated In This Group.\n\nEnable This Feature By Writing *.enable nsfw*',
        rpg: 'This Command Has Not Been Activated In This Group.\n\nEnable This Feature By Writing *.enable rpg*',
        game: 'This Command Has Not Been Activated In This Group.\n\nEnable This Feature By Writing *.enable game*',
        restrict: '*FEATURES TURNED OFF BY OWNERS*',
        unreg: '*Indonesian*\nSilahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Maximus.19*\n══════════════════════\n*English*\nPlease register to use this feature by typing:\n\n*#register name.age*\n\nExample: *#register Maximus.19*'
    }[type]

    if (msg) return m.reply(msg)
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'handler.js'"))
if (global.reloadHandler) console.log(await global.reloadHandler())
})
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? ??"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = "Selamat Malam"
}
return res
}