import styled from 'styled-components';

const Pokeball = styled.button`
    box-sizing: border-box;
    width: 55px;
    height: 55px;
    padding: 0;

    border: 2px solid black;
    border-radius: 150px;

    background: white;

    position: relative;
    overflow: hidden;

    ${({ theme }) => theme.shadow[0]};
    cursor: pointer;

    transition: transform 0.08s ease-in-out, box-shadow 0.08s ease-in-out;
    &:active {
        box-shadow: none;
        transform: translateY(2px);
    }

    &:before {
        content: '';
        width: 100%;
        height: 50%;

        background: #f33d3d;
        border-bottom: 2px solid #000000;

        position: absolute;
        top: 0;
        left: 0;

        z-index: 1;
    }

    &:after {
        content: '';
        width: 10%;
        height: 10%;

        background: #ffffff;
        border: 2px solid #000000;
        border-radius: 150px;

        position: absolute;
        top: calc(45% - 1px);
        left: calc(45% - 2px);

        z-index: 2;
    }

    ${({ theme }) => theme.media.above.m} {
        width: 80px;
        height: 80px;
        border: 3px solid black;
        &:before {
            border-bottom: 3px solid #000000;
        }

        &:after {
            border: 3px solid #000000;
        }
    }
`;

export default Pokeball;
