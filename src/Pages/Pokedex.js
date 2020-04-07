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
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default Pokedex;
