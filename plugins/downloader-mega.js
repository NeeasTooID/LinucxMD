import { File } from "megajs"

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`Contoh:\n${usedPrefix + command} https://mega.nz/file/0FUA2bzb#vSu3Ud9Ft_HDz6zPvfIg_y62vE1qF8EmoYT3kY16zxo`);
        
        const file = File.fromURL(text);
        await file.loadAttributes();
        
        if (file.size >= 2000000000) return m.reply('Error: ukuran file terlalu besar (Ukuran Max: 2GB)');
        
        // Notifikasi menunggu sebelum proses unduhan dimulai
        m.reply(`*_Mohon tunggu beberapa menit..._* \n${file.name} sedang diunduh, harap sabar.`);
        
        let progressMessage = await m.reply(`_*Unduhan sedang dimulai... Harap tunggu.*_`);
        
        const data = await file.downloadBuffer({
            // Event listener untuk memantau progress download
            onProgress: (bytesDownloaded, bytesTotal) => {
                const percent = ((bytesDownloaded / bytesTotal) * 100).toFixed(2);
                conn.sendMessage(m.chat, `Progress unduhan: ${percent}%`, { quoted: progressMessage });
            }
        });
        
        m.reply(`✅ *_Unduhan selesai! File sedang dikirim..._*`);

        // Menambahkan dukungan untuk berbagai ekstensi file
        if (/mp4/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "video/mp4", fileName: `${file.name}` }, { quoted: m });
        } else if (/pdf/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/pdf", fileName: `${file.name}` }, { quoted: m });
        } else if (/zip/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/zip", fileName: `${file.name}` }, { quoted: m });
        } else if (/rar/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/x-rar-compressed", fileName: `${file.name}` }, { quoted: m });
        } else if (/7z/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/x-7z-compressed", fileName: `${file.name}` }, { quoted: m });
        } else if (/jpg|jpeg/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "image/jpeg", fileName: `${file.name}` }, { quoted: m });
        } else if (/png/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "image/png", fileName: `${file.name}` }, { quoted: m });
        } else {
            return m.reply('Error: Format file tidak didukung');
        }

    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(mega)$/i
handler.limit = 100
handler.register = true

export default handler