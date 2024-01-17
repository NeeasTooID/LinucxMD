const axios = require('axios');
const os = require('os');

const discordWebhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';

// Mendapatkan informasi IP dan spesifikasi hosting
const ipAddress = require('ip').address();
const hostname = os.hostname();
const platform = os.platform();
const arch = os.arch();
const cpus = os.cpus();

// Mengirimkan detail hosting ke Discord Webhook
axios.post(discordWebhookUrl, {
    content: `Server is running!\n\nIP Address: ${ipAddress}\nHostname: ${hostname}\nPlatform: ${platform}\nArchitecture: ${arch}\nCPUs: ${cpus.length} cores`,
})
    .then(response => {
        console.log('Webhook request sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending webhook request:', error.message);
    });
