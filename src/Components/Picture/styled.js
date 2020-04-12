import styled from 'styled-components';
import Img from 'react-image';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.grey[2]};
    background: ${({ theme }) => theme.color.grey[0]};

    position: relative;
    ::after {
        content: '';
        display: block;

        width: 140px;
        height: 60px;
        background: ${({ theme }) => theme.color.grey[1]};
        border-radius: 50%;

        position: absolute;
        bottom: 7%;
        left: calc(50% - 70px);
        z-index: 0;

        ${({ theme }) => theme.media.above.m} {
            height: 70px;
            bottom: 14%;
        }

        ${({ theme }) => theme.media.above.xl} {
            bottom: 18%;
        }
    }
`;

const StyledImg = styled(Img)`
    height: 70%;
    max-height: 180px;
    z-index: 1;

    ${({ theme }) => theme.media.above.m} {
        max-height: none;
        height: auto;
        width: 70%;
    }
`;

const Placeholder = styled(StyledImg)`
    height: 90px;
    width: 90px;
    filter: grayscale(1) contrast(0) blur(2px) brightness(0.4) invert();
    transform: scale(1.5);
`;

export { Wrapper, StyledImg, Placeholder };
