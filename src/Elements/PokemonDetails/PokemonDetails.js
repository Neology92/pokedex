import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';
import getPokemon from '../../Utils/getPokemon';

export default class PokemonDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {},
            isLoading: true,
        };

        this.fetchPokemon = this.fetchPokemon.bind(this);
    }

    async componentDidMount() {
        this.fetchPokemon();
    }

    async componentDidUpdate(prevProps) {
        const { pokemonId } = this.props;
        if (prevProps.pokemonId !== pokemonId) {
            this.fetchPokemon();
        }
    }

    async fetchPokemon() {
        const { pokemonId } = this.props;
        this.setState({ isLoading: true });

        const { data } = await getPokemon(pokemonId);
        this.setState({ pokemon: data });
        this.setState({ isLoading: false });
        console.log(data);
    }

    render() {
        const { isLoading, pokemon } = this.state;
        const { pokemonId, ...props } = this.props;

        return (
            <Card {...props}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <h1>{pokemon.name}</h1>
                        <img
                            style={{ width: '50%' }}
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                            alt=""
                        />
                    </div>
                )}
            </Card>
        );
    }
}

PokemonDetails.propTypes = {
    pokemonId: PropTypes.number,
};

PokemonDetails.defaultProps = {
    pokemonId: 1,
};
