import fetch from 'node-fetch';
import axios from 'axios';

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw ` ${usedPrefix}${command} Prompt`
  m.reply(`_Preparing Waifudiffusion..._`)
  const payload = {
    server_name: "jisoo",
    prompt: `${text}`,
    negative_prompt: "wm, watermark, missing fingers,missing arms,missing legs,extra digit, extra arms, extra leg, extra foot, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy,(fat:1.2),facing away, looking away,tilted head, lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,missing legs,extra digit, extra arms, extra leg, extra foot,",
    width: 512,
    height: 768,
    steps: 30,
    model_id: "mistoonanime",
    sampler: "UniPC",
    cfg: 3,
    seed: null,
    enhance_prompt: "yes",
    multi_lingual: "no",
    image_num: 1,  
    panorama: "no",
    safety_checker: "no",
    safety_checker_type: "blur",
    lora_model: "more_details",
    lora_strength: 0.5,
    clip_skip: 2,
    embeddings_model: "",
    webhook: null,
  };

  const { data } = await axios.post("https://api.itsrose.life/image/diffusion/txt2img", payload, {
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
    let w = metadata.W;
    let h = metadata.H;
    let cfg = metadata.guidance_scale;
    let step = metadata.steps;
    let seed = metadata.seed;
    
    let medata = `*Generating Time*: ${second} second
*prompt*: ${text}
*model_id*: ${model}
*scheduler*: ${schedule}
*W*: ${w}
*H*: ${h}
*guidance_scale*: ${cfg}
*steps*: ${step}
*seed*: ${seed}`
 
    for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 1000);
      });
    }
    m.reply(medata);
  }
};

handler.help = ['waifudiff <prompt>'];
handler.tags = ['ai'];
handler.command = /^waifu(diff|diffusion|dif)$/i;
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler;