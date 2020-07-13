import React, { Component } from 'react'
import Directions from '../components/Directions'
import Ingredients from '../components/Ingredients'
import Recipes from '../components/Recipes';


export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
        }
    }

    render() {
        return (
            <>
                <Recipes slug={this.state.slug}></Recipes>
                <Ingredients slug={this.state.slug}></Ingredients>
                <Directions slug={this.state.slug}></Directions>
            </>

        )
    }
}
