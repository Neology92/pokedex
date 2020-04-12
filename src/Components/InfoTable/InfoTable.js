import React, { PureComponent } from 'react';
import { Table, Tr } from './styled';

const rows = [
    'Type',
    'Generation',
    'Ability',
    'Hidden Ab.',
    'Habitat',
    <span key="n">
        Evolution
        <br />
        Next form
    </span>,
    <span key="p">
        Evolution
        <br />
        Prev form
    </span>,
];

export default class InfoTable extends PureComponent {
    render() {
        return (
            <Table>
                {rows.map((row) => (
                    <Tr key={row}>
                        <th>{row}</th>
                        <td>a</td>
                    </Tr>
                ))}
            </Table>
        );
    }
}
