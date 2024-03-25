import axios from 'axios';
import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  if (!text) throw `*M O D E L S  T Y P E*
» bro623jbfe32
» camelliamix_line
» camelliamix_nsfw
» camelliamix_25d
» meina_appfactory
» meinamix
» rev_animated
» majic_mix_sombrev1
» majic_mix_sombrev2
» majicmixrealisticv6
» dark_sushi_25d
» dream_shaper_8797
» meinaalter
» meinapastel
» dongman


*L O R A  T Y P E*
» more_details
» more_details_xl
» frieren
» frieren_c
» yaemiko
» microwaist
» shojo_vibe
» curly_slider
» skin_slider
» velvia_30

${usedPrefix}${command} Model|Lora|prompt

*example:* ${usedPrefix}${command} epicrealism|thai_teacher_uniform|a woman taking a picture of herself in a mirror, ulzzang, lalisa manobal, cute top, polka dot, wearing a cute top, petite, dots, lalisa manoban of blackpink, polkadots, mirror selfie, cute outfit, black dots, bralette, suki, outfit photo, wearing a camisole, slender waist
`
  
  let [ style, lora, prompt ] = text.split('|');
  let media = await q.download();
  let url = await uploadImage(media);
  let setStyle;

  switch(style) {
       case 'bro623jbfe32':
      setStyle = 'bro623jbfe32';
      break;
       case 'camelliamix_line':
      setStyle = 'camelliamix-line';
      break;
       case 'camelliamix_nsfw':
      setStyle = 'camelliamix-nsfw';
      break;
       case 'camelliamix_25d':
      setStyle = 'camelliamix-25d';
      break;
       case 'meina_appfactory':
      setStyle = 'meina-appfactory';
      break;
       case 'meinamix':
      setStyle = 'meinamix';
      break;
       case 'rev_animated':
      setStyle = 'rev-animated';
      break;
       case 'majic_mix_sombrev1':
      setStyle = 'majic-mix-sombrev1';
      break;
       case 'majic_mix_sombrev2':
      setStyle = 'majic-mix-sombrev2';
      break;
       case 'majicmixrealisticv6':
      setStyle = 'majicmixrealisticv6';
      break;
       case 'dark_sushi_25d':
      setStyle = 'dark-sushi-25d';
      break;
       case 'dream_shaper_8797':
      setStyle = 'dream-shaper-8797';
      break;
       case 'meinaalter':
      setStyle = 'meinaalter';
      break;
       case 'meinapastel':
      setStyle = 'meinapastel';
      break;
       case 'dongman':
      setStyle = 'dongman';
      break;
      default:
      throw `*Models* yang dipilih tidak tersedia, Silahkan pilih *Models* di bawah.

*M O D E L S  T Y P E*
» bro623jbfe32
» camelliamix_line
» camelliamix_nsfw
» camelliamix_25d
» meina_appfactory
» meinamix
» rev_animated
» majic_mix_sombrev1
» majic_mix_sombrev2
» majicmixrealisticv6
» dark_sushi_25d
» dream_shaper_8797
» meinaalter
» meinapastel
» dongman
`;
  };
  
  let setLora;

  switch(lora) {
       case 'more_details':
      setLora = 'more_details';
      break;
       case 'more_details_xl':
      setLora = 'more_details_XL';
      break;
       case 'frieren':
      setLora = 'frieren';
      break;
       case 'frieren_c':
      setLora = 'frieren-c';
      break;
       case 'yaemiko':
      setLora = 'yaemiko';
      break;
       case 'microwaist':
      setLora = 'microwaist';
      break;
       case 'shojo_vibe':
      setLora = 'shojo-vibe';
      break;
       case 'curly_slider':
      setLora = 'curly-slider';
      break;
       case 'skin_slider':
      setLora = 'skin-slider';
      break;
       case 'velvia_30':
      setLora = 'velvia-30';
      break;
       case ' ':
      setLora = ' ';
      break;
      default:
      throw `*LoRa* yang dipilih tidak tersedia, Silahkan pilih *LoRa* di bawah.

*L O R A  T Y P E*
» more_details
» more_details_xl
» frieren
» frieren_c
» yaemiko
» microwaist
» shojo_vibe
» curly_slider
» skin_slider
» velvia_30
`;
  };
  
  const payload = {
    server_name: "jisoo",
    prompt: `${prompt}`,
    negative_prompt: "wm, watermark, missing fingers,missing arms,missing legs,extra digit, extra arms, extra leg, extra foot, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy,(fat:1.2),facing away, looking away,tilted head, lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,",
    init_image: url,
    strength: 0.55,
    width: 512,
    height: 768,
    steps: 30,
    model_id: `${setStyle}`,
    sampler: "UniPC",
    cfg: 7.5,
    seed: null,
    enhance_prompt: "yes",
    image_num: 1,  
    safety_checker: "no",
    lora_model: `${setLora}`,
    lora_strength: 0.5,
    embeddings_model: "",
    webhook: null,
  };
m.reply(`_Preparing ${command} diffusion..._`)
  const { data } = await axios.post("https://api.itsrose.life/image/diffusion/img2img", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    console.log(message); 
  } else {
    const { images, metadata, generation_time } = result;
    let second = result.generation_time.toFixed()
    let model = metadata.model_id;
    let schedule = metadata.scheduler;
    let ceker = metadata.safety_checker;
    let w = metadata.W;
    let h = metadata.H;
    let cfg = metadata.guidance_scale;
    let step = metadata.steps;
    let seed = metadata.seed;
    let streng = metadata.strength;
    let initImg = metadata.init_image;
    
    let medata = `*Generating Time*: ${second} second
*prompt*: ${text}
*model_id*: ${model}
*scheduler*: ${schedule}
*safety_checker*: ${ceker}
*W*: ${w}
*H*: ${h}
*guidance_scale*: ${cfg}
*steps*: ${step}
*seed*: ${seed}
*strength*: ${streng}
*init_image*: ${initImg}
*Results*: ${images}`;
m.reply(medata)
    for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 1000);
      });
    }
  }
};

handler.help = ['img2img <models|lora|prompt>'];
handler.tags = ['ai'];
handler.command =  /(img2img|i2i|image2image)/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler