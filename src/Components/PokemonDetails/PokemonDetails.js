import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InfoTable from '../InfoTable/InfoTable';
import Picture from '../Picture/Picture';
import Info from '../Info/Info';
import { Wrapper, Name, StyledCard } from './styled';

const asThreeDigit = (num) => {
    return `00${num}`.substr(-3);
};

export default class PokemonDetails extends PureComponent {
    render() {
        const { pokemon, isReady, info, ...props } = this.props;

        return (
            <StyledCard {...props}>
                {isReady ? (
                    <Wrapper>
                        <Name>{pokemon.name}</Name>
                        <Name>#{asThreeDigit(pokemon.id)}</Name>
                        <Picture
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                            name={pokemon.name}
                            placeholder={pokemon.sprites.front_default}
                        />

                        <InfoTable />
                        <Info showed={info.show}>{info.text}</Info>
                    </Wrapper>
                ) : (
                    <>
                        <h1>Loading...</h1>
                        <Info showed={info.show}>{info.text}</Info>
                    </>
                )}
            </StyledCard>
        );
    }
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        sprites: PropTypes.shape({
            front_default: PropTypes.string,
        }),
    }),

    info: PropTypes.shape({
        show: PropTypes.bool,
        text: PropTypes.string,
    }),

    isReady: PropTypes.bool.isRequired,
};

PokemonDetails.defaultProps = {
    pokemon: { name: '', id: 0 },
    info: { show: false, text: '' },
};
