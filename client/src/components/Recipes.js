import React, { Component } from 'react'

export default class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        fetch('/api/recipes')
            .then(res => res.json())
            .then(recipes => this.setState({ recipes },
                () => console.log('customers feteched... ', recipes)));
    }

    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <ul>
                    {this.state.recipes.map(recipes =>
                        <li key={recipes.id}>
                            <h3>{recipes.title}</h3>
                            <p>{recipes.description}</p>
                            <p>{recipes.typeOf}</p>
                            <h6>Servings: {recipes.servings}</h6>
                            <h6>Preptime: {recipes.prepTime} mins</h6>
                            <h6>Cooktime: {recipes.cooktime} mins</h6>
                        </li>)}
                </ul>
            </div>
        )
    }
}
