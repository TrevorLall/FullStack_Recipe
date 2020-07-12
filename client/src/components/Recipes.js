import React, { Component } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

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
                () => console.log('Recipes feteched... ', recipes)));
    }

    render() {
        return (

            <div>
                <h2>Recipes</h2>
                <ul>
                    <Card>
                        {this.state.recipes.map(recipes =>
                            <li key={recipes.id}>
                                <img height="255" width="275" src={recipes.image} alt="Food"></img>
                                <Link to={`/recipes/${recipes.slug}`} className="btn-primary room-link">Features</Link>
                                <Card.Footer className="shadow-lg p-3 bg-warning text-dark">{recipes.title}</Card.Footer>
                            </li>)}
                    </Card>
                </ul>
            </div>
        )
    }
}
