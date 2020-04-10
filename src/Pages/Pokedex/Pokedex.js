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

class Pokedex extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <LeftWing>
                    <PokemonDetails
                        width="100%"
                        height="70%"
                        style={{ marginBottom: '30px' }}
                    />
                    <GamepadButtonsGroup>
                        <Pokeball />
                        <Button color="#DDCE43">Random</Button>
                        <Button color="#FB2EFF">Your Pokemons</Button>
                        <Button color="#77DE82">Previous</Button>
                        <CrossButtons>
                            <ArrowButton direction="top" />
                            <ArrowButton direction="left" />
                            <div />
                            <ArrowButton direction="right" />
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
