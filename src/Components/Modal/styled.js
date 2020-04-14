import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    transition: opacity 0.1s ease-in-out;

    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? 'inherit' : 'none')};

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    background: ${({ theme }) => theme.color.black};
    opacity: 0.7;
`;

const Window = styled.div`
    min-width: 40%;
    max-width: 70%;
    min-height: 10%;
    max-height: 60%;
    z-index: 1;

    padding: 20px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.grey[2]};
    background: ${({ theme }) => theme.color.white};

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export { Wrapper, Window, Background };
