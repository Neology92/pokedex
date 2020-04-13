import styled from 'styled-components';

const Wrapper = styled.nav`
    width: 100px;
    height: 21px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Button = styled.button`
    border: none;
    background: none;
    padding: 2px 5px;
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
`;
const Limit = styled.span`
    padding: 2px 5px 2px 0;
    margin: 0;
    width: 15px;

    color: ${({ theme }) => theme.color.grey[1]};
`;

export { Wrapper, Input, Button, Limit };
