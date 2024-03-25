let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `*— LINUCXMD JOIN GROUP*\n\n*7 Day join the group*\n- Harga: Rp. 7.000 IDR\n- ID Pesanan: G7\n\n*30 Day join the group*\n- Harga: Rp. 15.000 IDR\n- ID Pesanan: G30\n\n*60 Day join the group*\n- Harga: Rp. 30.000 IDR\n- ID Pesanan: G60\n\n\n*— PREMIUM USER*\n\n*3 Day premium*\n- Harga: Rp. 5.000 IDR\n- ID Pesanan: 3day\n\n*7 Day premium*\n- Harga: Rp. 10.000 IDR\n- ID Pesanan: 7day\n\n*30 Day premium*\n- Harga: Rp. 15.000 IDR\n- ID Pesanan: 30day\n\n*60 Day premium*\n- Harga: Rp. 30.000 IDR\n- ID Pesanan: 60day\n\n\n*Example:* ${usedPrefix + command} <ID Pembayaran>\n*Example:* ${usedPrefix + command} 30day`, m)
    let orderID;

  switch(text) {
      case '3day':
      orderID = '5.000 IDR';
      break;
      case '7day':
      orderID = '10.000 IDR';
      break;
      case '30day':
      orderID = '15.000 IDR';
      break;
      case '60day':
      orderID = '30.000 IDR';
      break;
      case 'G7':
      orderID = '7.000 IDR';
      break;
      case 'G30':
      orderID = '15.000 IDR';
      break;
      case 'G60':
      orderID = '30.000 IDR';
      break;
      default:
      throw `*ID Pesanan* yang dipilih tidak tersedia, Silahkan pilih *ID Pesanan* di bawah ini.
      
*— LINUCXMD JOIN GROUP*

*7 Day join the group*
- Harga: Rp. 7.000 IDR
- ID Pesanan: G7

*30 Day join the group*
- Harga: Rp. 15.000 IDR
- ID Pesanan: G30

*60 Day join the group*
- Harga: Rp. 30.000 IDR
- ID Pesanan: G60


*— PREMIUM USER*

*3 Day premium*
- Harga: Rp. 5.000 IDR
- ID Pesanan: 3day

*7 Day premium*
- Harga: Rp. 10.000 IDR
- ID Pesanan: 7day

*30 Day premium*
- Harga: Rp. 15.000 IDR
- ID Pesanan: 30day

*60 Day premium*
- Harga: Rp. 30.000 IDR
- ID Pesanan: 60day
`;
  };
    let maximus = `*O R D E R*\n\n*• Status:* _🟡 Pending_\n*• ID Pembelian:* ${text}\n*• Nominal:* ${orderID}\n*• Payment:* QRIS\n\n\n*TAHAP-TAHAP Pembayaran*\n*1.* Silahkan SCAN QRIS ini dengan M-Banking/E-Wallet kamu\n*2.* Masukan Nominal: ${orderID}\n*3.* Silahkan Kirim bukti pembayaran ke nomor ini wa.me/${global.info.nomorown}`
    conn.sendFile(m.sender, global.qris, 'maxim.jpg', maximus, m)
    conn.reply(m.chat, '✔️ *PESANANMU TELAH DI BUAT*\n\nSaya telah mengirim pembayarannya melalu private chat silahkan di baca dan ikuti tahap-tahap pembayaran. Terimakasih', m)
    conn.reply(global.info.nomorown + '@s.whatsapp.net', `@${m.sender.split('@')[0]} Sedang dalam pembayaran nominal ${orderID}`, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.help = ['order', 'sewa'];
handler.tags = ['info'];
handler.command =  /(order|sewa|premium)/i
handler.register = false;
handler.premium = false;

export default handler