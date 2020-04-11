import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import PokemonItem from '../PokemonItem/PokemonItem';

export default class PokemonList extends PureComponent {
    render() {
        // const { isLoading } = this.state;
        const { page, pokemonsList, isLoading, ...props } = this.props;

        return (
            <Card {...props}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        {pokemonsList.slice(0, 5).map((pokemon) => (
                            <PokemonItem
                                name={pokemon.name}
                                sprite={pokemon.sprites.front_default}
                                key={pokemon.id}
                            />
                        ))}
                    </>
                )}
            </Card>
        );
    }
}

PokemonList.propTypes = {
    page: PropTypes.number.isRequired,
    pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
};
