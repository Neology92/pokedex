import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight, ArrowTop, ArrowBottom } from './styled';

export default class ArrowButton extends PureComponent {
    renderArrow() {
        const { direction } = this.props;

        switch (direction) {
            case 'left':
                return <ArrowLeft />;
            case 'right':
                return <ArrowRight />;
            case 'top':
                return <ArrowTop />;
            case 'bottom':
                return <ArrowBottom />;
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
};
