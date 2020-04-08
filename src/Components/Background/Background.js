import React, { PureComponent } from 'react';
import { Graphics, Filter } from './styled';

export default class Background extends PureComponent {
    render() {
        return (
            <>
                <Graphics />
                <Filter />
            </>
        );
    }
}
