import axios from 'axios';
import os from 'os';
import chokidar from 'chokidar';

const discordWebhookUrl = 'https://discord.com/api/webhooks/1197326997601390726/yghXhncaKZsffaoCw82v33mw0vlj4QMwu3f8EYm193MYcATQoAwFYpf5_ozugP3Rk9yF';

// Mendapatkan informasi spesifikasi hosting
const hostname = os.hostname();
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
                { name: 'Hostname', value: `||${hostname}||`, inline: true },
                { name: 'Platform', value: platform, inline: true },
                { name: 'Architecture', value: arch, inline: true },
                { name: 'CPUs', value: `${cpus.length} cores`, inline: true },
                { name: 'File Changes', value: changes.join('\n') || 'No changes detected', inline: false },
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

// Memonitor perubahan file dengan chokidar
const changedFiles = [];

const watcher = chokidar.watch('/vercel/path0', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
});

watcher
    .on('add', path => {
        console.log(`File ${path} has been added`);
        changedFiles.push(`Added: ${path}`);
    })
    .on('change', path => {
        console.log(`File ${path} has been changed`);
        changedFiles.push(`Changed: ${path}`);
    })
    .on('unlink', path => {
        console.log(`File ${path} has been removed`);
        changedFiles.push(`Removed: ${path}`);
    })
    .on('ready', () => {
        // Send the webhook message once all initial files have been scanned
        const embedMessage = createEmbedMessage(changedFiles);
        sendWebhook(embedMessage);
        console.log('Watching for file changes...');
    });
