import React from 'react';
import {
    LeftWing,
    RightWing,
    VerticalConnector,
    Button,
    Card,
    ArrowButton,
    Pokeball,
} from '../../Components';
import PokemonDetails from '../../Elements/PokemonDetails/PokemonDetails';
import {
    Wrapper,
    FilterButtonsGroup,
    CrossButtons,
    GamepadButtonsGroup,
} from './styled';

import pokeApiQuery from '../../Utils/pokeApiQuery';

class Pokedex extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 1,
            maxPokemonId: 1,
            isLoading: true,
        };

        this.nextPokemon = this.nextPokemon.bind(this);
        this.previousPokemon = this.previousPokemon.bind(this);
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const {
            data: { count },
        } = await pokeApiQuery('pokemon');
        this.setState({ maxPokemonId: count });
        this.setState({ isLoading: false });
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
        const { pokemonId } = this.state;

        return (
            <Wrapper>
                <LeftWing>
                    <PokemonDetails
                        width="100%"
                        height="70%"
                        style={{ marginBottom: '30px' }}
                        pokemonId={pokemonId}
                    />
                    <GamepadButtonsGroup>
                        <Pokeball />
                        <Button color="#DDCE43">Random</Button>
                        <Button color="#FB2EFF">Your Pokemons</Button>
                        <Button color="#77DE82">Previous</Button>
                        <CrossButtons>
                            <ArrowButton direction="top" />
                            <ArrowButton
                                direction="left"
                                onClick={this.previousPokemon}
                            />
                            <div />
                            <ArrowButton
                                direction="right"
                                onClick={this.nextPokemon}
                            />
                            <ArrowButton direction="bottom" />
                        </CrossButtons>
                    </GamepadButtonsGroup>
                </LeftWing>
                <VerticalConnector />
                <RightWing>
                    <FilterButtonsGroup>
                        <Button color="#48CB4D">Filter</Button>
                        <Button color="#FA9C45">Sort</Button>
                    </FilterButtonsGroup>
                    <Card
                        width="100%"
                        height="85%"
                        style={{ alignSelf: 'end' }}
                    >
                        inner
                    </Card>
                </RightWing>
            </Wrapper>
        );
    }
}

export default Pokedex;
