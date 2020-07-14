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
                <div className="ingredient-info">
                    <Title title="Ingredients List" align=""></Title>
                    <ul>
                        <div className="ing-grid">
                            {this.state.ingredients.map(ingredients =>
                                <li key={ingredients.id}>
                                    <h6>{ingredients.ingredientAmount} {ingredients.ingredientMeasurement} {ingredients.ingredientName} </h6>
                                </li>)}
                        </div>

                    </ul>
                </div>

            </>
        )
    }
}
