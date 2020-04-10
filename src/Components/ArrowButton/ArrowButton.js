import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight, ArrowTop, ArrowBottom } from './styled';

export default class ArrowButton extends PureComponent {
    renderArrow() {
        const { direction, onClick } = this.props;

        switch (direction) {
            case 'left':
                return <ArrowLeft onClick={onClick} />;
            case 'right':
                return <ArrowRight onClick={onClick} />;
            case 'top':
                return <ArrowTop onClick={onClick} />;
            case 'bottom':
                return <ArrowBottom onClick={onClick} />;
            default:
                return null;
        }
    }

    render() {
        return <>{this.renderArrow()}</>;
    }
}

ArrowButton.propTypes = {
    direction: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

ArrowButton.defaultProps = {
    onClick: null,
};
