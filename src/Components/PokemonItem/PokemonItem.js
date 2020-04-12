import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Img, Name } from './styled';

export default class PokemonItem extends PureComponent {
    render() {
        const { sprite, name, onClick, ...props } = this.props;

        return (
            <Wrapper onClick={onClick} {...props}>
                <Img src={sprite} alt={`${name} icon`} />
                <Name>{name}</Name>
            </Wrapper>
        );
    }
}

PokemonItem.propTypes = {
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
