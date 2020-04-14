import spritePlaceholder from '../Assets/Images/pokemonSpritePlaceholder.png';

function setSprite(pokemon) {
    const { sprites } = pokemon;

    if (sprites.front_default) return sprites.front_default;
    return spritePlaceholder;
}

export default setSprite;
