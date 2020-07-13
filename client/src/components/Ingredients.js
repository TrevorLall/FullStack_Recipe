import React, { Component } from 'react'
import Title from './Title'

export default class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            slug: this.props.slug
        }
    }

    componentDidMount() {
        //get directions
        fetch('/api/ingredients/get?slug=' + this.state.slug)
            .then(res => res.json())
            .then(ingredients => this.setState({ ingredients },
                () => console.log('Single recipe feteched... ', ingredients)));
    }
    render() {
        console.log(this.props);
        return (
            <>
                <Title title="Ingredients List"></Title>
                <ul>
                    {this.state.ingredients.map(ingredients =>
                        <li key={ingredients.id}>
                            <h6>

                                {ingredients.ingredientName}
                                {ingredients.ingredientAmount}
                                {ingredients.ingredientMeasurement}</h6>
                        </li>)}
                </ul>
            </>
        )
    }
}
