import styled from 'styled-components';

const Card = styled.section`
    overflow: hidden;

    width: 100%;
    height: ${({ height }) => height || '100px'};

    box-sizing: border-box;
    padding: 20px 15px;

    border-radius: 20px;
    background: ${({ color, theme }) => color || theme.color.white};
    ${({ theme }) => theme.shadow[0]}

    position: relative;
    ::before {
        content: '';
        width: 6px;
        height: 6px;

        border: 1px solid black;
        border-radius: 150px;
        background: red;

        position: absolute;
        top: 10px;
        right: 25px;
    }
    ::after {
        content: '';
        width: 6px;
        height: 6px;

        border: 1px solid black;
        border-radius: 150px;
        background: red;

        position: absolute;
        top: 10px;
        right: 12px;
    }
`;

export default Card;
