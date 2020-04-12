/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    box-sizing: border-box;
    width: 100%;
    height: 850px;

    padding: calc(16.67vw - 40px);

    margin-top: -50px;

    clip-path: polygon(0 0, 29% 0, 62% 5%, 100% 5%, 100% 100%, 0 100%);
    background: ${({ theme }) => theme.color.red};

    ${({ theme }) => theme.media.above.s} {
        width: 480px;
        height: 700px;
        padding: 40px;
    }

    ${({ theme }) => theme.media.above.m} {
        width: 585px;
        height: 700px;
        margin-top: 100px;
        border-radius: 0 0 20px 0;
        clip-path: polygon(0 0, 29% 0, 62% 15%, 100% 15%, 100% 100%, 0 100%);
    }

    ${({ theme }) => theme.media.above.xl} {
        height: 760px;
        margin-top: 115px;
    }
`;

export { Wrapper };
