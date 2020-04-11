import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

export default class PokemonList extends PureComponent {
    render() {
        // const { isLoading } = this.state;
        const { page, pokemonsList, isLoading, ...props } = this.props;

        return (
            <Card {...props}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <h1>Page: {page}</h1>
                    </div>
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
