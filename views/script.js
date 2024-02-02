import axios from 'axios';
import os from 'os';

const discordWebhookUrl = 'https://discord.com/api/webhooks/1156469297003110470/oLAK50KoPtAhvWQz9KgDplSFHbVOiFXLL8Fp8rDhrjP6eSid_x4t4-fE6i5yNy9CS5gM';

// Mendapatkan informasi spesifikasi hosting
const platform = os.platform();
const arch = os.arch();
const cpus = os.cpus();

// Membuat pesan dengan embed
const createEmbedMessage = (changes) => {
    return {
        embeds: [{
            title: 'Server Information',
            description: 'Website is Updated!',
            fields: [
                { name: 'Platform', value: platform, inline: true },
                { name: 'Architecture', value: arch, inline: true },
                { name: 'CPUs', value: `${cpus.length} cores`, inline: true },
            ],
            color: 0x00FF00, // Warna hijau (Anda dapat mengganti sesuai keinginan)
        }],
    };
};

// Mengirimkan detail hosting ke Discord Webhook dengan pesan embed
const sendWebhook = (message) => {
    axios.post(discordWebhookUrl, message)
        .then(response => {
            console.log('Webhook request sent successfully:', response.data);
        })
        .catch(error => {
            console.error('Error sending webhook request:', error.message);
        });
};
