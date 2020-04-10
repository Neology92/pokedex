import styled from 'styled-components';

const Button = styled.button`
    min-width: 100px;
    padding: 8px 5px;

    background-color: ${(props) => props.color};

    border: none;
    border-radius: 50px;

    ${({ theme }) => theme.shadow[0]};
    cursor: pointer;

    transition: transform 0.08s ease-in-out, box-shadow 0.08s ease-in-out;
    &:active {
        box-shadow: none;
        transform: translateY(2px);
    }

    ${({ theme }) => theme.media.above.l} {
        padding: 8px 20px;
    }
`;

export default Button;
