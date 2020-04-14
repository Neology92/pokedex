import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import Picture from '../Picture/Picture';
import Message from '../Message/Message';
import { Wrapper, Name, StyledCard } from './styled';
import setSprite from '../../Utils/setSprite';

const asThreeDigit = (num) => {
    return `0000${num}`.substr(-5);
};

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

export default class LeftScreen extends PureComponent {
    render() {
        const { pokemon, isReady, message, ...props } = this.props;

        return (
            <StyledCard {...props}>
                {isReady ? (
                    <Wrapper>
                        <Name>{pokemon.name}</Name>
                        <Name>#{asThreeDigit(pokemon.id)}</Name>
                        <Picture
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                            name={pokemon.name}
                            placeholder={setSprite(pokemon)}
                        />

                        <Table>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row}>
                                        <th>{row}</th>
                                        <td>a</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Message showed={message.show}>{message.text}</Message>
                    </Wrapper>
                ) : (
                    <>
                        <h1>Loading...</h1>
                        <Message showed={message.show}>{message.text}</Message>
                    </>
                )}
            </StyledCard>
        );
    }
}

LeftScreen.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        sprites: PropTypes.shape({
            front_default: PropTypes.string,
        }),
    }),

    message: PropTypes.shape({
        show: PropTypes.bool,
        text: PropTypes.string,
    }),

    isReady: PropTypes.bool.isRequired,
};

LeftScreen.defaultProps = {
    pokemon: { name: '', id: 0 },
    message: { show: false, text: '' },
};
