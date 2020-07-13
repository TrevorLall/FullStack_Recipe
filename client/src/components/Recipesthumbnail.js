import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recipesthumbnail extends Component {
    render() {
        return (
            <article className="recipe">
                <div className="img-container">
                    <img src={this.props.image} alt="single-room" />
                    <Link to={`/recipes/${this.props.slug}`} className="btn-primarys recipe-link">Recipe</Link>
                </div>
                <p className="recipe-info">{this.props.title}</p>
            </article>
        )
    }
}
