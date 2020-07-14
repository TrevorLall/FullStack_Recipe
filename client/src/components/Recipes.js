import React, { Component } from 'react'
import Title from './Title'
import Ingredients from './Ingredients'
import { FaClock } from 'react-icons/fa'
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
            return item.cooktime;
        }));
        let desc = this.state.recipes.map((item => {
            return item.description;
        }));

        return {
            title,
            image,
            servings,
            typeOf,
            prepTime,
            cookTime,
            desc
        }
    }

    render() {
        const info = this.getInfo();
        const totalTime = parseInt(info.prepTime) + parseInt(info.cookTime);
        return (
            <>
                <div className="single-recipe">
                    <Title title={info.title} align=""></Title>
                    <div></div>
                    <h6>{info.typeOf}</h6>
                    <div></div>
                    <div className="rec-image">
                        <img src={info.image} alt="Recipe Image"></img>
                    </div>
                    <div className="nutri-info">
                        <Title title="description" align="section-title-center"></Title>
                        <p>
                            {info.desc}
                        </p>
                        <FaClock className="fa fa-clock-o"></FaClock>

                        <Title title="nutirition" align="section-title-center"></Title>
                        <h6>Prep Time: {info.prepTime}</h6>
                        <h6>Cook Time: {info.cookTime}</h6>
                        <h6>Total Time: {totalTime}</h6>
                        <h6>Servings: {info.servings}</h6>
                    </div>
                </div >
            </>
        )
    }
}
