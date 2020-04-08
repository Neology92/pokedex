import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import Pokedex from './Pages/Pokedex';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import theme from './Assets/Styles/theme';

import './Assets/Styles/VT323.css';

class App extends React.PureComponent {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Pokedex />
                </Container>
            </ThemeProvider>
        );
    }
}

const Container = styled.main`
    width: 100vw;

    ${theme.media.above.xl} {
        margin: 0 auto;
        width: 80vw;
    }
`;

export default App;
