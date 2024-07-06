import axios from 'axios';
import fetch from 'node-fetch';
const payloads = {
    server_name: "jisoo",
    prompt: "",
    negative_prompt: "missing fingers,missing arms,missing legs,extra digit, extra arms, extra leg, extra foot, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy,(fat:1.2),facing away, looking away,tilted head, lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,",
    width: 512,
    height: 768,
    steps: 25,
    model_id: "majicmixrealisticv6",
    sampler: "UniPC",
    cfg: 7,
    seed: null,
    enhance_prompt: "no",
    multi_lingual: "no",
    image_num: 1,  
    panorama: "no",
    safety_checker: "no",
    safety_checker_type: "blur",
    lora_model: "more_details_XL",
    lora_strength: 1,
    clip_skip: 2,
    embeddings_model: "",
    webhook: null,
  };
  
const handler = async (m, { conn, args, text, usedPrefix, command, isOwner }) => {
  if (!text) throw `
*example:* ${usedPrefix}${command} hijab, beautiful, jumpsuit, face korean, Weight 60kg, 20 year, Cannon, 8K, HDR, eyes same,
`  
  
  if (isOwner) {
  if (args[0] === 'set') {
    if (args.length % 2 !== 1) {
      return m.reply('Invalid arguments.');
    }

    for (let i = 1; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      if (key && value) {
        payloads[key] = value;
        m.reply(`🌸 *${key}* has been set to *${value}*.`);
      }
    }
    return;
  }

  if (args[0] === 'payload') {
    let payloadInfo = '*Payloads*:';
    for (const [key, value] of Object.entries(payloads)) {
      payloadInfo += `\n${key}: ${value}`;
    }
    return m.reply(payloadInfo);
  }
}
  const updatedPayloads = { ...payloads, prompt: text };
  
  const { key } = await conn.sendMessage(m.chat, { text: `_Preparing ${command}..._`})
  
  const { data } = await axios.request({
    baseURL: "https://api.itsrose.rest",
    url: "/image/diffusion/txt2img",
    method: "POST",
    headers: { 
        Authorization: `${global.rose}` 
    },
    data: updatedPayloads,
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
*seed*: ${seed}
*Images*: ${images}`
await conn.sendMessage(m.chat, {text: medata, edit: key })
    for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 2000);
      });
    }
  }
};

handler.help = ['text2image', 'diffusion'];
handler.tags = ['ai'];
handler.command =  /^(diff|diffusion|text2image|txt2img|text2img|dif)$/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler