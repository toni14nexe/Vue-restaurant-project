import axios from 'axios'

window.axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/' //online https://api.npoint.io/4b074a9452c139835840/ | local http://localhost:3000/
axios.interceptors.request.use(function(config){
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    return config
})