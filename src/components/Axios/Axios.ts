import axios from 'axios';


const Axios = axios.create({
  baseURL: '/api',
});

Axios.defaults.withCredentials = true;


export default Axios;
