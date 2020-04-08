import styled from 'styled-components';
import React from 'react';
import { LeftWing, RightWing, VerticalConnector } from '../Components';

class Pokedex extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <LeftWing>left</LeftWing>
                <VerticalConnector />
                <RightWing>right</RightWing>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ${({ theme }) => theme.media.above.m} {
        height: 100vh;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background: black;
    }
`;

export default Pokedex;
