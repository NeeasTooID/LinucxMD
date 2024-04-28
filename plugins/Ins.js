// INS CREATED
let infixity = async (m, { conn, text }) => {
  const floc = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "status@broadcast" } : {})
    }
  };

  try {
    const kentodins = m.text.split(' ').slice(1).join(' '); 
    if (kentodins) { 
      const response = await fetch(`https://linucxapi.zanixon.xyz/api/ai/insweb?q=${encodeURIComponent(kentodins)}`);
      console.log('Response:', response); // Debugging: meneliti respons dari fetch nya ok

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data); // Debugging: meneliti data yg diterima dari API yg

      const message = data.result;
      if (message) {
        m.reply(message);
      } else {
        console.error("No message found in API response");
        m.reply("Maaf, tidak ada pesan yang ditemukan.");
      }
    } else {
      console.error("No text received");
      m.reply("Maaf, tidak ada teks yang diterima.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    m.reply("Maaf, terjadi kesalahan saat mengambil data.");
  }
};

infixity.customPrefix = /^(botai|mybotai)/i;
infixity.command = new RegExp();
infixity.exp = 200;
export default infixity;