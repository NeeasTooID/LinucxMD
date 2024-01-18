import axios from 'axios';
import os from 'os';

const discordWebhookUrl = 'https://discord.com/api/webhooks/1197326997601390726/yghXhncaKZsffaoCw82v33mw0vlj4QMwu3f8EYm193MYcATQoAwFYpf5_ozugP3Rk9yF';

// Mendapatkan informasi spesifikasi hosting
const hostname = os.hostname();
const platform = os.platform();
const arch = os.arch();
const cpus = os.cpus();

// Mengirimkan detail hosting ke Discord Webhook
axios.post(discordWebhookUrl, {
    content: `***Server is running!***\n\nHostname: ||${hostname}||\nPlatform: ${platform}\nArchitecture: ${arch}\nCPUs: ${cpus.length} cores\n@LinucxMD`,
})
    .then(response => {
        console.log('Webhook request sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending webhook request:', error.message);
    });
