import styled from 'styled-components';
import background from '../../Assets/Images/background.jpg';

const Graphics = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-image: url(${background});
    background-position: center;

    z-index: -3;
`;

const Filter = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -2;

    background-color: black;
    opacity: 0.65;
`;

export { Graphics, Filter };
