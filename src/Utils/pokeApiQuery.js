import axios from 'axios';

const pokeApiQuery = (query) => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/${query}/`;
        try {
            const res = axios.get(url);
            resolve(res);
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
};

export default pokeApiQuery;
