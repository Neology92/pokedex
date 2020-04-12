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
            maxPage: 1,
        };

        this.setPokemonId = this.setPokemonId.bind(this);
        this.nextPokemonId = this.nextPokemonId.bind(this);
        this.prevPokemonId = this.prevPokemonId.bind(this);
        this.getPokemons = this.getPokemons.bind(this);
    }

    async componentDidMount() {
        this.getPokemons();
    }

    async getPokemons() {
        this.setState({ isFetching: true });
        this.setState({ isReady: false });

        const {
            data: { count, results },
        } = await pokeApiQuery('pokemon?limit=999');

        const pokemonsPerPage = 20;
        const maxPage = Math.ceil(count / pokemonsPerPage);
        this.setState({ maxPage });

        // Split pokemons to smaller chunks before fetch
        const chunkSize = pokemonsPerPage;
        for (let i = 0; i < count; i += chunkSize) {
            const { pokemonsList } = this.state;

            // Get promises of returning pokemons
            const promises = results
                .slice(i, i + chunkSize)
                .map(async (record) => {
                    const { data } = await axios.get(record.url);
                    return data;
                });

            // Wait for results
            const res = await Promise.all(promises);

            this.setState({ pokemonsList: pokemonsList.concat(res) });
            this.setState({ maxPokemonId: i + chunkSize });

            // After first iteration allow to load first pokemons
            if (i === 0) {
                this.setState({ isReady: true });
            }
        }
        this.setState({ isFetching: false });
    }

    setPage(num) {
        const { maxPage, isFetching } = this.state;
        if (!isFetching) {
            if (num >= 1 && num <= maxPage) {
                this.setState({ page: num });
            }
        }
    }

    setPokemonId(id) {
        const { pokemonId, maxPokemonId, isReady } = this.state;
        if (isReady) {
            if (id >= 1 && id <= maxPokemonId && id !== pokemonId) {
                this.setState({ pokemonId: id });
            }
        }
    }

    nextPokemonId() {
        const { pokemonId } = this.state;
        this.setPokemonId(pokemonId + 1);
    }

    prevPokemonId() {
        const { pokemonId } = this.state;
        this.setPokemonId(pokemonId - 1);
    }

    render() {
        const {
            pokemonId,
            pokemonsList,
            isReady,
            isFetching,
            page,
            maxPage,
        } = this.state;

        return (
            <Pokedex
                leftSideComponent={
                    <PokemonDetails
                        style={{ marginBottom: '30px' }}
                        pokemon={pokemonsList[pokemonId - 1]}
                        isReady={isReady}
                    />
                }
                rightSideComponent={
                    <PokemonsGrid
                        setPokemonId={this.setPokemonId}
                        page={page}
                        maxPage={maxPage}
                        isReady={isReady}
                        isFetching={isFetching}
                        pokemonsList={pokemonsList.slice(0, 20)}
                        height="85%"
                        style={{ alignSelf: 'end' }}
                    />
                }
                prevPokemonId={this.prevPokemonId}
                nextPokemonId={this.nextPokemonId}
            />
        );
    }
}

export default Home;
