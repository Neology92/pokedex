import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background: rgb(173, 173, 173, 0.73);

    ${({ theme }) => theme.media.above.s} {
        margin: 0 auto;
        width: 100vw;
        align-items: center;
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

const CrossButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 34px);
    grid-template-rows: repeat(3, 34px);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    & > *:nth-child(1) {
        grid-area: 1 / 2 / 2 / 3;
    }
    & > *:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
    }
    & > *:nth-child(3) {
        grid-area: 2 / 2 / 3 / 3;
        background: ${({ theme }) => theme.color.black};
        height: 50px;
    }
    & > *:nth-child(4) {
        grid-area: 2 / 3 / 3 / 4;
    }
    & > *:nth-child(5) {
        grid-area: 3 / 2 / 4 / 3;
    }
    ${({ theme }) => theme.media.above.m} {
        grid-template-columns: repeat(3, 42px);
        grid-template-rows: repeat(3, 42px);
    }
`;

const FilterButtonsGroup = styled.div`
    margin: 20px 0;
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 100px 100px;
    grid-column-gap: 16px;
`;

const GamepadButtonsGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 20px 20px 50px;
    grid-column-gap: 12px;
    grid-row-gap: 10px;

    align-items: center;

    & > *:nth-child(1) {
        grid-area: 1 / 1 / 3 / 2;
        justify-self: center;
    }
    & > *:nth-child(2) {
        grid-area: 2 / 2 / 3 / 3;
        justify-self: center;
    }
    & > *:nth-child(3) {
        grid-area: 3 /1 / 3 / 2;
    }
    & > *:nth-child(4) {
        grid-area: 3 / 2 / 4 / 3;
        justify-self: center;
    }
    & > *:nth-child(5) {
        grid-area: 1 / 3 / 4 / 4;
        justify-self: center;
    }

    ${({ theme }) => theme.media.above.m} {
        grid-template-rows: 30px 30px 50px;
        grid-column-gap: 16px;
        grid-row-gap: 20px;
    }
`;

export { Wrapper, FilterButtonsGroup, CrossButtons, GamepadButtonsGroup };
