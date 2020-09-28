import axios from 'axios';

//si quiero enviar algo, cambio el get
export const getDataFromApi = (url) => {
    return axios.get(url)
    .then(({data}) => {
        return data
    })
};