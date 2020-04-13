import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import Pagination from '../Pagination/Pagination';
import Info from '../Info/Info';
import { Grid, Wrapper } from './styled';

export default class PokemonsGrid extends PureComponent {
    render() {
        // const { isLoading } = this.state;
        const {
            page,
            maxPage,
            setPage,
            pokemonsList,
            isReady,
            setPokemonId,
            info,
            ...props
        } = this.props;

        return (
            <Wrapper {...props}>
                {isReady ? (
                    <>
                        <Grid>
                            {pokemonsList.map((pokemon) => (
                                <PokemonItem
                                    onClick={() => setPokemonId(pokemon.id)}
                                    name={pokemon.name}
                                    sprite={pokemon.sprites.front_default}
                                    key={pokemon.id}
                                />
                            ))}
                        </Grid>
                        <Pagination
                            page={page}
                            setPage={setPage}
                            maxPage={maxPage}
                        />
                        <Info showed={info.show}>{info.text}</Info>
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
};

PokemonsGrid.defaultProps = {
    info: { show: false, text: '' },
};
