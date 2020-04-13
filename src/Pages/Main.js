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
            maxPokemonId: 1,
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

        this.getPokemons = this.getPokemons.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPokemonId = this.setPokemonId.bind(this);
        this.nextPokemonId = this.nextPokemonId.bind(this);
        this.prevPokemonId = this.prevPokemonId.bind(this);
        this.prevPokemon = this.prevPokemon.bind(this);
        this.random = this.random.bind(this);
        this.showMessage = this.showMessage.bind(this);
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
        } else {
            this.showMessage(
                'Not ready yet! This may take a few seconds...',
                'right'
            );
        }
    }

    setPokemonId(id) {
        const { pokemonId, maxPokemonId, isReady } = this.state;
        if (isReady) {
            if (id >= 1 && id <= maxPokemonId && id !== pokemonId) {
                this.setState({ prevPokemon: pokemonId });
                this.setState({ pokemonId: id });
            }
        } else {
            this.showMessage('Not ready yet! Wait a few seconds...', 'left');
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

    prevPokemon() {
        const { prevPokemon } = this.state;
        this.setPokemonId(prevPokemon);
    }

    random() {
        const { pokemonId, maxPokemonId, isFetching } = this.state;

        if (!isFetching) {
            let randomId = pokemonId;

            while (randomId === pokemonId) {
                randomId = Math.round(Math.random() * (maxPokemonId - 1)) + 1;
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
            <Pokedex
                leftSideComponent={
                    <PokemonDetails
                        style={{ marginBottom: '30px' }}
                        pokemon={pokemonsList[pokemonId - 1]}
                        isReady={isReady}
                        info={info.left}
                    />
                }
                rightSideComponent={
                    <PokemonsGrid
                        setPokemonId={this.setPokemonId}
                        page={page}
                        maxPage={maxPage}
                        setPage={this.setPage}
                        isReady={isReady}
                        isFetching={isFetching}
                        pokemonsList={pokemonsList.slice(
                            (page - 1) * 20,
                            page * 20
                        )}
                        height="85%"
                        style={{ alignSelf: 'end' }}
                        info={info.right}
                    />
                }
                random={this.random}
                prevPokemon={this.prevPokemon}
                prevPokemonId={this.prevPokemonId}
                nextPokemonId={this.nextPokemonId}
            />
        );
    }
}

export default Main;
