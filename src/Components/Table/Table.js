import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    text-transform: capitalize;
    text-align: left;
    color: ${({ theme }) => theme.color.grey[3]};

    tr {
        border-bottom: 1px solid ${({ theme }) => theme.color.grey[2]};
        :last-child {
            border-bottom: none;
        }

        * {
            font-size: calc(17.5px + 0.1vw) !important;
            padding: 6px 0;
            width: 50%;
        }
        th {
            padding: 6px 100px 6px 0;
        }

        ${({ theme }) => theme.media.above.s} {
            th {
                padding: 6px 0px;
            }
        }
        ${({ theme }) => theme.media.above.m} {
            th {
                padding: 6px 50px 6px 0;
            }
        }
    }
`;

export default Table;
