/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    box-sizing: border-box;
    width: 100%;
    height: 760px;

    padding: 20px;
    margin-top: -40px;

    clip-path: polygon(0 0, 29% 0, 62% 5%, 100% 5%, 100% 100%, 0 100%);
    background: ${({ theme }) => theme.color.red};

    ${({ theme }) => theme.media.above.m} {
        padding: 40px;
    }

    ${({ theme }) => theme.media.above.m} {
        width: 585px;
        height: 685px;
        margin-top: 115px;
        border-radius: 0 0 20px 0;
        clip-path: polygon(0 0, 29% 0, 62% 15%, 100% 15%, 100% 100%, 0 100%);
    }

    ${({ theme }) => theme.media.above.xl} {
        height: 760px;
    }
`;

export { Wrapper };
