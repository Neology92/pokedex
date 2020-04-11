import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import { Grid, Wrapper } from './styled';

export default class PokemonList extends PureComponent {
    render() {
        // const { isLoading } = this.state;
        const { page, pokemonsList, isLoading, ...props } = this.props;

        return (
            <Wrapper {...props}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <Grid>
                        {pokemonsList.slice(0, 20).map((pokemon) => (
                            <PokemonItem
                                name={pokemon.name}
                                sprite={pokemon.sprites.front_default}
                                key={pokemon.id}
                            />
                        ))}
                    </Grid>
                )}
            </Wrapper>
        );
    }
}

PokemonList.propTypes = {
    page: PropTypes.number.isRequired,
    pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
};
