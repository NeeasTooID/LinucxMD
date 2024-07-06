import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw ` *Example:* 
*${usedPrefix}${command} karakter linkmusicyt

donald_trump
eric_cartman
plankton
spongebob
squidward
adele
among_us
amr_diab
amy_winehouse
andrew_tate
angry_cat
antimage_dota
ariana_grande
assala_nasri
aw_aw_cat
bad_bunny
bang_chan
barbie_margot
barry_white
bart_simpson_en
bart_simpson_spa
batman_christian_bale
batman_kevin_conroy
beyonce
bill_clinton
billie_eilish
bill_kaulitz
bjork
bob_marley
brazilian_lord_x
britney_spears
bruno_mars
butters_stotch
captain_america
car_burnout
cardi_b
car_horn
central_cee
chainsaw
chapolin_colorado
chicken
chorao
chris_evans
cogumelando
counter_strike_radio
cristiano_ronaldo
crying_baby
darth_vader
darwin_watterson_tr
diego
dinho
doc_hudson
doctor_strange
doja_cat
dolores_umbridge
donald_duck
dota_crystal_maiden
dota_puck
dota_rubick
dota_shadow_fiend
dota_slardar
dota_sniper
dota_sven
drake
dwight_eisenhower
eazy_e
ed_sheeran
elissa
ella_fitzgerald
elon_musk
elsa
elton_john
elvis_presley
eminem
eren_yeager
erkin_koray
ezreal_lol
franklin_roosevelt
frank_sinatra
freddie_mercury
fredo
gabriel_diniz
garen_lol
giveon
goku_dragonball
gollum
goofy
gumball_en
gumball_spa
haerin
hailey_bieber
half_life_2_zombie
han_jisung
harry_styles
heesung_hypen
homer_simpson
hugh_jackman
hulk
hulk_hogan
hwang_hyunjin
iggy_azalea
invoker_dota
iron_man
iron_man_brazil
itachi_uchiha
iu_idol
jake_enhypen
james_hetfield
janet_jackson
jay_enhypen
jennie_idol
jeongin
jeon_somi
jerry_seinfeld
jesse_pinkman
jhope_idol
jimin_idol
jimmy_fallon
jin_idol
jisoo_idol
joe_rogan
john_cena
joker
jonny_bravo
juice_wrld
jungkook
justin_bieber
kanye_west
katsuki_bakugo
kemal_sunal
kendall_roy
kendric_lamar
kenny_mccormick
kim_chaewon
kim_namjoon
kim_seungmin
kratos
kufurbaz_haydo
kurt_cobain
kyle_south_park
lady_gaga
lana_del_rey
lee_felix
lee_know
leno_brega
lightsaber
liltay
lisa_idol
lissandra_lol
lizzo
lois_griffin
luciano_pavarotti
lucoa
luke_skywalker
madison_beer
madonna
manoel_gomes
marceline
marge_simpson
margot_robbie
marilia_mendonca
markiplier
martin_luther_king_jr
mauro_icardi
meg_griffin
melanie_martinez
messi
michael_jackson
michael_scott
mickey_mouse
miley_cyrus
minecraft_door
minecraft_footsteps
minecraft_pig
minecraft_villager
minions
mohammed_abdu
morgan_freeman
morty_smith
morty_smith_brazil
mr_beast
mr_krabs
muslum_gurses
nami_one_piece
nancy_ajram
naruto_uzumaki
nick_fury
nicki_minaj
nico_robin
niki_enhypen
obama
olivia_rodrigo
one_piece_luffy
one_piece_sanji
perfect_cell
peter_griffin
phoebe_buffay
pikachu
pinkydoll
pop_smoke
pudge_dota
raiden_shogun
raluca_granola
randy_marsh
rashed_almaged
richard_nixon
rick_sanchez
ricky_gervais
rihanna
roronoa_zoro
rose_idol
roxanne_wolf
rubber_chicken
rupaul
ryan_gosling
sasuke_uchiha
scary_little_girl
selena_gomez
seo_changbin
shaco_lol
shakira
sherine
shrek
shrek_donkey
sia
sid
snoop_dogg
spider_man_tobey_maguire
stewie_griffin
suga_idol
sunghoon_enhypen
sunoo_enhypen
super_mario
super_mario_toad
super_xandao
sza
taylor_swift
ted_kaczynski
the_kid_laroi
the_notorious_big
theodore_roosevelt
thomas_shelby
thor
tom_waits
tony_soprano
toothbrush
tow_mater
travis_scott
tuncel_kurtiz
tupac_shakur
twentyone_savage
venom
voldemort
walter_white
warwick_lol
washing_machine
weeknd
whitney_houston
winnie_the_pooh
winston_churchill
xxxtentacion
yae_miko
yungblud
yungwon_enhypen
zeki_muren
` 

  let [ style, linkyt ] = text.split('|');

  const payload = {
    youtube_url: `${linkyt}`,
    voice_id: `${style}`,
    watermark: false,
  };

  const { data } = await axios.post("https://api.itsrose.rest/sovits/inference_voice", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    console.log(message); 
  } else {
    const { audio, generation_time } = result;
    
m.reply(wait)
      await new Promise((resolve) => {
        setTimeout(async () => {
          //await conn.sendMessage(m.chat, { video: { url: video } });
          await conn.sendMessage(m.chat, {
                audio: {
                    url: audio
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: "Inference Voice",
                        body: "Artificial Intelligence",
                        thumbnailUrl: "https://telegra.ph/file/68fba5f9d5e3de0196a28.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: false,
                        renderLargerThumbnail: true
                    }
                }
            });
          resolve();
        }, generation_time * 1000);
      })
   }
};

handler.help = ['ai_voice <karakter|link yt>'];
handler.tags = ['ai'];
handler.command = /^(ai_voice)$/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler