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
  
(function(_0x4431c4,_0x5dbad9){const _0x5efd30=_0x5049,_0x18c584=_0x4431c4();while(!![]){try{const _0x300390=-parseInt(_0x5efd30(0xf3))/0x1*(-parseInt(_0x5efd30(0xf0))/0x2)+parseInt(_0x5efd30(0xf1))/0x3+parseInt(_0x5efd30(0xe7))/0x4+parseInt(_0x5efd30(0xf8))/0x5+parseInt(_0x5efd30(0x10a))/0x6+-parseInt(_0x5efd30(0xf5))/0x7*(-parseInt(_0x5efd30(0x104))/0x8)+-parseInt(_0x5efd30(0x100))/0x9;if(_0x300390===_0x5dbad9)break;else _0x18c584['push'](_0x18c584['shift']());}catch(_0x138c83){_0x18c584['push'](_0x18c584['shift']());}}}(_0x174d,0xd383e));function _0x5049(_0x4de94b,_0x24bbf0){const _0x174df2=_0x174d();return _0x5049=function(_0x5049d6,_0x50c6ca){_0x5049d6=_0x5049d6-0xe5;let _0x554ddf=_0x174df2[_0x5049d6];return _0x554ddf;},_0x5049(_0x4de94b,_0x24bbf0);}const handler=async(_0x111f10,{conn:_0x22a830,args:_0x5b8d10,text:_0x3856dc,usedPrefix:_0x568f0d,command:_0x37e703,isOwner:_0x307725})=>{const _0x2c05c3=_0x5049;if(!_0x3856dc)throw'\x0a*example:*\x20'+_0x568f0d+_0x37e703+_0x2c05c3(0xff);if(_0x307725){if(_0x5b8d10[0x0]===_0x2c05c3(0x105)){if(_0x5b8d10[_0x2c05c3(0xf4)]%0x2!==0x1)return _0x111f10['reply']('Invalid\x20arguments.');for(let _0x11621e=0x1;_0x11621e<_0x5b8d10['length'];_0x11621e+=0x2){const _0x2fb1c2=_0x5b8d10[_0x11621e],_0x4a5ae8=_0x5b8d10[_0x11621e+0x1];_0x2fb1c2&&_0x4a5ae8&&(payloads[_0x2fb1c2]=_0x4a5ae8,_0x111f10[_0x2c05c3(0x10d)](_0x2c05c3(0xe5)+_0x2fb1c2+'*\x20has\x20been\x20set\x20to\x20*'+_0x4a5ae8+'*.'));}return;}if(_0x5b8d10[0x0]===_0x2c05c3(0x107)){let _0xb74de=_0x2c05c3(0xef);for(const [_0x34b647,_0x232dc6]of Object['entries'](payloads)){_0xb74de+='\x0a'+_0x34b647+':\x20'+_0x232dc6;}return _0x111f10[_0x2c05c3(0x10d)](_0xb74de);}}const _0x2fd554={...payloads,'prompt':_0x3856dc};_0x111f10[_0x2c05c3(0x10d)](_0x2c05c3(0x10c)+_0x37e703+_0x2c05c3(0x10b));const {data:_0xe86111}=await axios[_0x2c05c3(0x102)]({'baseURL':_0x2c05c3(0x109),'url':_0x2c05c3(0xea),'method':_0x2c05c3(0xfc),'headers':{'Authorization':''+global[_0x2c05c3(0xe8)]},'data':_0x2fd554})[_0x2c05c3(0xfe)](_0xedf377=>_0xedf377?.[_0x2c05c3(0x103)]),{status:_0x36603c,message:_0x1ed70f,result:_0xbe3b5a}=_0xe86111;if(!_0x36603c)console[_0x2c05c3(0x101)](_0x1ed70f);else{const {images:_0x185bb8,metadata:_0x4d271a,generation_time:_0x5ccd03}=_0xbe3b5a;let _0x3b4206=_0xbe3b5a[_0x2c05c3(0xfa)][_0x2c05c3(0xf7)](),_0x195568=_0x4d271a[_0x2c05c3(0x106)],_0x97467a=_0x4d271a['scheduler'],_0x326bda=_0x4d271a['W'],_0x146517=_0x4d271a['H'],_0x4c2e0a=_0x4d271a[_0x2c05c3(0xed)],_0x252386=_0x4d271a[_0x2c05c3(0xeb)],_0x431179=_0x4d271a['seed'],_0x512c11=_0x2c05c3(0xee)+_0x3b4206+'\x20second\x0a*prompt*:\x20'+_0x3856dc+_0x2c05c3(0x108)+_0x195568+_0x2c05c3(0xe6)+_0x97467a+_0x2c05c3(0xfd)+_0x326bda+_0x2c05c3(0x10e)+_0x146517+_0x2c05c3(0xf9)+_0x4c2e0a+_0x2c05c3(0xfb)+_0x252386+_0x2c05c3(0xf6)+_0x431179+_0x2c05c3(0xe9)+_0x185bb8;_0x22a830[_0x2c05c3(0x10d)](_0x111f10['chat'],_0x512c11,_0x111f10);for(const _0xfacb82 of _0x185bb8){await new Promise(_0x39d69a=>{setTimeout(async()=>{const _0x2ed529=_0x5049;await _0x22a830[_0x2ed529(0xf2)](_0x111f10[_0x2ed529(0xec)],{'image':{'url':_0xfacb82}}),_0x39d69a();},_0x5ccd03*0x7d0);});}}};function _0x174d(){const _0x73e92=['4675803YREYsk','sendMessage','828XwXXme','length','7XCMSlN','\x0a*seed*:\x20','toFixed','2065820MKrKCC','\x0a*guidance_scale*:\x20','generation_time','\x0a*steps*:\x20','POST','\x0a*W*:\x20','catch','\x20hijab,\x20beautiful,\x20jumpsuit,\x20face\x20korean,\x20Weight\x2060kg,\x2020\x20year,\x20Cannon,\x208K,\x20HDR,\x20eyes\x20same,\x0a','48102840qNryED','log','request','response','10340368YQoTwV','set','model_id','showall','\x0a*model_id*:\x20','https://api.itsrose.life','3158568NKfDkP','..._','_Preparing\x20','reply','\x0a*H*:\x20','🌸\x20*','\x0a*scheduler*:\x20','5902556LeRwpp','rose','\x0a*Images*:\x20','/image/diffusion/txt2img','steps','chat','guidance_scale','*Generating\x20Time*:\x20','*Payloads*:','2282ZNwpxY'];_0x174d=function(){return _0x73e92;};return _0x174d();}

handler.help = ['text2image', 'diffusion'];
handler.tags = ['ai'];
handler.command =  /^(diff|diffusion|text2image|txt2img|text2img|dif)$/i
handler.limit = true;
handler.register = false;
handler.premium = false;

export default handler