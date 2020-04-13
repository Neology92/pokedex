/* eslint no-unused-vars: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Button, Limit } from './styled';

export default class Pagination extends PureComponent {
    constructor(props) {
        super(props);
        const { page } = this.props;
        this.state = {
            inputValue: page,
        };
        this.setInputValue = this.setInputValue.bind(this);
        this.onSubmitPage = this.onSubmitPage.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { page } = this.props;
        if (prevProps.page !== page) {
            this.setInputValue(page);
        }
    }

    onSubmitPage(e) {
        const { inputValue } = this.state;
        const { setPage } = this.props;

        e.preventDefault();
        setPage(inputValue);
    }

    setInputValue(value) {
        const { maxPage, page } = this.props;
        let val = Number(value);
        if (Number.isNaN(val)) val = page;
        if (val > maxPage) val = maxPage;

        this.setState({
            inputValue: val,
        });
    }

    render() {
        const { setPage, page, maxPage } = this.props;
        const { inputValue } = this.state;

        return (
            <Wrapper>
                <form action="" onSubmit={this.onSubmitPage}>
                    <Input
                        value={inputValue}
                        onChange={(e) => this.setInputValue(e.target.value)}
                    />
                </form>
                <Limit>/{maxPage}</Limit>
                <Button
                    type="button"
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    {'<'}
                </Button>
                <Button
                    type="button"
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
