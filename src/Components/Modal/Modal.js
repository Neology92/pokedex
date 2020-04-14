import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Window, Background } from './styled';

export default class Modal extends PureComponent {
    render() {
        const { children, open, closeModal } = this.props;

        return (
            <Wrapper open={open}>
                <Background onClick={closeModal} />
                <Window>{children}</Window>
            </Wrapper>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
