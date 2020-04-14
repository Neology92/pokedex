/* eslint no-await-in-loop: 0 */
import React from 'react';
import axios from 'axios';
import Pokedex from '../Layouts/Pokedex/Pokedex';
import { PokemonDetails, PokemonsGrid } from '../Components';

import pokeApiQuery from '../Utils/pokeApiQuery';

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 1,
            prevPokemon: 1,
            pokemonsList: [],
            isReady: false,
            isFetching: false,
            page: 1,
            maxPage: 1,
            info: {
                left: {
                    show: false,
                    text: '',
                },
                right: {
                    show: false,
                    text: '',
                },
            },
        };

        this.getPokemonById = this.getPokemonById.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPokemonId = this.setPokemonId.bind(this);
        this.fetchPokemons = this.fetchPokemons.bind(this);
        this.prevPokemon = this.prevPokemon.bind(this);
        this.random = this.random.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.sortPokemons = this.sortPokemons.bind(this);
    }

    componentDidMount() {
        this.fetchPokemons();
    }

    getPokemonById(pokemonId) {
        const { pokemonsList } = this.state;

        return pokemonsList.find(({ id }) => id === pokemonId);
    }

    setPage(num) {
        const { maxPage, isFetching } = this.state;
        if (!isFetching) {
            if (num >= 1 && num <= maxPage) {
                this.setState({ page: num });
            }
        } else {
            this.showMessage(
                'Not ready yet! Please wait a few seconds...',
                'right'
            );
        }
    }

    setPokemonId(newId) {
        const { pokemonId, isReady } = this.state;
        if (isReady) {
            if (this.getPokemonById(newId)) {
                this.setState({ prevPokemon: pokemonId });
                this.setState({ pokemonId: newId });
            }
        } else {
            this.showMessage(
                'Not ready yet! Please wait a few seconds...',
                'left'
            );
        }
    }

    async fetchPokemons() {
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

            // After first iteration allow to load first pokemons
            if (i === 0) {
                this.setState({ isReady: true });
            }
        }
        this.setState({ isFetching: false });
    }

    prevPokemon() {
        const { prevPokemon } = this.state;
        this.setPokemonId(prevPokemon);
    }

    random() {
        const { pokemonId, pokemonsList, isFetching } = this.state;

        if (!isFetching) {
            const maxId = pokemonsList.slice(-1)[0].id;
            let randomId = pokemonId;
            let exists = true;

            while (randomId === pokemonId || !exists) {
                randomId = Math.round(Math.random() * (maxId - 1)) + 1;
                exists = this.getPokemonById(randomId) || false;
            }

            this.setPokemonId(randomId);
        } else {
            this.showMessage('Wait to load all pokemons...', 'left');
        }
    }

    showMessage(text, where) {
        const { info } = this.state;
        this.setState({
            info: {
                ...info,
                [where]: {
                    show: true,
                    text,
                },
            },
        });

        setTimeout(() => {
            this.setState({
                info: {
                    [where]: {
                        show: false,
                        text: '',
                    },
                },
            });
        }, 2000);
    }

    sortPokemons(indicator, direction) {
        const { pokemonsList, isFetching } = this.state;

        if (!isFetching) {
            switch (indicator) {
                case 'name':
                    pokemonsList.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                    break;

                case 'id':
                    pokemonsList.sort((a, b) => {
                        const idA = a.id;
                        const idB = b.id;
                        return idA - idB;
                    });
                    break;
                default:
                    break;
            }

            if (direction === 'reversed') {
                pokemonsList.reverse();
            }

            this.setState({
                pokemonsList,
            });
        } else {
            this.showMessage(
                'Not ready yet! Please wait a few seconds...',
                'right'
            );
        }
    }

    render() {
        const {
            pokemonId,
            pokemonsList,
            isReady,
            isFetching,
            page,
            maxPage,
            info,
        } = this.state;

        return (
            <>
                <Pokedex
                    leftSideComponent={
                        <PokemonDetails
                            pokemon={this.getPokemonById(pokemonId)}
                            isReady={isReady}
                            info={info.left}
                        />
                    }
                    rightSideComponent={
                        <PokemonsGrid
                            isReady={isReady}
                            isFetching={isFetching}
                            info={info.right}
                            maxPage={maxPage}
                            page={page}
                            pokemonsList={pokemonsList}
                            setPage={this.setPage}
                            setPokemonId={this.setPokemonId}
                        />
                    }
                    nextPokemonId={() => this.setPokemonId(pokemonId + 1)}
                    prevPokemonId={() => this.setPokemonId(pokemonId - 1)}
                    prevPokemon={this.prevPokemon}
                    random={this.random}
                    sortPokemons={this.sortPokemons}
                />
            </>
        );
    }
}

export default Main;
