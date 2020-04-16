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
            prevPokemonsList: [],
            pokemonsList: [],
            pokemonsDisplayList: [],
            speciesList: [],
            savedPokemons: [],
            loadingProgress: [false, false, false],
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
            isModalOpen: false,
            modalContent: '',
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setModalContent = this.setModalContent.bind(this);
        this.getPokemonById = this.getPokemonById.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPokemonId = this.setPokemonId.bind(this);
        this.fetchPokemons = this.fetchPokemons.bind(this);
        this.fetchSpecies = this.fetchSpecies.bind(this);
        this.filterPokemons = this.filterPokemons.bind(this);
        this.prevPokemon = this.prevPokemon.bind(this);
        this.random = this.random.bind(this);
        this.saveCurrentPokemon = this.saveCurrentPokemon.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.sortPokemons = this.sortPokemons.bind(this);
    }

    componentDidMount() {
        this.fetchPokemons();
        this.fetchSpecies();
    }

    getPokemonById(pokemonId) {
        const { pokemonsList } = this.state;

        return pokemonsList.find(({ id }) => id === pokemonId);
    }

    setPage(num) {
        const { maxPage, loadingProgress } = this.state;
        if (loadingProgress[0] && loadingProgress[1]) {
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
        const { pokemonId, loadingProgress } = this.state;
        if (loadingProgress[0]) {
            if (this.getPokemonById(newId)) {
                const { prevPokemonsList } = this.state;
                prevPokemonsList.push(pokemonId);
                this.setState({ prevPokemonsList });

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
        const {
            data: { count, results },
        } = await pokeApiQuery('pokemon?limit=807');

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
            const newPokemonsList = pokemonsList.concat(res);
            this.setState({
                pokemonsList: newPokemonsList,
                pokemonsDisplayList: newPokemonsList,
            });

            // After first iteration allow to load first pokemons
            if (i === 0) {
                const { loadingProgress } = this.state;
                loadingProgress[0] = true;
                this.setState({ loadingProgress });
            }
        }

        const { loadingProgress } = this.state;
        loadingProgress[1] = true;
        this.setState({ loadingProgress });
    }

    async fetchSpecies() {
        const {
            data: { count, results },
        } = await pokeApiQuery('pokemon-species?limit=999');

        // Split species to smaller chunks before fetch
        const chunkSize = 20;
        for (let i = 0; i < count; i += chunkSize) {
            const { speciesList } = this.state;

            // Get promises of returning pokemons
            const promises = results
                .slice(i, i + chunkSize)
                .map(async (record) => {
                    const { data } = await axios.get(record.url);
                    return data;
                });

            // Wait for results
            const res = await Promise.all(promises);
            this.setState({ speciesList: speciesList.concat(res) });
        }

        const { loadingProgress } = this.state;
        // Create new array to avoid (just) mutating
        const newLoadingProgress = [...loadingProgress];
        newLoadingProgress[2] = true;
        this.setState({ loadingProgress: newLoadingProgress });
    }

    prevPokemon() {
        const { prevPokemonsList } = this.state;
        if (prevPokemonsList.length) {
            this.setState({ pokemonId: prevPokemonsList.pop() });
            this.setState({ prevPokemonsList });
        } else {
            this.showMessage('Oups, there is no previous pokemon', 'left');
        }
    }

    random() {
        const { pokemonId, pokemonsList, loadingProgress } = this.state;

        if (loadingProgress[0] && loadingProgress[1]) {
            const maxId = pokemonsList.slice(-1)[0].id;
            let randomId = pokemonId;
            let exists = true;

            while (randomId === pokemonId || !exists) {
                randomId = Math.round(Math.random() * (maxId - 1)) + 1;
                exists = this.getPokemonById(randomId) || false;
            }

            this.setPokemonId(randomId);
        } else {
            this.showMessage(
                'Our lottery machine has not warmed up yet ...',
                'left'
            );
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
        const { pokemonsDisplayList, loadingProgress } = this.state;

        const sortedList = [...pokemonsDisplayList];

        if (loadingProgress[0] && loadingProgress[1]) {
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

            if (sortedList !== pokemonsDisplayList) {
                this.setState({
                    pokemonsDisplayList: sortedList,
                });
            }
        } else {
            this.showMessage('Some pokemons have not woken up yet...', 'right');
        }
    }

    filterPokemons(conditions) {
        const { pokemonsList, speciesList, loadingProgress } = this.state;

        let filteredList = [...pokemonsList];

        if (loadingProgress[0] && loadingProgress[1] && loadingProgress[2]) {
            conditions.forEach(({ field, value }) => {
                switch (field) {
                    case 'type':
                        filteredList = filteredList.filter(({ types }) => {
                            const consistent = types.filter(
                                ({ type }) => type.name === value
                            );
                            return consistent.length;
                        });
                        break;
                    case 'pokemon-habitat':
                        filteredList = filteredList.filter(({ species }) => {
                            const pokemonHabitat = speciesList.find(
                                (obj) => obj.name === species.name
                            ).habitat;

                            if (pokemonHabitat === null) {
                                return false;
                            }

                            return pokemonHabitat.name === value;
                        });
                        break;
                    case 'ability':
                        filteredList = filteredList.filter(({ abilities }) => {
                            const consistent = abilities.filter(
                                ({ ability }) => ability.name === value
                            );
                            return consistent.length;
                        });
                        break;
                    case 'pokemon-shape':
                        filteredList = filteredList.filter(({ species }) => {
                            const pokemonShape = speciesList.find(
                                (obj) => obj.name === species.name
                            ).shape;

                            if (pokemonShape === null) {
                                return false;
                            }

                            return pokemonShape.name === value;
                        });
                        break;
                    case 'generation':
                        filteredList = filteredList.filter(({ species }) => {
                            const pokemonGeneration = speciesList.find(
                                (obj) => obj.name === species.name
                            ).generation;

                            if (pokemonGeneration === null) {
                                return false;
                            }

                            return pokemonGeneration.name === value;
                        });
                        break;
                    default:
                        break;
                }
            });

            if (filteredList !== pokemonsList) {
                const pokemonsPerPage = 20;
                const maxPage = Math.ceil(
                    filteredList.length / pokemonsPerPage
                );
                const page = 1;

                this.setState({
                    pokemonsDisplayList: filteredList,
                    page,
                    maxPage,
                });
            }
        } else {
            this.showMessage('Some pokemons have not woken up yet...', 'right');
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

    saveCurrentPokemon() {
        const { savedPokemons, pokemonId, loadingProgress } = this.state;

        if (loadingProgress[0]) {
            const newPokemon = this.getPokemonById(pokemonId);
            if (savedPokemons.find((el) => el.id === newPokemon.id)) {
                this.showMessage(`You already catched this pokemon! `, 'left');
            } else {
                const newList = [...savedPokemons];
                newList.push(newPokemon);
                this.setState({ savedPokemons: newList });

                console.log(newList);
                this.showMessage('Catched! Now check "Your pokemons"!', 'left');
            }
        } else {
            this.showMessage(`You're too fast, give them a moment...`, 'left');
        }
    }

    render() {
        const {
            pokemonId,
            pokemonsDisplayList,
            speciesList,
            savedPokemons,
            loadingProgress,
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
                            speciesList={speciesList}
                            loadingProgress={loadingProgress}
                            message={message.left}
                        />
                    }
                    rightSideComponent={
                        <RightScreen
                            isReady={loadingProgress[0]}
                            message={message.right}
                            maxPage={maxPage}
                            page={page}
                            pokemonsList={pokemonsDisplayList}
                            savedPokemons={savedPokemons}
                            setPage={this.setPage}
                            setPokemonId={this.setPokemonId}
                            sortPokemons={this.sortPokemons}
                            filterPokemons={this.filterPokemons}
                            isModalOpen={isModalOpen}
                            closeModal={this.closeModal}
                            modalContent={modalContent}
                        />
                    }
                    next10PokemonId={() => this.setPokemonId(pokemonId + 10)}
                    prev10PokemonId={() => this.setPokemonId(pokemonId - 10)}
                    nextPokemonId={() => this.setPokemonId(pokemonId + 1)}
                    prevPokemonId={() => this.setPokemonId(pokemonId - 1)}
                    prevPokemon={this.prevPokemon}
                    random={this.random}
                    saveCurrentPokemon={this.saveCurrentPokemon}
                    setModalContent={this.setModalContent}
                    showModal={this.showModal}
                />
            </>
        );
    }
}

export default Pokedex;
