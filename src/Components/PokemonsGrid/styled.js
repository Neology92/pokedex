import styled from 'styled-components';
import Card from '../Card/Card';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(7, 80px);
    grid-column-gap: calc(25vw - 75px);
    grid-row-gap: 10px;

    ${({ theme }) => theme.media.above.s} {
        grid-template-columns: repeat(4, 80px);
        grid-template-rows: repeat(5, 80px) 30px;
        grid-column-gap: 20px;
    }

    ${({ theme }) => theme.media.above.m} {
        grid-column-gap: calc(4.55vw - 30px);
    }

    ${({ theme }) => theme.media.above.l} {
        grid-column-gap: 30px;
    }

    ${({ theme }) => theme.media.above.xl} {
        grid-template-columns: repeat(4, 90px);
        grid-template-rows: repeat(5, 90px);
    }
`;

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { Grid, Wrapper };
