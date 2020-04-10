import axios from 'axios';

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    try {
        const res = await axios.get(url);
        return res;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getPokemon;
