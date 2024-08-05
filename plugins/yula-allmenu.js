import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { getDevice } from '@adiwajshing/baileys'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
let tags = {
  'maximus': '𝚂𝙸𝙼𝙿𝙻𝙴',
  'main': '𝙼𝙰𝙸𝙽',
  'ai': '𝙰𝙸',
  'adminry': '𝙰𝙳𝙼𝙸𝙽',
  'group': '𝙶𝚁𝙾𝚄𝙿',
  'rpg': '𝚁𝙿𝙶 𝙶𝙰𝙼𝙴',
  'xp': '𝙴𝚇𝙿 𝙰𝙽𝙳 𝙻𝙸𝙼𝙸𝚃',
  'sticker': '𝚂𝚃𝙸𝙲𝙺𝙴𝚁',
  'downloader': '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁',
  'tools': '𝚃𝙾𝙾𝙻𝚂',
  'owner': '𝙾𝚆𝙽𝙴𝚁', 
  'info': '𝙸𝙽𝙵𝙾',
}
const defaultMenu = {
  before: `Hi %name.\nMy name is ${global.info.namebot}. I am the Assistant for this Group. I'm here to help you with tasks like searching for information online, retrieving data, etc. By utilizing innovative features, I will help you to move more quickly and productively in completing your work.

*「 I N F O  B O T 」*
 •  *Date :* %date
 •  *Your Premium :* %prems
 •  *Your Limits :* %limit
 •  *Versions :* %version
 •  *Today's request :* %totalreg 
 •  *Database :* mongoDB

%readmore
`.trimStart(),
  header: '*┌ •「 %category  」*',
  body: '*│ •* %cmd',
  footer: '*└* ',
  after: 'LinucxMD - NEASTOOID CO 2024',
}

//"https://github.com/XM4ZE/DATABASE/raw/master/wallpaper/KARA.mp3?raw=true",."https://github.com/Neder11ndeu/Music2/blob/main/Yula%20intro.mp3?raw=true"

let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let tag = `@${m.sender.split`@`[0]}`
    let image = elainajpg.getRandom()
    let user = global.db.data.users[m.sender]
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Yes': 'No'}`
    let name = `${user.registered ? user.name : conn.getName(m.sender)}`
    let status = `${m.sender.split`@`[0] == info.nomorown ? 'Developer' : user.premiumTime >= 1 ? 'Premium User' : user.level >= 1000 ? 'Elite User' : 'Free User'}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: usedPrefix, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, prems, tag, status, wib, 
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

 let xm4ze = await( await fetch(xmenus)).json()
 let thum = xm4ze[Math.floor(Math.random() * xm4ze.length)]

conn.sendMessage(m.chat, {
            text: text,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.info.channel,
                   serverMessageId: null,
                   newsletterName: global.info.namechannel,
                   },
                   externalAdReply: {
                   title: global.info.namebot + `© 2024`,
                   body: 'Powered By Npc',
                   thumbnailUrl: thumfoto,
                   sourceUrl: 'https://chat.whatsapp.com/Bpaxfv3a1tLIx0gaGZTQpN',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })

  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['maximus']
handler.command = /^(allmenu|menu)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi')
  }
  if (time >= 11) {
    wishloc = ('Selamat Siang')
  }
  if (time >= 15) {
    wishloc = ('️Selamat Sore')
  }
  if (time >= 18) {
  	wishloc = ('Selamat Malam')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam')
  }
  return wishloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}