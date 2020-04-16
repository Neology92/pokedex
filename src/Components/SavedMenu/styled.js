import styled from 'styled-components';

const GridWrapper = styled.div`
    max-height: 260px;
    display: grid;
    overflow-y: scroll;

    grid-template-columns: repeat(2, 80px);
    grid-template-rows: 80px;
    grid-column-gap: calc(25vw - 75px);
    grid-row-gap: 10px;

    ${({ theme }) => theme.media.above.s} {
        grid-template-columns: repeat(3, 80px);
        grid-column-gap: 20px;
    }

    ${({ theme }) => theme.media.above.m} {
        grid-column-gap: calc(4.55vw - 30px);
    }

    ${({ theme }) => theme.media.above.l} {
        grid-column-gap: 30px;
    }

    ${({ theme }) => theme.media.above.xl} {
        grid-template-columns: repeat(3, 90px);
        grid-template-rows: 90px;
    }
`;

export { GridWrapper };
