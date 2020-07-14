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

    getInfo() {
        let notes = this.state.notes.map((item => {
            return item.chefnotes;
        }));

        return notes;
    }

    componentDidMount() {
        fetch('/api/notes/get?slug=' + this.state.slug)
            .then(res => res.json())
            .then(notes => this.setState({ notes },
                () => console.log('Single notes feteched... ', notes)));
    }
    render() {
        let info = this.getInfo();
        console.log("info", info);
        return (
            <>
                <div className="chef-info">
                    <Title title="Chef Notes" align=""></Title>
                    <h5>{info}</h5>
                </div>

            </>
        )
    }
}