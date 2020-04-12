import styled from 'styled-components';

const Topping = styled.div`
    width: 100%;
    height: 154px;
    padding: 28px 0 0 13px;
    box-sizing: border-box;

    clip-path: polygon(100% 0, 100% 50%, 71% 50%, 28% 100%, 0 100%, 0 0);
    background: ${({ theme }) => theme.color.red};

    ${({ theme }) => theme.media.above.m} {
        padding: 50px 0 0 25px;
        height: 234px;

        border-radius: 20px 0;
    }
`;

const Inside = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 70%;

    padding: calc(16.67vw - 40px);

    ${({ theme }) => theme.media.above.s} {
        padding: 40px;
    }
`;

const Wrapper = styled.div`
    background: ${({ theme }) => theme.color.lightRed};
    padding-bottom: 60px;
    width: 100%;

    ${({ theme }) => theme.media.above.s} {
        width: 480px;
    }
    ${({ theme }) => theme.media.above.m} {
        padding: 0;
        height: 800px;
        width: 585px;
        border-radius: 20px 0 0 20px;
    }

    ${({ theme }) => theme.media.above.xl} {
        height: 875px;
    }
`;

export { Topping, Wrapper, Inside };
