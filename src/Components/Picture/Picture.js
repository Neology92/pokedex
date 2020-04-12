import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledImg, Placeholder } from './styled';

export default class Picture extends PureComponent {
    render() {
        const { src, name, placeholder } = this.props;

        return (
            <Wrapper>
                <StyledImg
                    src={src}
                    alt={`${name} picture`}
                    loader={
                        <Placeholder
                            src={placeholder}
                            alt={`${name} picture`}
                        />
                    }
                />
            </Wrapper>
        );
    }
}

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};
