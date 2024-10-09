import fetch from 'node-fetch'

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `Example: ${usedPrefix}${command} eula
  
*-= LIST CHARACTERS =-*

albedo, alhaitham, aloy, amber, anemo, arataki itto, arlecchino, baizhu, barbara, beidou, bennett, candace, charlotte, chevreuse, chiori, chongyun, clorinde, collei, cyno, dehya, dendro, diluc, diona, dori, electro, emilie, eula, faruzan, fischl, freminet, furina, ganyu, gaming, geo, gorou, hydro, hu tao, jean, kaedehara kazuha, kaeya, kamisato ayaka, kamisato ayato, kachina, kaveh, keqing, kirara, kinich, klee, kujou sara, kuki shinobu, layla, lisa, lynette, lyney, mika, mualani, mona, nahida, navia, neuvillette, nilou, ningguang, noelle, qiqi, raiden shogun, sethos, sigewinne, razor, rosaria, sangonomiya kokomi, sayu, shenhe, shikanoin heizou, sucrose, tartaglia, thoma, tighnari, venti, wanderer, wriothesley, xiangling, xianyun, xiao, xingqiu, xinyan, yae miko, yanfei, yaoyao, yelan, yoimiya, yun jin, zhongli
`
  let Maximus;
  
  switch(text) {
       case 'albedo':
       case 'Albedo':
      Maximus = 'Albedo';
      break;
       case 'alhaitham':
       case 'Al haitham':
       case 'Alhaitham':
      Maximus = 'Alhaitham';
      break;
       case 'Aloy':
       case 'aloy':
      Maximus = 'Aloy';
      break;
       case 'amber':
       case 'Amber':
      Maximus = 'Amber';
      break;
       case 'anemo':
       case 'Anemo':
       case 'travelers anemo':
       case 'anemo travelers':
      Maximus = 'Anemo';
      break;
       case 'itto':
       case 'arataki itto':
       case 'Arataki itto':
       case 'Arataki Itto':
       case 'Itto':
      Maximus = 'Arataki Itto';
      break;
       case 'arlecchino':
       case 'Arlecchino':
       case 'ARLECCHINO':
       case 'father':
       case 'Father':
      Maximus = 'Arlecchino';
      break;
       case 'baizhu':
       case 'Baizhu':
      Maximus = 'Baizhu';
      break;
       case 'barbara':
       case 'Barbara':
      Maximus = 'Barbara';
      break;
       case 'beidou':
       case 'Beidou':
      Maximus = 'Beidou';
      break;
       case 'bennett':
       case 'Bennett':
      Maximus = 'Bennett';
      break;
       case 'candace':
       case 'Candace':
      Maximus = 'Candace';
      break;
       case 'clorinde':
       case 'clorin':
      Maximus = 'Clorinde';
      break;
       case 'charlotte':
       case 'Charlotte':
      Maximus = 'Charlotte';
      break;
       case 'chev':
       case 'chevreuse':
      Maximus = 'Chevreuse';
      break;
       case 'chiori':
      Maximus = 'Chiori';
      break;
       case 'chongyun':
       case 'Chongyun':
      Maximus = 'Chongyun';
      break;
       case 'collei':
       case 'Collei':
      Maximus = 'Collei';
      break;
       case 'cyno':
       case 'Cyno':
      Maximus = 'Cyno';
      break;
       case 'dehya':
       case 'Dehya':
      Maximus = 'Dehya';
      break;
       case 'Dendro':
       case 'dendro':
       case 'travelers dendro':
       case 'dendro travelers':
      Maximus = 'Dendro';
      break;
       case 'diluc':
       case 'Diluc':
      Maximus = 'Diluc';
      break;
       case 'diona':
      Maximus = 'Diona';
      break;
       case 'dori':
      Maximus = 'Dori';
      break;
       case 'electro':
       case 'travelers electro':
       case 'electro travelers':
      Maximus = 'Electro';
      break;
       case 'emilie':
       case 'Emilie':
      Maximus = 'Emilie';
      break;
       case 'eula':
      Maximus = 'Eula';
      break;
       case 'faruzan':
      Maximus = 'Faruzan';
      break;
       case 'fischl':
      Maximus = 'Fischl';
      break;
       case 'freminet':
      Maximus = 'Freminet';
      break;
       case 'furina':
      Maximus = 'Furina';
      break;
       case 'gaming':
      Maximus = 'Gaming';
      break;
       case 'ganyu':
      Maximus = 'Ganyu';
      break;
       case 'geo':
       case 'travelers geo':
       case 'geo travelers':
      Maximus = 'Geo';
      break;
       case 'gorou':
      Maximus = 'Gorou';
      break;
       case 'hutao':
      Maximus = 'Hu Tao';
      break;
       case 'hydro':
       case 'travelers hydro':
       case 'hydro travelers':
      Maximus = 'Hydro';
      break;
       case 'jean':
      Maximus = 'Jean';
      break;
       case 'kazuha':
      Maximus = 'Kaedehara Kazuha';
      break;
       case 'kaeya':
      Maximus = 'Kaeya';
      break;
       case 'ayaka':
       case 'kamisato ayaka':
       case 'kamisatoayaka':
      Maximus = 'Kamisato Ayaka';
      break;
       case 'ayato':
       case 'kamisato ayato':
       case 'kamisatoayato':
      Maximus = 'Kamisato Ayato';
      break;
       case 'kachina':
      Maximus = 'Kachina';
      break;
       case 'kaveh':
      Maximus = 'Kaveh';
      break;
       case 'keqing':
      Maximus = 'Keqing';
      break;
       case 'kirara':
      Maximus = 'Kirara';
      break;
       case 'kinich':
      Maximus = 'Kinich';
      break;
       case 'klee':
      Maximus = 'Klee';
      break;
       case 'sara':
       case 'kujousara':
       case 'kujou sara':
      Maximus = 'Kujou Sara';
      break;
       case 'kuki':
      Maximus = 'Kuki Shinobu';
      break;
       case 'layla':
      Maximus = 'Layla';
      break;
       case 'lisa':
      Maximus = 'Lisa';
      break;
       case 'lynette':
      Maximus = 'Lynette';
      break;
       case 'lyney':
      Maximus = 'Lyney';
      break;
       case 'mika':
      Maximus = 'Mika';
      break;
       case 'mualani':
      Maximus = 'Mualani';
      break;
       case 'mona':
      Maximus = 'Mona';
      break;
       case 'nahida':
      Maximus = 'Nahida';
      break;
       case 'Navia':
       case 'navia':
      Maximus = 'Navia';
      break;
       case 'noval':
       case 'Noval':
       case 'neuvillette':
      Maximus = 'Neuvillette';
      break;
       case 'nilou':
      Maximus = 'Nilou';
      break;
       case 'ningguang':
      Maximus = 'Ningguang';
      break;
       case 'noelle':
      Maximus = 'Noelle';
      break;
       case 'qiqi':
      Maximus = 'Qiqi';
      break;
       case 'baal':
       case 'ei':
       case 'raiden':
       case 'raiden shogun':
      Maximus = 'Raiden Shogun';
      break;
       case 'razor':
      Maximus = 'Razor';
      break;
       case 'rosaria':
      Maximus = 'Rosaria';
      break;
       case 'kokomi':
       case 'sangonomiya kokomi':
      Maximus = 'Sangonomiya Kokomi';
      break;
       case 'sayu':
      Maximus = 'Sayu';
      break;
       case 'shenhei':
      Maximus = 'Shenhei';
      break;
       case 'heizou':
      Maximus = 'Shikanoin Heizou';
      break;
       case 'sucrose':
      Maximus = 'Sucrose';
      break;
       case 'sethos':
      Maximus = 'Sethos';
      break;
       case 'sigewinne':
      Maximus = 'Sigewinne';
      break;
       case 'tartaglia':
       case 'childe':
      Maximus = 'Tartaglia';
      break;
       case 'thoma':
      Maximus = 'Thoma';
      break;
       case 'tighnari':
      Maximus = 'Tighnari';
      break;
       case 'venti':
      Maximus = 'Venti';
      break;
       case 'wanderer':
       case 'wawan':
      Maximus = 'Wanderer';
      break;
       case 'wriothesley':
       case 'duke':
      Maximus = 'Wriothesley';
      break;
       case 'xiangling':
      Maximus = 'Xiangling';
      break;
       case 'xianyun':
      Maximus = 'Xianyun';
      break;
       case 'xiao':
      Maximus = 'Xiao';
      break;
       case 'xingqiu':
      Maximus = 'Xingqiu';
      break;
       case 'xinyan':
      Maximus = 'Xinyan';
      break;
       case 'yaemiko':
       case 'yae':
       case 'yae miko':
      Maximus = 'Yae Miko';
      break;
       case 'yanfei':
      Maximus = 'Yanfei';
      break;
       case 'yaoyao':
      Maximus = 'Yaoyao';
      break;
       case 'yelan':
      Maximus = 'Yelan';
      break;
       case 'yoimiya':
      Maximus = 'Yoimiya';
      break;
       case 'yunjin':
       case 'yun jin':
      Maximus = 'Yun Jin';
      break;
       case 'zhongli':
       case 'morax':
       case 'scammer':
      Maximus = 'Zhongli';
      break;
      default:
      throw `*CHARACTERS* Tidak ada. Silahkan Tulis dengan Benar.

*-= LIST CHARACTERS =-*

albedo, alhaitham, aloy, amber, anemo, arataki itto, arlecchino, baizhu, barbara, beidou, bennett, candace, charlotte, chevreuse, chiori, chongyun, clorinde, collei, cyno, dehya, dendro, diluc, diona, dori, electro, emilie, eula, faruzan, fischl, freminet, furina, ganyu, gaming, geo, gorou, hydro, hu tao, jean, kaedehara kazuha, kaeya, kamisato ayaka, kamisato ayato, kachina, kaveh, keqing, kirara, kinich, klee, kujou sara, kuki shinobu, layla, lisa, lynette, lyney, mika, mualani, mona, nahida, navia, neuvillette, nilou, ningguang, noelle, qiqi, raiden shogun, sethos, sigewinne, razor, rosaria, sangonomiya kokomi, sayu, shenhe, shikanoin heizou, sucrose, tartaglia, thoma, tighnari, venti, wanderer, wriothesley, xiangling, xianyun, xiao, xingqiu, xinyan, yae miko, yanfei, yaoyao, yelan, yoimiya, yun jin, zhongli
`
}
  let data = await cari(Maximus)
  let capt = `_${data.description}_

${data.name}

*Title :* ${data.title}
*Element :* ${data.element}
*Weapon :* ${data.weapon}
*Substat :* ${data.substat}
*Rarity :* ${data.rarity}

*Gender :* ${data.gender}
*Birthday :* ${data.birthday}
*Constellation :* ${data.constellation}
*Region :* ${data.region}
*Characters Voice :*
    *Voice Korea :* ${data.characters_voice.korean}
    *Voice English :* ${data.characters_voice.english}
    *Voice Chinese :* ${data.characters_voice.chinese}
    *Voice Japanese :* ${data.characters_voice.japanese}
`

	conn.sendFile(m.chat, data.voice, 'kasar.mp3', null, m, true, {
                   type: 'audioMessage', 
                   ptt: true 
                            }
                   )
    await sleep(2000)
    conn.sendFile(m.chat, data.image, 'mmk.jpg', capt, m)
}
handler.help = ['gi <characters>'];
handler.tags = ['genshin'];
handler.command = /^(gisheet|gibuild|gi)$/i;
handler.limit = false;
handler.register = false;
handler.premium = false;

export default handler;

async function cari(text) {
	try {
		const database = await (await fetch('https://raw.githubusercontent.com/XM4ZE/DATABASE/master/genshin/maximus-gibuild.json')).json();
		const dataArray = Object.values(database);
		const result = dataArray.find(character => character.name === text);
		if (!result) throw 'Character not found';
		return result;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}


const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}