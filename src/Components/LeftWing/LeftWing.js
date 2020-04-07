import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class LeftWing extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <Wrapper>
                <Topping>.</Topping>
                <Inside>{children}</Inside>
            </Wrapper>
        );
    }
}

const Topping = styled.div`
    width: 100%;
    height: 234px;

    border-radius: 20px 0;
    clip-path: polygon(100% 0, 100% 50%, 71% 50%, 28% 100%, 0 100%, 0 0);
    background: ${({ theme }) => theme.color.red};
`;

const Inside = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 640px;

    /* clip-path: polygon(100% 0, 100% 64%, 71% 64%, 28% 100%, 0 100%, 0 0); */
    /* background: ${({ theme }) => theme.color.red}; */
    padding: 40px;
`;

const Wrapper = styled.div`
    width: 585px;
    height: 875px;

    border-radius: 20px 0 0 20px;

    background: ${({ theme }) => theme.color.lightRed};
`;

LeftWing.propTypes = {
    children: PropTypes.node.isRequired,
};
