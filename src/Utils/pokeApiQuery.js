import axios from 'axios';

const pokeApiQuery = async (query) => {
    const url = `https://pokeapi.co/api/v2/${query}/`;

    try {
        const res = await axios.get(url);
        return res;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default pokeApiQuery;
