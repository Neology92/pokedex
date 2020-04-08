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
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 150px;
    background: ${({ theme }) => theme.color.white};
`;

const Lens = styled.div`
    position: relative;
    width: 66%;
    height: 66%;

    background: ${({ theme }) => theme.color.blue};
    border: 5px solid ${({ theme }) => theme.color.black};
    border-radius: 150px;

    ::after {
        content: '';
        width: 11%;
        height: 11%;
        border-radius: 150px;
        background: ${({ theme }) => theme.color.white};
        position: absolute;
        top: 42%;
        left: 42%;
    }

    ::before {
        content: '';
        width: 28%;
        height: 20%;
        border-radius: 150px;
        background: ${({ theme }) => theme.color.white};
        position: absolute;
        top: 18%;
        left: 21%;
        transform: rotate(-31deg);
    }

    ${({ theme }) => theme.media.above.m} {
        border: 7px solid ${({ theme }) => theme.color.black};
    }
`;
