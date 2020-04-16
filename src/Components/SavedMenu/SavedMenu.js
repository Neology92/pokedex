import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import setSprite from '../../Utils/setSprite';
import { GridWrapper } from './styled';

export default class SavedMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { savedPokemons, setPokemonId } = this.props;

        return (
            <div>
                {savedPokemons.length ? (
                    <>
                        <p>Your pokemons:</p>
                        <GridWrapper>
                            {savedPokemons.map((pokemon) => (
                                <PokemonItem
                                    key={pokemon.id}
                                    sprite={setSprite(pokemon)}
                                    name={pokemon.name}
                                    onClick={() => setPokemonId(pokemon.id)}
                                />
                            ))}
                        </GridWrapper>
                    </>
                ) : (
                    <>
                        <p>You didn&apos;t catch any pokemon yet!</p>
                        <p>Click pokeball button if you want to!</p>
                    </>
                )}
            </div>
        );
    }
}

SavedMenu.propTypes = {
    savedPokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
    setPokemonId: PropTypes.func.isRequired,
};
