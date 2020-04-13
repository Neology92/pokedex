import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

export default class Info extends PureComponent {
    render() {
        const { children, showed } = this.props;

        return <Wrapper showed={showed}>{children}</Wrapper>;
    }
}

Info.propTypes = {
    children: PropTypes.node.isRequired,
    showed: PropTypes.bool.isRequired,
};
