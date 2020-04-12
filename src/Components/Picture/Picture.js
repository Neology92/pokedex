import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Img } from './styled';

export default class Picture extends PureComponent {
    render() {
        const { src, name } = this.props;

        return (
            <Wrapper>
                <Img src={src} alt={`${name} picture`} />
            </Wrapper>
        );
    }
}

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
