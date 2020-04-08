import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import theme from './Assets/Styles/theme';
import Pokedex from './Pages/Pokedex/Pokedex';
import { Background } from './Components';

import './Assets/Styles/VT323.css';

class App extends React.PureComponent {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Background />
                    <Pokedex />
                </Container>
            </ThemeProvider>
        );
    }
}

const Container = styled.main`
    width: 100vw;
`;

export default App;
