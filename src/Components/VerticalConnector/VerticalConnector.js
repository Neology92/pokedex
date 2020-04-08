import styled from 'styled-components';

const VerticalConnector = styled.div`
    display: none;

    ${({ theme }) => theme.media.above.m} {
        display: block;

        margin-top: -15px;
        margin-bottom: 30px;
        position: relative;
        height: 872px;
        width: 36px;
        background: ${({ theme }) => theme.color.darkRed};
        border-radius: 20px;

        ::after {
            content: '';
            width: 12px;
            height: 850px;
            background: ${({ theme }) => theme.color.lightRed};
            border-radius: 20px;

            position: absolute;
            top: 11px;
            right: 0;
        }
    }
`;

export default VerticalConnector;
