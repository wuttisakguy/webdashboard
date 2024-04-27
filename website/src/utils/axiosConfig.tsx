import axios from 'axios'

export const axiosConfig = axios.create({
    baseURL: 'http://localhost:5000',
})

axiosConfig.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        config.headers['Authorization'] = token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosConfig.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)
