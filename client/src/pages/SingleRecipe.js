import React, { Component } from 'react'

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            recipes: []
        }
    }
    componentDidMount() {
        fetch('/api/recipes/get?slug=' + this.state.slug)
            .then(res => res.json())
            .then(recipes => this.setState({ recipes },
                () => console.log('Single recipe feteched... ', recipes)));
    }
    render() {

        return (
            <ul>
                {this.state.recipes.map(recipes =>
                    <li key={recipes.id}>
                        <img height="255" width="275" src={recipes.image} alt="Food"></img>
                    </li>)}
            </ul>
        )
    }
}
