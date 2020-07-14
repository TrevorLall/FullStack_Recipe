import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Recipesthumbnail from './Recipesthumbnail'
import Title from './Title'

export default class RecipesList extends Component {
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
                () => console.log('Recipes feteched... ', recipes)));
    }

    render() {
        return (
            <>
                <Title title="Recipes" align="section-title-center"></Title>
                <section className="recipeslist">
                    <div className="recipeslist-center">
                        {this.state.recipes.map(recipes => {
                            return <Recipesthumbnail key={recipes.id} title={recipes.title} image={recipes.image} slug={recipes.slug} />
                        })}
                    </div>
                </section>
            </>
        )
    }
}
