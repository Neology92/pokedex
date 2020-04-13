/* eslint no-unused-vars: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Button, Limit } from './styled';

export default class Pagination extends PureComponent {
    render() {
        const { setPage, page, maxPage } = this.props;

        return (
            <Wrapper>
                <Button
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    {'<'}
                </Button>
                {/* <Input
                    onSubmit={(e) => {
                        setPage(e.target.value);
                    }}
                >
                    a
                </Input> */}
                {/* <Limit>/{maxPage}</Limit> */}
                <Button
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    {'>'}
                </Button>
            </Wrapper>
        );
    }
}

Pagination.propTypes = {
    setPage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
};
