import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Img, Name } from './styled';

export default class PokemonItem extends PureComponent {
    render() {
        const { sprite, name } = this.props;

        return (
            <Wrapper>
                <Img src={sprite} alt={`${name} icon`} />
                <Name>{name}</Name>
            </Wrapper>
        );
    }
}

PokemonItem.propTypes = {
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
