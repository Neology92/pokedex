import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

export default class PokemonDetails extends PureComponent {
    render() {
        const { pokemon, isReady, ...props } = this.props;

        return (
            <Card {...props}>
                {isReady ? (
                    <div>
                        <h1>{pokemon.name}</h1>
                        <img
                            style={{ width: '50%' }}
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                            alt=""
                        />
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </Card>
        );
    }
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
    }),

    isReady: PropTypes.bool.isRequired,
};

PokemonDetails.defaultProps = {
    pokemon: { name: '', id: 0 },
};
