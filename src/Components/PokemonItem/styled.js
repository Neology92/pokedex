import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.grey[2]};
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
`;
const Name = styled.span`
    display: none;
`;

export { Wrapper, Img, Name };
