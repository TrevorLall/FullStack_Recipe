import React, { Component } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.slug,
            recipes: []
        }
    }

    componentDidMount() {
        //get recipes
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
                        <h2>{recipes.title}</h2>
                        <h3>{recipes.description}</h3>
                    </li>)}
            </ul>
        )
    }
}
