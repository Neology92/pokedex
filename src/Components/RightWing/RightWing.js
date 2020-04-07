import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class RightWing extends PureComponent {
    render() {
        const { children } = this.props;
        return <Wrapper>{children}</Wrapper>;
    }
}

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 585px;
    height: 760px;
    margin-top: 115px;
    padding: 40px;

    border-radius: 0 0 20px 0;
    clip-path: polygon(0 0, 29% 0, 62% 15%, 100% 15%, 100% 100%, 0 100%);
    background: ${({ theme }) => theme.color.red};
`;

RightWing.propTypes = {
    children: PropTypes.node.isRequired,
};
