import React from 'react';
import PropTypes from 'prop-types';
import {
    LeftWing,
    RightWing,
    VerticalConnector,
    Button,
    ArrowButton,
    Pokeball,
} from '../../Components';
import {
    Wrapper,
    FilterButtonsGroup,
    CrossButtons,
    GamepadButtonsGroup,
} from './styled';

class Pokedex extends React.PureComponent {
    render() {
        const {
            leftSideComponent,
            rightSideComponent,
            previousPokemon,
            nextPokemon,
        } = this.props;

        return (
            <Wrapper>
                <LeftWing>
                    <>{leftSideComponent}</>
                    <GamepadButtonsGroup>
                        <Pokeball />
                        <Button color="#DDCE43">Random</Button>
                        <Button color="#FB2EFF">Your Pokemons</Button>
                        <Button color="#77DE82">Previous</Button>
                        <CrossButtons>
                            <ArrowButton direction="top" />
                            <ArrowButton
                                direction="left"
                                onClick={previousPokemon}
                            />
                            <div />
                            <ArrowButton
                                direction="right"
                                onClick={nextPokemon}
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
                    <>{rightSideComponent}</>
                </RightWing>
            </Wrapper>
        );
    }
}

Pokedex.propTypes = {
    leftSideComponent: PropTypes.node.isRequired,
    rightSideComponent: PropTypes.node.isRequired,
    previousPokemon: PropTypes.func.isRequired,
    nextPokemon: PropTypes.func.isRequired,
};

export default Pokedex;
