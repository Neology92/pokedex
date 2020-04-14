import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownInput from '../DropdownInput/DropdownInput';
import Button from '../Button/Button';
import { StyledTable } from './styled';

export default class SortMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'id',
            sortDirection: 'normal',
        };

        this.setDropdownValue = this.setDropdownValue.bind(this);
        this.sort = this.sort.bind(this);
    }

    setDropdownValue(field, val) {
        this.setState({
            [field]: val,
        });
    }

    sort() {
        const { sortPokemons } = this.props;
        const { sortBy, sortDirection } = this.state;

        sortPokemons(sortBy, sortDirection);
    }

    render() {
        const { sortBy, sortDirection } = this.state;

        return (
            <StyledTable>
                <tbody>
                    <tr>
                        <th>Sort By</th>
                        <td>
                            <DropdownInput
                                name="sortBy"
                                options={['id', 'name']}
                                value={sortBy}
                                setValue={(val) =>
                                    this.setDropdownValue('sortBy', val)
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Direction</th>
                        <td>
                            <DropdownInput
                                name="direction"
                                options={['normal', 'reversed']}
                                value={sortDirection}
                                setValue={(val) =>
                                    this.setDropdownValue('sortDirection', val)
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                                onClick={this.sort}
                                color="#52FF36"
                                style={{ marginTop: '10px' }}
                            >
                                Go
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </StyledTable>
        );
    }
}

SortMenu.propTypes = {
    sortPokemons: PropTypes.func.isRequired,
};
