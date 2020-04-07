import styled from 'styled-components';
import React from 'react';
import Home from './Pages/Home';
import GlobalStyles from './Assets/Styles/GlobalStyles';

import './Assets/Styles/VT323.css';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <GlobalStyles />
                <h1>App</h1>
                <hr />
                <Home />
                <Rectangle />
            </div>
        );
    }
}

const Rectangle = styled.div`
    width: 200px;
    height: 100px;

    background: red;
`;

export default App;
