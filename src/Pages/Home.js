/* eslint no-await-in-loop: 0 */
import React from 'react';
import axios from 'axios';
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
            isReady: false,
            isFetching: false,
            page: 1,
            pages: 1,
        };

        this.nextPokemon = this.nextPokemon.bind(this);
        this.previousPokemon = this.previousPokemon.bind(this);
        this.getPokemons = this.getPokemons.bind(this);
        this.getNextPokemonsPortion = this.getNextPokemonsPortion.bind(this);
    }

    async componentDidMount() {
        this.getPokemons();
    }

    getPokemons() {
        this.setState({ isLoading: true });
        this.setState({ isReady: false });

        pokeApiQuery('pokemon?limit=999').then(
            async ({ data: { count, results } }) => {
                const pages = Math.ceil(count / 20.0);
                this.setState({ pages });

                // Load first chunk of pokemons
                await this.getNextPokemonsPortion(0, 20, results);
                this.setState({ isReady: true });

                this.getNextPokemonsPortion(20, count, results);
                this.setState({ isLoading: false });
            }
        );
    }

    async getNextPokemonsPortion(from, maxId, results) {
        const chunkSize = 10;
        for (let i = from; i < maxId; i += chunkSize) {
            const { pokemonsList } = this.state;

            const promises = results
                .slice(i, i + chunkSize)
                .map(async (record) => {
                    const { data } = await axios.get(record.url);
                    return data;
                });
            const res = await Promise.all(promises);

            this.setState({ pokemonsList: pokemonsList.concat(res) });
            this.setState({ maxPokemonId: i + chunkSize });
        }
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
        const {
            pokemonId,
            pokemonsList,
            isReady,
            isFetching,
            page,
        } = this.state;

        return (
            <Pokedex
                leftSideComponent={
                    <PokemonDetails
                        width="100%"
                        height="70%"
                        style={{ marginBottom: '30px' }}
                        pokemon={pokemonsList[pokemonId - 1]}
                        isReady={isReady}
                    />
                }
                rightSideComponent={
                    <PokemonsGrid
                        page={page}
                        isReady={isReady}
                        isFetching={isFetching}
                        pokemonsList={pokemonsList.slice(0, 20)}
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
