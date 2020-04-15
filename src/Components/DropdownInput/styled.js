import styled from 'styled-components';

const Select = styled.select`
    background: none;
    border: none;
    cursor: pointer;
    min-width: 140px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.grey[3]};
`;

const Option = styled.option`
    text-transform: capitalize;
`;

export { Select, Option };
