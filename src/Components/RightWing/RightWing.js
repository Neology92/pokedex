import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

export default class RightWing extends PureComponent {
    render() {
        const { children } = this.props;
        return <Wrapper>{children}</Wrapper>;
    }
}

RightWing.propTypes = {
    children: PropTypes.node.isRequired,
};
