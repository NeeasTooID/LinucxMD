import axios from 'axios';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, text }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  
  if (!mime.startsWith('image/')) {
    throw 'Reply to an image with a caption, *Example*: .controlnet without clothes';
  }
  m.reply(wait)
  const media = await q.download();
  const imageUrl = await uploadImage(media);

  const payload = {
    server_name: "jisoo",
    prompt: text || "",
    width: 512,
    height: 768,
    steps: 25,
    model_id: "dream-shaper-8797",
    sampler: "UniPC",
    init_image: imageUrl,
    control_image: "",
    mask_image: "",
    controlnet_model: "tile",
    controlnet_type: "tile",
    controlnet_conditioning_scale: 1,
    guess_mode: "no",
    auto_hint: "no",
    safety_checker: "no",
    cfg: 7.5,
    seed: null,
    enhance_prompt: "no",
    image_num: 1,
    lora_model: "",
    lora_strength: 1,
    negative_prompt: "missing fingers,missing arms,missing legs,extra digit, extra arms, extra leg, extra foot, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy,(fat:1.2),facing away, looking away,tilted head, lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,error,",
    webhook: ""
  };

  const { data } = await axios.post("https://api.itsrose.rest/image/diffusion/controlNet", payload, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    console.log(message); 
  } else {
    const { images, _meta, generation_time } = result;
    let second = result.generation_time.toFixed()
    let prompt = _meta.prompt;
    let model_id = _meta.model_id;
    let controlnet_model = _meta.controlnet_model;
    let controlnet_type = _meta.controlnet_type;
    let w = _meta.W;
    let h = _meta.H;
    let seed = _meta.seed;
    let initImg = _meta.init_image;
    let metadata = `*Generating Time*: ${second} second
*prompt*: ${prompt}
*model_id*: ${model_id}
*Controlnet Model*: ${controlnet_model}
*Controlnet Type*: ${controlnet_type}
*W*: ${w}
*H*: ${h}
*seed*: ${seed}
*init_image*: ${initImg}
*Results*: ${images}`;
conn.reply(m.chat, metadata, m)

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

handler.help = ['controlnet'];
handler.tags = ['ai'];
handler.command = /^(controlnet)$/i;
handler.limit = true

export default handler;