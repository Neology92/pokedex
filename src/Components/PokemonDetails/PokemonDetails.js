import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InfoTable from '../InfoTable/InfoTable';
import { Wrapper, Name, StyledCard } from './styled';

const asThreeDigit = (num) => {
    return `00${num}`.substr(-3);
};

export default class PokemonDetails extends PureComponent {
    render() {
        const { pokemon, isReady, ...props } = this.props;

        return (
            <StyledCard {...props}>
                {isReady ? (
                    <Wrapper>
                        <Name>{pokemon.name}</Name>
                        <Name>#{asThreeDigit(pokemon.id)}</Name>
                        {/* <img
                            style={{ height: '100%' }}
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                            alt=""
                        /> */}

                        <div
                            style={{
                                backgroundColor: 'green',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <InfoTable />
                    </Wrapper>
                ) : (
                    <h1>Loading...</h1>
                )}
            </StyledCard>
        );
    }
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
    }),

    isReady: PropTypes.bool.isRequired,
};

PokemonDetails.defaultProps = {
    pokemon: { name: '', id: 0 },
};
