/*import axios from 'axios'
import { Sticker } from 'wa-sticker-formatter'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
    try {
        let q = m.quoted ? m.quoted: m
        let mime = (q.msg || q).mimetype || ''
        let txt = text ? text: typeof q.text == 'string' ? q.text: ''
        if (!txt) throw `Example: ${usedPrefix + command} halo`
        let avatar = await conn.profilePictureUrl(q.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
        avatar = /tele/.test(avatar) ? avatar: await uploadImage((await conn.getFile(avatar)).data)
        if (!/image\/(jpe?g|png)/.test(mime)) {
            let req = await fakechat(txt, q.name, avatar)
            let stiker = await createSticker(req, false, stickpack, stickauth)
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        } else {
            let img = await q.download()
            let url = await uploadImage(img)
            let req = await fakechatImg(url, txt, q.name, avatar)
            let stiker = await createSticker(req, false, stickpack, stickauth)
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        }
    } catch (e) {
        throw e
    }
}
handler.help = ['fakechat']
handler.tags = ['sticker']
handler.command = /^(fc|fakechat)$/i
handler.limit = true
handler.onlyprem = true
export default handler

async function fakechat(text, name, url) {
    let body = {
        "type": "quote",
        "format": "webp",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 512,
        "scale": 2,
        "messages": [{
        "avatar": true,
        "from": {
            "first_name": name,
            "language_code": "en",
            "name": name,
            "photo": {
            "url": url
            }
        },
        "text": text,
        "replyMessage": {}
        }]
    }
    let res = await axios.post('https://bot.lyo.su/quote/generate', body);
    return Buffer.from(res.data.result.image, "base64");
}

async function fakechatImg(url, text, name, avatar) {
    let body = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [{
        "entities": [],
        "media": {
            "url": url
        },
        "avatar": true,
        "from": {
            "id": 1,
            "name": name,
            "photo": {
            "url": avatar
            }
        },
        "text": text,
        "replyMessage": {}
        }]
    }
    let res = await axios.post('https://bot.lyo.su/quote/generate', body);
    return Buffer.from(res.data.result.image, "base64");
}

async function createSticker(req, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: stickpack,
        author: stickauth,
        quality
    }
return (new Sticker(req ? req: url, stickerMetadata)).toBuffer()
}*/

import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, { conn, args }) => {
let who
if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	else who = m.quoted ? m.quoted.sender : m.chat
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input teks atau reply teks yang ingin di jadikan quote!"
   if (!text) return m.reply('masukan text')
   if (text.length > 100) return m.reply('Maksimal 100 Teks!')
    let username = conn.getName(who)
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": username,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://qc.botcahx.eu.org/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc'].map(v => v + ' <text & reply>')
handler.tags = ['sticker']
handler.command = /^(qc|quotely)$/i
handler.premium = false 
handler.limit = true

export default handler 


/*let { sticker } = require('../lib/sticker.js')
let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
let who
if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	else who = m.quoted ? m.quoted.sender : m.chat
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input teks atau reply teks yang ingin di jadikan quote!"
   if (!text) return m.reply('masukan text')
   if (text.length > 100) return m.reply('Maksimal 100 Teks!')
    let username = conn.getName(who)
    let pp = 'https://telegra.ph/file/320b066dc81928b782c7b.png'
    try {
    let api = await fetch(`https://api.lolhuman.xyz/api/bubblechat?apikey=${global.lolkey}&avatar=${pp}&name=${username}&text=${text}`)
    let buffer = await api.buffer()
    let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
     } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['qc'].map(v => v + ' text & reply')
handler.tags = ['sticker']
handler.command = /^(qc|quotely)$/i
handler.register = false
handler.limit = true

module.exports = handler

https://quote.btch.bz/generate
https://bot.lyo.su/quote/generate'*/