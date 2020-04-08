import styled from 'styled-components';
import React from 'react';
import {
    LeftWing,
    RightWing,
    VerticalConnector,
    Button,
    Card,
} from '../Components';

class Pokedex extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <LeftWing>
                    <Card
                        width="100%"
                        height="75%"
                        style={{ marginBottom: '20px' }}
                    >
                        inner
                    </Card>
                    <Button color="#0FEAC9">text</Button>
                    <Button color="#0FEAC9">text</Button>
                    <Button color="#0FEAC9">text</Button>
                    <Button color="#0FEAC9">text</Button>
                </LeftWing>
                <VerticalConnector />
                <RightWing>
                    <FilterButtonsGroup>
                        <Button color="#0FEAC9">text</Button>
                        <Button color="#0FEAC9">text</Button>
                    </FilterButtonsGroup>
                    <Card
                        width="100%"
                        height="85%"
                        style={{ alignSelf: 'end' }}
                    >
                        inner
                    </Card>
                </RightWing>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: rgb(173, 173, 173, 0.73);

    ${({ theme }) => theme.media.above.s} {
        padding: 0 10vw;
        width: 80vw;
    }

    ${({ theme }) => theme.media.above.m} {
        padding: 0;
        width: 100vw;

        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    ${({ theme }) => theme.media.above.l} {
        margin: 0 auto;
        min-width: 1330px;
        width: 90vw;
    }

    ${({ theme }) => theme.media.above.xl} {
        width: 80vw;
    }
`;

const FilterButtonsGroup = styled.div`
    margin: 20px 0;
`;

export default Pokedex;
