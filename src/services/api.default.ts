import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.0.8:3008',
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Accept':'application/json',
        'Content-Type':'application/json',
    },
    withCredentials:true
})

export default api;