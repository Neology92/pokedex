import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import theme from './Assets/Styles/theme';
import Main from './Pages/Main';
import { Background } from './Components';

import './Assets/Styles/VT323.css';

class App extends React.PureComponent {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Background />
                    <Main />
                </Container>
            </ThemeProvider>
        );
    }
}

const Container = styled.main`
    width: 100vw;
`;

export default App;
