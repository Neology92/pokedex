import styled from 'styled-components';

const Wrapper = styled.div`
    min-width: 30%;
    max-width: 90%;
    min-height: 40px;
    padding: 5px 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.grey[4]};

    border-radius: 0 20px 20px 0;

    position: absolute;
    left: 0;
    bottom: 50px;
    z-index: 5;

    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: ${({ showed }) => (showed ? '0.7' : '0')};
    transform: ${({ showed }) =>
        showed ? 'translateX(0)' : 'translateX(-100%)'};
`;

export { Wrapper };
