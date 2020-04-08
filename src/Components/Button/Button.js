import styled from 'styled-components';

const Button = styled.button`
    min-width: 100px;

    padding: 8px 5px;

    background-color: ${(props) => props.color};

    border: none;
    border-radius: 50px;
    ${({ theme }) => theme.shadow[0]};

    &:hover {
        cursor: pointer;
    }

    ${({ theme }) => theme.media.above.l} {
        padding: 8px 20px;
    }
`;

export default Button;
