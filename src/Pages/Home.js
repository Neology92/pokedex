import React from 'react';
import Pokedex from '../Layouts/Pokedex/Pokedex';
import { PokemonDetails, PokemonsGrid } from '../Components';

import pokeApiQuery from '../Utils/pokeApiQuery';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 1,
            maxPokemonId: 1,
            pokemonsList: [],
            isLoading: true,
            page: 1,
            pages: 1,
        };

        this.nextPokemon = this.nextPokemon.bind(this);
        this.previousPokemon = this.previousPokemon.bind(this);
        this.getPokemons = this.getPokemons.bind(this);
    }

    componentDidMount() {
        this.getPokemons();
    }

    async getPokemons() {
        this.setState({ isLoading: true });
        const {
            data: { count, results },
        } = await pokeApiQuery('pokemon?limit=999');
        const numOfPages = Math.ceil(count / 20.0);

        this.setState({
            maxPokemonId: count,
            pokemonsList: results,
            pages: numOfPages,
            isLoading: false,
        });
    }

    setPage(num) {
        const { pages } = this.state;
        if (num >= 1 && num <= pages) {
            this.setState({ page: num });
        }
    }

    nextPokemon() {
        const { pokemonId, maxPokemonId, isLoading } = this.state;
        if (!isLoading) {
            let nextPokemon = pokemonId;
            if (pokemonId < maxPokemonId) {
                nextPokemon += 1;
            }
            this.setState({ pokemonId: nextPokemon });
        }
    }

    previousPokemon() {
        const { pokemonId, isLoading } = this.state;
        if (!isLoading) {
            let previousPokemon = pokemonId;
            if (pokemonId > 1) {
                previousPokemon -= 1;
            }
            this.setState({ pokemonId: previousPokemon });
        }
    }

    render() {
        const { pokemonId, pokemonsList, isLoading, page } = this.state;

        return (
            <Pokedex
                leftSideComponent={
                    <PokemonDetails
                        width="100%"
                        height="70%"
                        style={{ marginBottom: '30px' }}
                        pokemonId={pokemonId}
                    />
                }
                rightSideComponent={
                    <PokemonsGrid
                        page={page}
                        isLoading={isLoading}
                        pokemonsList={pokemonsList}
                        width="100%"
                        height="85%"
                        style={{ alignSelf: 'end' }}
                    />
                }
                previousPokemon={this.previousPokemon}
                nextPokemon={this.nextPokemon}
            />
        );
    }
}

export default Home;
