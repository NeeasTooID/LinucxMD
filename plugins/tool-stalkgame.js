import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (command == 'stalkfreefire') {
        if (!text) throw `Example: ${usedPrefix + command} 570098876`
        let result = await( await fetch(`https://api.betabotz.eu.org/api/stalk/ff?id=${text}&apikey=${global.lann}`)).json()
        let cap = `*Nickname:* ${result.result.userNameGame}
*User ID:* ${text}`
        m.reply(cap)
    }
    
    if (command == 'stalksupersus') {
        if (!text) throw `Example: ${usedPrefix + command} 20431364`
        let result = await( await fetch(`http://api.botcahx.eu.org/api/stalk/supersus?id=${text}&apikey=${global.btc}`)).json()
        let cap = `*Nickname:* ${result.result.name}
*ID:* ${text}
*UserId:* ${result.result.userId}
*SpaceId:* ${result.result.spaceId}`
        m.reply(cap)
    }
    
    if (command == 'stalkml') {
        let [id, zoneId] = text.split(',');
        if (!id || !zoneId) throw `Example: ${usedPrefix + command} 84830127,2169`
        let result = await stalkml(`${id}`, `${zoneId}`)
        let cap = `*Nickname:* ${result.nickname}
*User ID:* ${text}`
        m.reply(cap)
    }
}
handler.help = ['stalkfreefire', 'stalkml', 'stalksupersus']
handler.command = ['stalkfreefire', 'stalkml', 'stalksupersus']
handler.tags = ['tools']
handler.limit = true

export default handler;

function _0x57f3(_0x4ae309,_0x3e0f33){var _0x1bdd53=_0x1bdd();return _0x57f3=function(_0x57f347,_0x5638fe){_0x57f347=_0x57f347-0x195;var _0x5591c6=_0x1bdd53[_0x57f347];return _0x5591c6;},_0x57f3(_0x4ae309,_0x3e0f33);}(function(_0x91d9ab,_0x58deb8){var _0x839f2=_0x57f3,_0x3c9ac=_0x91d9ab();while(!![]){try{var _0x1814dd=-parseInt(_0x839f2(0x197))/0x1+parseInt(_0x839f2(0x199))/0x2*(parseInt(_0x839f2(0x19b))/0x3)+-parseInt(_0x839f2(0x1a3))/0x4*(parseInt(_0x839f2(0x19f))/0x5)+parseInt(_0x839f2(0x1a1))/0x6+-parseInt(_0x839f2(0x1a7))/0x7+-parseInt(_0x839f2(0x196))/0x8+parseInt(_0x839f2(0x1a0))/0x9;if(_0x1814dd===_0x58deb8)break;else _0x3c9ac['push'](_0x3c9ac['shift']());}catch(_0x5e5cf6){_0x3c9ac['push'](_0x3c9ac['shift']());}}}(_0x1bdd,0xd3434));function _0x1bdd(){var _0x30bd57=['519936swdmHo','https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store','User\x20Id\x20or\x20ZoneId\x20Not\x20Found','then','10049529xqokYT','352','entries','10412936LyHOtM','1041843paPXPW','https://www.duniagames.co.id/','2UEQqBe','application/json','376797aOoYbP','application/x-www-form-urlencoded','catch','gameDetail','40xYwMwn','35478216vqWPMI','9700128odHHWb','REG'];_0x1bdd=function(){return _0x30bd57;};return _0x1bdd();}async function stalkml(_0xd95ed1,_0x4e5e09){return new Promise(async(_0x3faff2,_0x11317f)=>{var _0x579b6a=_0x57f3;axios['post'](_0x579b6a(0x1a4),new URLSearchParams(Object[_0x579b6a(0x195)]({'productId':'1','itemId':'2','catalogId':'57','paymentId':_0x579b6a(0x1a8),'gameId':_0xd95ed1,'zoneId':_0x4e5e09,'product_ref':_0x579b6a(0x1a2),'product_ref_denom':'AE'})),{'headers':{'Content-Type':_0x579b6a(0x19c),'Referer':_0x579b6a(0x198),'Accept':_0x579b6a(0x19a)}})[_0x579b6a(0x1a6)](_0x359dfd=>{var _0x455c6b=_0x579b6a;_0x3faff2({'status':0xc8,'id':_0xd95ed1,'zoneId':_0x4e5e09,'nickname':_0x359dfd['data']['data'][_0x455c6b(0x19e)]['userName']});})[_0x579b6a(0x19d)](_0x268510=>{var _0x110591=_0x579b6a;_0x3faff2({'status':0x194,'msg':_0x110591(0x1a5)});});});}