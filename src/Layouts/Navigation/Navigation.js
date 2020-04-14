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

class Navigation extends React.PureComponent {
    render() {
        const {
            leftSideComponent,
            nextPokemonId,
            prevPokemonId,
            prevPokemon,
            random,
            rightSideComponent,
            showModal,
            setModalContent,
        } = this.props;

        return (
            <Wrapper>
                <LeftWing>
                    <>{leftSideComponent}</>
                    <GamepadButtonsGroup>
                        <Pokeball />
                        <Button color="#DDCE43" onClick={random}>
                            Random
                        </Button>
                        <Button
                            color="#FB2EFF"
                            onClick={() => {
                                setModalContent('saved');
                                showModal();
                            }}
                        >
                            Your Pokemons
                        </Button>
                        <Button color="#77DE82" onClick={prevPokemon}>
                            Previous
                        </Button>
                        <CrossButtons>
                            <ArrowButton direction="top" />
                            <ArrowButton
                                direction="left"
                                onClick={prevPokemonId}
                            />
                            <div />
                            <ArrowButton
                                direction="right"
                                onClick={nextPokemonId}
                            />
                            <ArrowButton direction="bottom" />
                        </CrossButtons>
                    </GamepadButtonsGroup>
                </LeftWing>
                <VerticalConnector />
                <RightWing>
                    <FilterButtonsGroup>
                        <Button
                            color="#48CB4D"
                            onClick={() => {
                                setModalContent('filter');
                                showModal();
                            }}
                        >
                            Filter
                        </Button>
                        <Button
                            color="#FA9C45"
                            onClick={() => {
                                setModalContent('sort');
                                showModal();
                            }}
                        >
                            Sort
                        </Button>
                    </FilterButtonsGroup>
                    <>{rightSideComponent}</>
                </RightWing>
            </Wrapper>
        );
    }
}

Navigation.propTypes = {
    leftSideComponent: PropTypes.node.isRequired,
    nextPokemonId: PropTypes.func.isRequired,
    prevPokemonId: PropTypes.func.isRequired,
    prevPokemon: PropTypes.func.isRequired,
    random: PropTypes.func.isRequired,
    rightSideComponent: PropTypes.node.isRequired,
    showModal: PropTypes.func.isRequired,
    setModalContent: PropTypes.func.isRequired,
};

export default Navigation;
