import React, { PureComponent } from 'react';
import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';
import Info from '../Info/Info';
import { Grid, Wrapper } from './styled';
import setSprite from '../../Utils/setSprite';

export default class PokemonsGrid extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            width: 360,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ width: window.innerWidth });
    }

    handleClick(id) {
        const { setPokemonId } = this.props;
        const { width } = this.state;
        setPokemonId(id);
        if (width <= 1000) {
            animateScroll.scrollTo(150);
        }
    }

    render() {
        const {
            isReady,
            info,
            maxPage,
            page,
            pokemonsList,
            setPage,
            setPokemonId,
            isModalOpen,
            closeModal,
            ...props
        } = this.props;

        return (
            <Wrapper {...props}>
                {isReady ? (
                    <>
                        <Grid>
                            {pokemonsList
                                .slice((page - 1) * 20, page * 20)
                                .map((pokemon) => (
                                    <PokemonItem
                                        onClick={() =>
                                            this.handleClick(pokemon.id)
                                        }
                                        name={pokemon.name}
                                        sprite={setSprite(pokemon)}
                                        key={pokemon.id}
                                    />
                                ))}
                            <Pagination
                                page={page}
                                setPage={setPage}
                                maxPage={maxPage}
                            />
                        </Grid>
                        <Info showed={info.show}>{info.text}</Info>
                        <Modal open={isModalOpen} closeModal={closeModal}>
                            lel
                        </Modal>
                    </>
                ) : (
                    <>
                        <h1>Loading...</h1>
                        <Info showed={info.show}>{info.text}</Info>
                    </>
                )}
            </Wrapper>
        );
    }
}

PokemonsGrid.propTypes = {
    page: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isReady: PropTypes.bool.isRequired,
    setPokemonId: PropTypes.func.isRequired,
    info: PropTypes.shape({
        show: PropTypes.bool,
        text: PropTypes.string,
    }),
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

PokemonsGrid.defaultProps = {
    info: { show: false, text: '' },
};
