import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CameraEye from '../CameraEye/CameraEye';
import { Topping, Wrapper, Inside } from './styled';

export default class LeftWing extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <Wrapper>
                <Topping>
                    <CameraEye />
                </Topping>
                <Inside>{children}</Inside>
            </Wrapper>
        );
    }
}

LeftWing.propTypes = {
    children: PropTypes.node.isRequired,
};
