import React, { PureComponent } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import DropdownInput from '../DropdownInput/DropdownInput';
import Button from '../Button/Button';
import { StyledTable } from './styled';

export default class FilterMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            type: 'any',
            habitat: 'any',
            ability: 'any',
            shape: 'any',
            generation: 'any',
        };

        this.setDropdownValue = this.setDropdownValue.bind(this);
        this.filter = this.filter.bind(this);
    }

    setDropdownValue(field, val) {
        this.setState({
            [field]: val,
        });
    }

    // eslint-disable-next-line
    filter() {
        // const { sortPokemons } = this.props;
        // const { sortBy, sortDirection } = this.state;
        // sortPokemons(sortBy, sortDirection);
    }

    render() {
        const { type, habitat, ability, shape, generation } = this.state;

        return (
            <StyledTable>
                <tbody>
                    <tr>
                        <th>Type</th>
                        <td>
                            <DropdownInput
                                name="Type"
                                options={['any', 'a', 'b', 'c']}
                                value={type}
                                setValue={(val) =>
                                    this.setDropdownValue('type', val)
                                }
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>Habitat</th>
                        <td>
                            <DropdownInput
                                name="Habitat"
                                options={['any', 'a', 'b', 'c']}
                                value={habitat}
                                setValue={(val) =>
                                    this.setDropdownValue('habitat', val)
                                }
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>Ability</th>
                        <td>
                            <DropdownInput
                                name="Ability"
                                options={['any', 'a', 'b', 'c']}
                                value={ability}
                                setValue={(val) =>
                                    this.setDropdownValue('ability', val)
                                }
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>Shape</th>
                        <td>
                            <DropdownInput
                                name="Shape"
                                options={['any', 'a', 'b', 'c']}
                                value={shape}
                                setValue={(val) =>
                                    this.setDropdownValue('shape', val)
                                }
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>Generation</th>
                        <td>
                            <DropdownInput
                                name="Generation"
                                options={['any', 'a', 'b', 'c']}
                                value={generation}
                                setValue={(val) =>
                                    this.setDropdownValue('generation', val)
                                }
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Button
                                onClick={this.filter}
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

FilterMenu.propTypes = {};
