import axios from 'axios'

const $axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
})

export {$axios};