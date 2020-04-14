import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Select, Option } from './styled';

export default class DropdownInput extends PureComponent {
    render() {
        const { options, name, value, setValue } = this.props;

        return (
            <Select
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {options.map((option) => (
                    <Option key={option} option={option}>
                        {option}
                    </Option>
                ))}
            </Select>
        );
    }
}

DropdownInput.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};
