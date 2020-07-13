import React, { Component } from 'react'
import Title from './Title'
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

    getInfo() {
        let title = this.state.recipes.map((item => {
            return item.title;
        }));
        let image = this.state.recipes.map((item => {
            return item.image;
        }));
        let servings = this.state.recipes.map((item => {
            return item.servings;
        }));
        let typeOf = this.state.recipes.map((item => {
            return item.typeOf;
        }));
        let prepTime = this.state.recipes.map((item => {
            return item.prepTime;
        }));
        let cookTime = this.state.recipes.map((item => {
            return item.cookTime;
        }));

        return {
            title,
            image,
            servings,
            typeOf,
            prepTime,
            cookTime
        }
    }

    render() {
        const info = this.getInfo();
        const totalTime = parseInt(info.prepTime);
        return (
            <div>
                <h2>{info.title}</h2>
                <img src={info.image} alt="Recipe Image"></img>
                <h6>{info.typeOf}</h6>
                <Title title="nutirition"></Title>
                <h3>{info.prepTime}</h3>
                <h3>{info.cookTime}</h3>
                <h3>{totalTime}</h3>
                <h3>{info.servings}</h3>
            </div>
        )
    }
}
