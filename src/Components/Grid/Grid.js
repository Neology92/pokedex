import React, { PureComponent } from 'react';
import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import Pagination from '../Pagination/Pagination';
import setSprite from '../../Utils/setSprite';
import { Arrangement } from './styled';

export default class Grid extends PureComponent {
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
        const { pokemonsList, page, setPage, maxPage } = this.props;

        return (
            <Arrangement>
                {pokemonsList
                    .slice((page - 1) * 20, page * 20)
                    .map((pokemon) => (
                        <PokemonItem
                            onClick={() => this.handleClick(pokemon.id)}
                            name={pokemon.name}
                            sprite={setSprite(pokemon)}
                            key={pokemon.id}
                        />
                    ))}
                <Pagination page={page} setPage={setPage} maxPage={maxPage} />
            </Arrangement>
        );
    }
}

Grid.propTypes = {
    page: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    setPokemonId: PropTypes.func.isRequired,
    pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
