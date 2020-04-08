import styled from 'styled-components';

const Button = styled.button`
    min-width: 100px;

    padding: 8px 20px;
    margin: 10px 18px;

    background-color: ${(props) => props.color};

    border: none;
    border-radius: 50px;
    ${({ theme }) => theme.shadow[0]}
`;

export default Button;
