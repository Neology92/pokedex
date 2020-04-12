import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import { Grid, Wrapper } from './styled';

export default class PokemonList extends PureComponent {
    render() {
        // const { isLoading } = this.state;
        const {
            page,
            pokemonsList,
            isReady,
            setPokemonId,
            ...props
        } = this.props;

        return (
            <Wrapper {...props}>
                {isReady ? (
                    <Grid>
                        {pokemonsList.map((pokemon) => (
                            <PokemonItem
                                onClick={() => setPokemonId(pokemon.id)}
                                name={pokemon.name}
                                sprite={pokemon.sprites.front_default}
                                key={pokemon.id}
                            />
                        ))}
                    </Grid>
                ) : (
                    <h1>Loading...</h1>
                )}
            </Wrapper>
        );
    }
}

PokemonList.propTypes = {
    page: PropTypes.number.isRequired,
    pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isReady: PropTypes.bool.isRequired,
    setPokemonId: PropTypes.func.isRequired,
};
