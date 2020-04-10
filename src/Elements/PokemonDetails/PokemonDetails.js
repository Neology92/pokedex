import React, { PureComponent } from 'react';
import Card from '../../Components/Card/Card';
import getPokemon from '../../Utils/getPokemon';

export default class PokemonDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {},
            isLoading: true,
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });

        const { data } = await getPokemon(1);
        this.setState({ pokemon: data });
        this.setState({ isLoading: false });
        console.log(data);
    }

    render() {
        const { isLoading, pokemon } = this.state;
        const { ...props } = this.props;

        return (
            <Card {...props}>
                {isLoading ? <h1>Loading...</h1> : <h1>{pokemon.name}</h1>}
            </Card>
        );
    }
}
