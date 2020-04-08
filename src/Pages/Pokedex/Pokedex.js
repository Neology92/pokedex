import React from 'react';
import {
    LeftWing,
    RightWing,
    VerticalConnector,
    Button,
    Card,
    ArrowButton,
} from '../../Components';
import { Wrapper, FilterButtonsGroup, CrossButtons } from './styled';

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
                    <Button color="#DDCE43">text</Button>
                    <Button color="#FB2EFF">text</Button>
                    <Button color="#77DE82">text</Button>
                    <CrossButtons>
                        <ArrowButton direction="top" />
                        <ArrowButton direction="left" />
                        <div />
                        <ArrowButton direction="right" />
                        <ArrowButton direction="bottom" />
                    </CrossButtons>
                </LeftWing>
                <VerticalConnector />
                <RightWing>
                    <FilterButtonsGroup>
                        <Button color="#48CB4D">text</Button>
                        <Button color="#FA9C45">text</Button>
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

export default Pokedex;
