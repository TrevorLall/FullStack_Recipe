import React, { Component } from 'react'

export default class Directions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            directions: [],
            slug: this.props.slug
        }
    }

    componentDidMount() {
        //get directions
        fetch('/api/directions/get?slug=' + this.state.slug)
            .then(res => res.json())
            .then(directions => this.setState({ directions },
                () => console.log('Single recipe feteched... ', directions)));
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ol>
                    {this.state.directions.map(directions =>
                        <li key={directions.id}>
                            <h6>{directions.description}</h6>
                        </li>)}
                </ol>
            </div>
        )
    }
}
