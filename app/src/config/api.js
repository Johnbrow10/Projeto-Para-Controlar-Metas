import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.166:3535'
});

export default api;