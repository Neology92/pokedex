/* eslint camelcase: 0 */
import React, { PureComponent } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import Picture from '../Picture/Picture';
import Message from '../Message/Message';
import { Wrapper, Name, StyledCard } from './styled';
import setSprite from '../../Utils/setSprite';

const asThreeDigit = (num) => {
    return `0000${num}`.substr(-5);
};

export default class LeftScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            species: {},
            pokemonInfo: [
                { name: 'Type', value: 'Loading...' },
                { name: 'Generation', value: 'Loading...' },
                { name: 'Ability', value: 'Loading...' },
                { name: 'Hidden Ab.', value: 'Loading...' },
                { name: 'Habitat', value: 'Loading...' },
                { name: 'Evolution Next-form', value: 'Loading...' },
                { name: 'Evolution Prev-form', value: 'Loading...' },
            ],
        };

        this.findSpecies = this.findSpecies.bind(this);
        this.setupInformations = this.setupInformations.bind(this);
    }

    async componentDidUpdate(prevProps, prevState) {
        const { loadingProgress } = this.props;

        if (loadingProgress[2] && prevState === this.state) {
            await this.findSpecies();
            await this.setupInformations();
        }
    }

    async setupInformations() {
        const { pokemon } = this.props;
        const { species } = this.state;

        const { data } = await axios.get(species.evolution_chain.url);
        const evolutionChain = data;

        const type = pokemon.types.length
            ? pokemon.types.map(({ type: { name } }) => name).join(', ')
            : '-';

        const generation = species.generation.name.split('-')[1];

        const ability = pokemon.abilities.find(({ is_hidden }) => !is_hidden);
        const abilityName = ability ? ability.ability.name : '-';

        const hiddenAbility = pokemon.abilities.find(
            ({ is_hidden }) => is_hidden
        );
        const hiddenAbilityName = hiddenAbility
            ? hiddenAbility.ability.name
            : '-';

        const habitat = species.habitat ? species.habitat.name : '-';

        let nextFormsArr;
        JSON.stringify(evolutionChain, (_, nestedValue) => {
            if (
                nestedValue &&
                nestedValue.species &&
                nestedValue.species.name === pokemon.name
            ) {
                nextFormsArr = nestedValue.evolves_to;
            }
            return nestedValue;
        });
        const nextForms = nextFormsArr.length
            ? nextFormsArr.map(({ species: { name } }) => name).join(', ')
            : '-';

        const prevForm = species.evolves_from_species
            ? species.evolves_from_species.name
            : '-';

        const pokemonInfo = [
            { name: 'Type', value: type },
            { name: 'Generation', value: generation },
            { name: 'Ability', value: abilityName },
            { name: 'Hidden Ab.', value: hiddenAbilityName },
            { name: 'Habitat', value: habitat },
            { name: 'Evolution Next-form', value: nextForms },
            { name: 'Evolution Prev-form', value: prevForm },
        ];

        this.setState({
            pokemonInfo,
        });
    }

    async findSpecies() {
        const { pokemon, speciesList } = this.props;

        const species = speciesList.find(
            (elem) => elem.name === pokemon.species.name
        );
        this.setState({
            species,
        });
    }

    render() {
        const {
            pokemon,
            speciesList,
            loadingProgress,
            message,
            ...props
        } = this.props;
        const { pokemonInfo } = this.state;

        return (
            <StyledCard {...props}>
                {loadingProgress[0] ? (
                    <Wrapper>
                        <Name>{pokemon.name}</Name>
                        <Name>#{asThreeDigit(pokemon.id)}</Name>
                        <Picture
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                            name={pokemon.name}
                            placeholder={setSprite(pokemon)}
                        />

                        <Table>
                            <tbody>
                                {pokemonInfo.map(({ name, value }) => (
                                    <tr key={name}>
                                        <th>{name}</th>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Message showed={message.show}>{message.text}</Message>
                    </Wrapper>
                ) : (
                    <>
                        <h1>Loading...</h1>
                        <Message showed={message.show}>{message.text}</Message>
                    </>
                )}
            </StyledCard>
        );
    }
}

LeftScreen.propTypes = {
    loadingProgress: PropTypes.arrayOf(PropTypes.bool).isRequired,
    message: PropTypes.shape({
        show: PropTypes.bool,
        text: PropTypes.string,
    }),
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        sprites: PropTypes.shape({
            front_default: PropTypes.string,
        }),
        types: PropTypes.array,
        abilities: PropTypes.array,
        species: PropTypes.object,
    }),
    speciesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

LeftScreen.defaultProps = {
    pokemon: { name: '', id: 0 },
    message: { show: false, text: '' },
};
