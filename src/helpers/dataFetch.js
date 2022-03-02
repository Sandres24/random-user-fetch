import axios from 'axios';

export const dataFetch = (url) => {
    let data = axios.get(url)
        .then(res => res.data.results[0])
        .catch(err => console.error(err));
    return data;
}
