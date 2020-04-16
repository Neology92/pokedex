import React from 'react';
import { animateScroll } from 'react-scroll';
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
    constructor(props) {
        super(props);
        this.state = {
            width: 360,
        };

        this.handleClickSavedPokemons = this.handleClickSavedPokemons.bind(
            this
        );
    }

    componentDidMount() {
        this.setState({ width: window.innerWidth });
    }

    handleClickSavedPokemons() {
        const { showModal, setModalContent } = this.props;
        const { width } = this.state;

        setModalContent('saved');
        showModal();

        if (width <= 1000) {
            animateScroll.scrollTo(1035);
        }
    }

    render() {
        const {
            leftSideComponent,
            nextPokemonId,
            prevPokemonId,
            next10PokemonId,
            prev10PokemonId,
            prevPokemon,
            random,
            rightSideComponent,
            saveCurrentPokemon,
            showModal,
            setModalContent,
        } = this.props;

        return (
            <Wrapper>
                <LeftWing>
                    <>{leftSideComponent}</>
                    <GamepadButtonsGroup>
                        <Pokeball onClick={saveCurrentPokemon} />
                        <Button color="#DDCE43" onClick={random}>
                            Random
                        </Button>
                        <Button
                            color="#FB2EFF"
                            onClick={this.handleClickSavedPokemons}
                        >
                            Your Pokemons
                        </Button>
                        <Button color="#77DE82" onClick={prevPokemon}>
                            Previous
                        </Button>
                        <CrossButtons>
                            <ArrowButton
                                direction="top"
                                onClick={next10PokemonId}
                            />
                            <ArrowButton
                                direction="left"
                                onClick={prevPokemonId}
                            />
                            <div />
                            <ArrowButton
                                direction="right"
                                onClick={nextPokemonId}
                            />
                            <ArrowButton
                                direction="bottom"
                                onClick={prev10PokemonId}
                            />
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
    next10PokemonId: PropTypes.func.isRequired,
    prev10PokemonId: PropTypes.func.isRequired,
    prevPokemon: PropTypes.func.isRequired,
    random: PropTypes.func.isRequired,
    rightSideComponent: PropTypes.node.isRequired,
    saveCurrentPokemon: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    setModalContent: PropTypes.func.isRequired,
};

export default Navigation;
