import styled from 'styled-components';

const Name = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;

    width: 100%;
    height: 100%;

    text-align: center;
    line-height: 400%;

    opacity: 0;
    background: ${({ theme }) => theme.color.black};

    font-size: calc(16px + 0.1vw);
    color: ${({ theme }) => theme.color.white};

    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.grey[2]};

    transition: opacity 0.1s ease-in-out;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.button`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.grey[2]};

    cursor: pointer;
    background: transparent;

    position: relative;

    &:hover ${Name} {
        opacity: 0.7;
    }
`;

export { Wrapper, Img, Name };
