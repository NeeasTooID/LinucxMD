import fetch from "node-fetch";
import crypto from "crypto";
import { sizeFormatter } from "human-readable";

const format = sizeFormatter()

let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
    
    // Panel pengelolaan
    const domain = "https://lpanel.zanixon.xyz" // Domain
    const apikey = "ptla_SEZOQ07k6Ft4DYy6bBbKtzV3UlnPCaUcyqlzDvIdyge" // Kunci API
    const c_apikey = "ptlc_qR7BHjErWAfN7I1kZmhzCvdIWkPqxPqkBRTFl0wYxpw" // Kunci API c
    const webPage = "https://lpanel.zanixon.xyz" // Halaman web
    
    switch (command) {
        case "addusr": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 1) return m.reply(`
> Perintah :\n${_p + command} nomor/tag`);
            let u = m.quoted ? m.quoted.sender : t[0] ? t[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomorown + "@s.whatsapp.net";

            if (!u) return m.reply(`*Format salah!*\n> Perintah : ${_p + command} nomer/tag`);
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = d.exists ? crypto.randomBytes(3).toString("hex") : t[3]

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": "freeuser" + profil.toString() + "@gmail.com", // Email
                    "username": "userfree" + profil.toString(), // Username
                    "first_name": "spaanu" + profil.toString(), // Nama Depan
                    "last_name": "ksnjut", // Nama Belakang
                    "language": "en", // Bahasa
                    "password": "usersfree1" + password.toString() // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes

            let p = await conn.reply(m.chat, `
*===[ Sukses Membuat Akun ]===*

Id: ${user.id}
Username: ${user.username}
Detail Dikirim Ke : @${u.split`@`[0]}`, m, { mentions: [u] })
           
            await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Akun Punya : @${u.split`@`[0]} 
Id: ${user.id}

Email: ${user.email}
Username: ${user.username}
Password: usersfree1${password}
Dibuat: ${user.created_at}
Host: *https://lpanel.zanixon.xyz*
`,})

            conn.sendMessage(u, {
                text: `*===[ Peringatan ]===*\n
Gunakan Dengan Sebaik Mungkin, Simpan Informasi Akun Karna Jika Hilang Maka Bukan Tanggung Jawab Kami!

- Dilarang Menjual Kembali
- Dilarang Menyebarkan Akun
- Dilarang Menggunakan Berlebihan
- Jika Terjadi Error Segera Lapor

- Garansi Hangus Ketika Keluar Dari Group Lpanel
- Owner : 083897390164`,})
        }
        break
        
case "addsrv": {
    if (!isROwner) return global.dfail("rowner", m, conn);
    let s = text.split(",");
    if (s.length < 2) return m.reply(`> Perintah :\n${_p + command} name,userId`);
    let name = s[0];
    let userId = s[1];

    let f1 = await fetch(domain + "/api/application/nests/6/eggs/38", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });
    let data = await f1.json();
    let startup_cmd = "${CMD_RUN}";

    let f = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        "body": JSON.stringify({
            "name": name,
            "description": "FreeUser", // Deskripsi sementara
            "user": userId,
            "egg": 38,
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "node index.js"
            },
            "limits": {
                "memory": 0,
                "swap": -1,
                "disk": 0,
                "io": 500,
                "cpu": 25
            },
            "feature_limits": {
                "databases": 0,
                "backups": 1,
                "allocations": 0
            },
            deploy: {
                locations: [2], // Ganti 1 dengan ID lokasi yang diinginkan
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f.json();
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;
    m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`);
}
break;

case "listsrv": {
    if (!isROwner) return global.dfail("rowner", m, conn);
    let f = await fetch(domain + "/api/application/servers", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        }
    });
    let res = await f.json();
    if (res.errors) return m.reply("Tidak dapat mengambil daftar server.");
    let servers = res.data;
    if (servers.length === 0) return m.reply("Tidak ada server yang tersedia.");

    let serverList = servers.map(server => {
        return `ID: ${server.attributes.id}
Name: ${server.attributes.name}
Description: ${server.attributes.description}
Memory: ${format(server.attributes.limits.memory)}
Disk: ${format(server.attributes.limits.disk)}
CPU: ${server.attributes.limits.cpu}%
Created At: ${server.attributes.created_at}
Expired: 1 Bulan\n`;
    }).join("\n");

    m.reply(`*Daftar Server:*\n${serverList}`);
}
break;

case "delsrv": {
    if (!isROwner) return global.dfail("rowner", m, conn)
    let srv = args[0]
    if (!srv) return m.reply("ID nya mana?")
    let f = await fetch(domain + "/api/application/servers/" + srv, {
        "method": "DELETE",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        }
    })
    let res = f.ok ? { errors: null } : await f.json()
    if (res.errors) return m.reply("*Server Tidak Ditemukan*")
    m.reply("*Sukses Menghapus Server*")
}
break;
        
        default: {
            // Tanggapan untuk perintah tidak dikenali
            m.reply(`Perintah tidak dikenali. Gunakan ${_p}help untuk melihat daftar perintah.`);
        }
    }
}

handler.help = ["addusr", "delusr", "listusr", "addsrv", "delsrv", "listsrv"];
handler.command = ["addusr", "delusr", "listusr", "addsrv", "delsrv", "listsrv"];
handler.tags = ["panel"]

export default handler
