import styled from 'styled-components';
import Card from '../Card/Card';

const StyledCard = styled(Card)`
    height: 560px;

    ${({ theme }) => theme.media.above.m} {
        height: 70%;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20px 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 25px;

    & > *:nth-child(3) {
        grid-area: 2 / 1 / 3 / 3;
    }
    & > *:nth-child(4) {
        grid-area: 3 / 1 / 4 / 3;
    }

    ${({ theme }) => theme.media.above.l} {
        & > *:nth-child(3) {
            grid-area: 2 / 1 / 4 / 2;
        }
        & > *:nth-child(4) {
            grid-area: 2 / 2 / 4 / 3;
        }
    }
`;

const Name = styled.h2`
    padding: 0;
    margin: 0;
    text-transform: capitalize;
    font-size: calc(22px + 0.2vw);

    :first-child {
        text-align: right;
    }
`;

export { Wrapper, Name, StyledCard };
