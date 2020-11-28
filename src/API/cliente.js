// importamos la libreria de axios
import axios from 'axios';

// Destructuring
const { REACT_APP_API_BASE_URL: baseURL } = process.env;


// importamos un cliente que vamos a utilizar para hacer las peticiones a nuestro end points
const cliente = axios.create({
    baseURL,
    // baseURL: process.env.REACT_APP_API_BASE_URL,
});

cliente.interceptors.response.use(response => response.data);   

export default cliente;


