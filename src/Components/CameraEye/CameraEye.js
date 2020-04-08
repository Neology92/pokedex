import styled from 'styled-components';
import React, { PureComponent } from 'react';

export default class CameraEye extends PureComponent {
    render() {
        return (
            <Border>
                <Lens />
            </Border>
        );
    }
}

const Border = styled.div`
    width: 155px;
    height: 155px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 150px;
    background: ${({ theme }) => theme.color.white};
`;

const Lens = styled.div`
    width: 100px;
    height: 100px;

    border: 7px solid ${({ theme }) => theme.color.black};

    border-radius: 150px;
    background: ${({ theme }) => theme.color.blue};

    position: relative;

    ::after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 150px;
        background: ${({ theme }) => theme.color.white};
        position: absolute;
        top: 42%;
        left: 42%;
    }

    ::before {
        content: '';
        width: 27px;
        height: 19px;
        border-radius: 150px;
        background: ${({ theme }) => theme.color.white};
        position: absolute;
        top: 15%;
        left: 21%;
        transform: rotate(-31deg);
    }
`;
