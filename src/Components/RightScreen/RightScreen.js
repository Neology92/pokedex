import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FilterMenu from '../FilterMenu/FilterMenu';
import SavedMenu from '../SavedMenu/SavedMenu';
import SortMenu from '../SortMenu/SortMenu';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';
import Grid from '../Grid/Grid';
import { Wrapper } from './styled';

export default class RightScreen extends PureComponent {
    constructor(props) {
        super(props);

        this.displayModalContent = this.displayModalContent.bind(this);
    }

    displayModalContent(content) {
        const {
            filterPokemons,
            sortPokemons,
            savedPokemons,
            setPokemonId,
        } = this.props;

        return (
            <>
                <div
                    style={{
                        display: `${content === 'sort' ? 'inherit' : 'none'}`,
                    }}
                >
                    <SortMenu sortPokemons={sortPokemons} />
                </div>

                <div
                    style={{
                        display: `${content === 'filter' ? 'inherit' : 'none'}`,
                    }}
                >
                    <FilterMenu filterPokemons={filterPokemons} />
                </div>

                <div
                    style={{
                        display: `${content === 'saved' ? 'inherit' : 'none'}`,
                    }}
                >
                    <SavedMenu
                        savedPokemons={savedPokemons}
                        setPokemonId={setPokemonId}
                    />
                </div>
            </>
        );
    }

    render() {
        const {
            isReady,
            message,
            maxPage,
            page,
            pokemonsList,
            setPage,
            setPokemonId,
            isModalOpen,
            closeModal,
            modalContent,
            ...props
        } = this.props;

        return (
            <Wrapper {...props}>
                {isReady ? (
                    <>
                        <Grid
                            pokemonsList={pokemonsList}
                            maxPage={maxPage}
                            page={page}
                            setPage={setPage}
                            setPokemonId={setPokemonId}
                        />
                        <Message showed={message.show}>{message.text}</Message>
                        <Modal open={isModalOpen} closeModal={closeModal}>
                            {this.displayModalContent(modalContent)}
                        </Modal>
                    </>
                ) : (
                    <>
                        <h1>Loading...</h1>
                        <Message showed={message.show}>{message.text}</Message>
                    </>
                )}
            </Wrapper>
        );
    }
}

RightScreen.propTypes = {
    filterPokemons: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    savedPokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
    isReady: PropTypes.bool.isRequired,
    setPokemonId: PropTypes.func.isRequired,
    message: PropTypes.shape({
        show: PropTypes.bool,
        text: PropTypes.string,
    }),
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    modalContent: PropTypes.string.isRequired,
    sortPokemons: PropTypes.func.isRequired,
};

RightScreen.defaultProps = {
    message: { show: false, text: '' },
};
