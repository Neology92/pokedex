import styled from 'styled-components';

const VerticalConnector = styled.div`
    display: none;

    ${({ theme }) => theme.media.above.m} {
        display: block;

        margin-top: -15px;
        margin-bottom: 30px;

        height: 872px;
        width: 36px;

        background: ${({ theme }) => theme.color.darkRed};
        border-radius: 20px;

        position: relative;
        ::after {
            content: '';
            width: 12px;
            height: 98%;
            background: ${({ theme }) => theme.color.lightRed};
            border-radius: 20px;

            position: absolute;
            top: 11px;
            right: 0;
        }

        ${({ theme }) => theme.media.above.m} {
            height: 812px;
        }

        ${({ theme }) => theme.media.above.xl} {
            height: 872px;
        }
    }
`;

export default VerticalConnector;
