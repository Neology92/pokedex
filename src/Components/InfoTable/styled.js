import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    text-align: left;
    color: ${({ theme }) => theme.color.grey[3]};
`;

const Tr = styled.tr`
    border-bottom: 1px solid ${({ theme }) => theme.color.grey[2]};

    :last-child {
        border-bottom: none;
    }

    * {
        font-size: calc(17.5px + 0.1vw) !important;
        padding: 6px 0;
        width: 50%;
    }
`;

export { Table, Tr };
