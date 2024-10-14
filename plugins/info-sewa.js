import { getDevice } from '@adiwajshing/baileys'

let handler = async(m, { conn, text, usedPrefix, command}) => {
    let xm4ze = await( await fetch(xmenus)).json()
    let thum = xm4ze[Math.floor(Math.random() * xm4ze.length)]
    let pesan = `\n> *1.* Permanent Day join the group\n> *2.* 7 Day Premium\n> *3.* 30 Day Premium\n\nSilahkan pilih produk kami dengan mengeklik tombol dibawah ini`
    const sections = [
				[
					'— LINUCXMD JOIN GROUP', [
						['Harga: Rp. 5.000 IDR', '.sewa S7', '7 Day join the group'],
						['Harga: Rp. 15.000 IDR', '.sewa S30', '30 Day join the group'],
						['Harga: Rp. 30.000 IDR', '.sewa SPR', 'Permanent Day join the group']
				]], [
					'— PREMIUM USER', [
						['Harga: Rp. 10.000 IDR', '.sewa P7', '7 Day Premium'],
						['Harga: Rp. 20.000 IDR', '.sewa P30', '30 Day Premium'],
				]],
			]
    if (!/all/.test(command) && await getDevice(m.key.id) == 'android') {
    if (!text) return conn.sendButtonList(m.chat, `— TOP 3 SELLING PRODUCTS`, pesan, global.wm, 'PRICE LIST', thum, sections, m)
    }
    let orderID;

  switch(text) {
      case 'S7':
      orderID = '5.000 IDR';
      break;
      case 'S30':
      orderID = '10.000 IDR';
      break;
      case 'SPR':
      orderID = '15.000 IDR';
      break;
      case 'P7':
      orderID = '15.000 IDR';
      break;
      case 'P30':
      orderID = '30.000 IDR';
      break;
      default:
      throw `*ID Pesanan* yang dipilih tidak tersedia, Silahkan pilih *ID Pesanan* di bawah ini.
      
*— LINUCXMD JOIN GROUP*

*7 Day join the group*
- Harga: Rp. 5.000 IDR
- ID Pesanan: S7

*30 Day join the group*
- Harga: Rp. 15.000 IDR
- ID Pesanan: S30

*Permanent Day join the group*
- Harga: Rp. 30.000 IDR
- ID Pesanan: SPR


*— PREMIUM USER*

*7 Day premium*
- Harga: Rp. 10.000 IDR
- ID Pesanan: P7

*30 Day premium*
- Harga: Rp. 30.000 IDR
- ID Pesanan: P30


*Example:* ${usedPrefix + command} <ID Pesanan>
*Example:* ${usedPrefix + command} 30day
`;
  };
    let maximus = `*LinucxMD Payment Confim!*\n\n*• Status:* _🟡 Pending_\n*• ID Pembelian:* ${text}\n*• Nominal:* ${orderID}\n*• Payment:* QRIS\n\n\n*TAHAP-TAHAP Pembayaran*\n*1.* Silahkan SCAN QRIS ini dengan M-Banking/E-Wallet kamu\n*2.* Masukan Nominal: ${orderID}\n*3.* Silahkan Kirim bukti pembayaran ke nomor ini wa.me/${global.info.nomorown}\n\n Mohon Di Sarankan Untuk Menghubungi Owner Langsung, Kerna Qris Di Atas Bisa Saja Expired !!!`
    conn.sendFile(m.sender, global.qris, 'maxim.jpg', maximus, m)
    conn.reply(m.chat, '✔️ *PESANANMU TELAH DI BUAT*\n\nSaya telah mengirim pembayarannya melalu private chat silahkan di baca dan ikuti tahap-tahap pembayaran. Terimakasih', m)
    conn.reply(global.info.nomorown + '@s.whatsapp.net', `@${m.sender.split('@')[0]} Sedang dalam pembayaran nominal ${orderID}`, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.help = ['sewa', 'order']
handler.tags = ['info']
handler.command =  /(order|sewa)/i
handler.register = false;
handler.premium = false;

export default handler