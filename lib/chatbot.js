import axios from 'axios'

async function createRequest(opts) {
    if (typeof opts !== 'object') {
        throw 'Invalid Body'
    }
    let { url, content } = opts
    if (!url || !content) {
        throw 'Missing Body'
    }
    let { data } = await axios.request({
        baseURL: 'https://worker.itsrose.site',
        url: url,
        method: 'POST',
        headers: {
            ['User-Agent']: 'Frieren-Scraper (0.0.1x)'
        },
        data: content
    }).catch(e => e == null || e == void 0 ? void 0 : e.response)
    return data
}

async function chatAi(content) {
    if (typeof content !== 'object' || !(Array.isArray(content) && content.length)) {
        throw 'Invalid Body'
    }
    let body = await createRequest({
        url: '/api/turbo',
        content
    })
    return body
}

export {
    chatAi
}