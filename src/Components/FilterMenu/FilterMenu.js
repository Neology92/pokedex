import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownInput from '../DropdownInput/DropdownInput';
import Button from '../Button/Button';
import pokeApiQuery from '../../Utils/pokeApiQuery';
import { StyledTable } from './styled';

const fieldNames = [
    'type',
    'pokemon-habitat',
    'ability',
    'pokemon-shape',
    'generation',
];

export default class FilterMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: {
                type: false,
                'pokemon-habitat': false,
                ability: false,
                'pokemon-shape': false,
                generation: false,
            },
            options: {
                type: [],
                'pokemon-habitat': [],
                ability: [],
                'pokemon-shape': [],
                generation: [],
            },
            filters: {
                type: 'any',
                'pokemon-habitat': 'any',
                ability: 'any',
                'pokemon-shape': 'any',
                generation: 'any',
            },
        };

        this.setDropdownValue = this.setDropdownValue.bind(this);
        this.fetchOption = this.fetchOption.bind(this);
        this.filter = this.filter.bind(this);
        this.isReady = this.isReady.bind(this);
    }

    componentDidMount() {
        fieldNames.forEach((fieldName) => {
            this.fetchOption(fieldName);
        });
    }

    setDropdownValue(field, val) {
        const { filters } = this.state;
        this.setState({
            filters: {
                ...filters,
                [field]: val,
            },
        });
    }

    async fetchOption(option) {
        const {
            data: { results },
        } = await pokeApiQuery(`${option}?limit=999`);

        const { options, isLoaded } = this.state;
        isLoaded[option] = true;
        this.setState({
            isLoaded,
            options: {
                ...options,
                [option]: [{ name: 'any' }, ...results],
            },
        });
    }

    filter() {
        const { filterPokemons } = this.props;
        const { filters } = this.state;

        const conditions = [];
        const fields = Object.keys(filters);

        if (this.isReady()) {
            fields.forEach((field) => {
                const value = filters[field];

                if (value !== 'any') {
                    conditions.push({
                        field,
                        value,
                    });
                }
            });

            filterPokemons(conditions);
        }
    }

    isReady() {
        const { isLoaded } = this.state;

        let isOk = true;
        Object.values(isLoaded).forEach((val) => {
            if (!val) {
                isOk = false;
            }
        });

        return isOk;
    }

    render() {
        const { filters, options } = this.state;

        return (
            <StyledTable>
                <tbody>
                    {fieldNames.map((key) => (
                        <tr key={key}>
                            <th>{key}</th>
                            <td>
                                <DropdownInput
                                    name={key}
                                    options={
                                        this.isReady()
                                            ? options[key].map((el) => el.name)
                                            : []
                                    }
                                    value={filters[key]}
                                    setValue={(val) =>
                                        this.setDropdownValue([key], val)
                                    }
                                />
                            </td>
                        </tr>
                    ))}

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

FilterMenu.propTypes = {
    filterPokemons: PropTypes.func.isRequired,
};
