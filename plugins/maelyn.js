import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text || typeof text !== 'string') return m.reply("Invalid input. Please provide a valid string.");

    try {
        const response = await MaelynAI(text);

        m.reply(response); 
    } catch(e) {
        console.error(e);
        throw "`*Command Not Responded*`";
    }
}

handler.help = ["maelyn2"]
handler.tags = ["ai"]
handler.command = ["maelyn2"]

export default handler

async function MaelynAI(query) {
    try {
        const response = await axios.post('https://bing.maelyn.my.id/chat', {
            query: query
        });

        return response.data.response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}