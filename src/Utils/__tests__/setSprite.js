import setSprite from '../setSprite';
import pokemon from '../../__mocks__/pokemon.json';
import wastedPokemon from '../../__mocks__/wastedPokemon.json';

test('returns url to sprite', () => {
    const sprite = setSprite(pokemon);
    expect(sprite).toBe(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    );
});

test('returns path to placeholder', () => {
    const sprite = setSprite(wastedPokemon);
    expect(sprite).toBe('test-file-stub');
});
