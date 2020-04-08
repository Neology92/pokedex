import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CameraEye from '../CameraEye/CameraEye';

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

const Topping = styled.div`
    width: 100%;
    height: 154px;
    padding: 28px 0 0 13px;
    box-sizing: border-box;

    clip-path: polygon(100% 0, 100% 50%, 71% 50%, 28% 100%, 0 100%, 0 0);
    background: ${({ theme }) => theme.color.red};

    ${({ theme }) => theme.media.above.m} {
        padding: 50px 0 0 25px;
        height: 234px;

        border-radius: 20px 0;
    }
`;

const Inside = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 70%;

    /* clip-path: polygon(100% 0, 100% 64%, 71% 64%, 28% 100%, 0 100%, 0 0); */
    /* background: ${({ theme }) => theme.color.red}; */
    padding: 20px;

    ${({ theme }) => theme.media.above.s}{
    padding: 40px;

    }

`;

const Wrapper = styled.div`
    background: ${({ theme }) => theme.color.lightRed};
    width: 100%;
    height: 875px;

    ${({ theme }) => theme.media.above.m} {
        width: 585px;
        height: 800px;
        border-radius: 20px 0 0 20px;
    }

    ${({ theme }) => theme.media.above.xl} {
        width: 585px;
        height: 875px;
        border-radius: 20px 0 0 20px;
    }
`;

LeftWing.propTypes = {
    children: PropTypes.node.isRequired,
};
