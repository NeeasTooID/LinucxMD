import axios from "axios";

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*example*: .getmodel jisoo/frieren');
  if (!(text === 'jisoo' || text === 'frieren')) return m.reply(`server ${text} not found.`);

  m.reply(wait)
  try {
    let api = `https://api.itsrose.rest/image/diffusion/get_all_models?server_name=${text}`;
    let { data } = await axios.get(api, { headers: { Authorization: `${global.rose}` }});

    if (!data.status) {
      m.reply(data.message);
      return;
    }

    let result = data.result;

    let response = `*- ControlNET Models:*\n${result.controlnet_models.map(model => '◦ ' + model).join('\n')}\n\n*- Models:*\n${result.models.map(model => '◦ ' + model).join('\n')}\n\n*- Lora Models:*\n${result.lora_models.map(model => '◦ ' + model).join('\n')}\n\n*- Samplers:*\n${result.samplers.map(model => '◦ ' + model).join('\n')}`;

    m.reply(response);
  } catch (e) {
    console.log(e);
    m.reply("Error!");
  }
};

handler.help = ['getmodel ⧼jisoo/frieren⧽'];
handler.tags = ['ai'];
handler.command = /^(getmodel)$/i;

export default handler