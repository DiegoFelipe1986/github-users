import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://us-central1-prueba-concepto-seo.cloudfunctions.net',

})