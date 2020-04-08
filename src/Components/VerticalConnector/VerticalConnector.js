import styled from 'styled-components';

const VerticalConnector = styled.div`
    display: none;

    margin-bottom: 30px;

    height: 872px;
    width: 30px;

    background: ${({ theme }) => theme.color.darkRed};
    border-radius: 20px;

    position: relative;
    overflow: hidden;
    ::after {
        content: '';
        width: 12px;
        height: 100%;
        background: ${({ theme }) => theme.color.lightRed};
        border-radius: 20px;

        position: absolute;
        /* top: 11px; */
        right: 0;
    }
    ::before {
        content: '';
        width: 50px;
        height: 50px;
        background: ${({ theme }) => theme.color.darkRed};
        border-radius: 150px;

        position: absolute;
        bottom: -24px;
        right: -8px;
        z-index: 1;
    }

    ${({ theme }) => theme.media.above.m} {
        display: block;
    }

    ${({ theme }) => theme.media.above.m} {
        height: 812px;
    }

    ${({ theme }) => theme.media.above.xl} {
        height: 872px;
    }
`;

export default VerticalConnector;
