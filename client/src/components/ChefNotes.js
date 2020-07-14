import React, { Component } from 'react'
import Title from './Title'

export default class ChefNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            slug: this.props.slug
        }
    }

    componentDidMount() {

    }
    render() {
        console.log(this.props);
        return (
            <>
                <div className="chef-info">
                    <Title title="Chef Notes" align=""></Title>
                    <h5>Default Text</h5>
                </div>

            </>
        )
    }
}