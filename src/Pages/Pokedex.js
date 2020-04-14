/* eslint no-await-in-loop: 0 */
import React from 'react';
import axios from 'axios';
import Navigation from '../Layouts/Navigation/Navigation';
import { LeftScreen, RightScreen } from '../Components';

import pokeApiQuery from '../Utils/pokeApiQuery';

class Pokedex extends React.PureComponent {
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
            message: {
                left: {
                    show: false,
                    text: '',
                },
                right: {
                    show: false,
                    text: '',
                },
            },
            isModalOpen: true,
            modalContent: 'filter',
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setModalContent = this.setModalContent.bind(this);
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

    setModalContent(content) {
        this.setState({
            modalContent: content,
        });
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
        this.setState({
            message: {
                [where]: {
                    show: true,
                    text,
                },
            },
        });

        setTimeout(() => {
            this.setState({
                message: {
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

        const sortedList = [...pokemonsList];

        if (!isFetching) {
            switch (indicator) {
                case 'name':
                    sortedList.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                    break;

                case 'id':
                    sortedList.sort((a, b) => {
                        const idA = a.id;
                        const idB = b.id;
                        return idA - idB;
                    });
                    break;
                default:
                    break;
            }

            if (direction === 'reversed') {
                sortedList.reverse();
            }

            if (sortedList !== pokemonsList) {
                this.setState({
                    pokemonsList: sortedList,
                });
            }
        } else {
            this.showMessage(
                'Not ready yet! Please wait a few seconds...',
                'right'
            );
        }
    }

    showModal() {
        this.setState({
            isModalOpen: true,
        });
    }

    closeModal() {
        this.setState({
            isModalOpen: false,
        });
    }

    render() {
        const {
            pokemonId,
            pokemonsList,
            isReady,
            isFetching,
            page,
            maxPage,
            message,
            isModalOpen,
            modalContent,
        } = this.state;

        return (
            <>
                <Navigation
                    leftSideComponent={
                        <LeftScreen
                            pokemon={this.getPokemonById(pokemonId)}
                            isReady={isReady}
                            message={message.left}
                        />
                    }
                    rightSideComponent={
                        <RightScreen
                            isReady={isReady}
                            isFetching={isFetching}
                            message={message.right}
                            maxPage={maxPage}
                            page={page}
                            pokemonsList={pokemonsList}
                            setPage={this.setPage}
                            setPokemonId={this.setPokemonId}
                            sortPokemons={this.sortPokemons}
                            isModalOpen={isModalOpen}
                            closeModal={this.closeModal}
                            modalContent={modalContent}
                        />
                    }
                    setModalContent={this.setModalContent}
                    showModal={this.showModal}
                    nextPokemonId={() => this.setPokemonId(pokemonId + 1)}
                    prevPokemonId={() => this.setPokemonId(pokemonId - 1)}
                    prevPokemon={this.prevPokemon}
                    random={this.random}
                />
            </>
        );
    }
}

export default Pokedex;
