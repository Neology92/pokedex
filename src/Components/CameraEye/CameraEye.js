import React, { PureComponent } from 'react';
import { Border, Lens } from './styled';

export default class CameraEye extends PureComponent {
    render() {
        return (
            <Border>
                <Lens />
            </Border>
        );
    }
}
