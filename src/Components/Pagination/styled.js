import styled from 'styled-components';

const Wrapper = styled.nav`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;

    & > *:nth-child(1) {
        align-self: flex-end;
        justify-self: flex-end;
    }
    & > *:nth-child(2) {
        align-self: flex-end;
        justify-self: flex-start;
    }
    & > *:nth-child(3) {
        align-self: center;
        justify-self: center;
    }
    & > *:nth-child(4) {
        align-self: center;
        justify-self: center;
    }

    & > * {
        font-size: 25px;
    }

    ${({ theme }) => theme.media.above.s} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 120px;

        margin: 10px auto;
        grid-area: 6 / 1 / 7 / 5;

        & > * {
            font-size: inherit;
        }

        & > *:nth-child(1) {
            order: 2;
            align-self: center;
            justify-self: center;
        }
        & > *:nth-child(2) {
            order: 3;
            align-self: center;
            justify-self: center;
        }
        & > *:nth-child(3) {
            order: 1;
        }
        & > *:nth-child(4) {
            order: 4;
        }
    }
`;

const Button = styled.button`
    border: none;
    background: none;
    padding: 2px 10px;
    margin: 0;

    color: ${({ theme }) => theme.color.grey[3]};

    cursor: pointer;
`;
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.grey[2]};
    background: none;
    padding: 2px 5px;
    margin: 0;
    width: 15px;

    color: ${({ theme }) => theme.color.grey[4]};

    height: 22px;
    font-size: 22px;

    ${({ theme }) => theme.media.above.s} {
        height: inherit;
        font-size: inherit;
    }
`;
const Limit = styled.span`
    padding: 2px 5px 2px 0;
    margin: 0;
    width: 15px;

    color: ${({ theme }) => theme.color.grey[1]};
`;

export { Wrapper, Input, Button, Limit };
