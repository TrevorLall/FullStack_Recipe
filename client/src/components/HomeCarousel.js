import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        //get directions
        fetch('/api/carousel/get')
            .then(res => res.json())
            .then(recipes => this.setState({ recipes },
                () => console.log('Single carousel feteched... ', recipes)));
    }

    getInfo() {
        this.state.recipes.forEach(color => console.log(color));
        let title = this.state.recipes.map((item => {
            return item.title;
        }));
        let image = this.state.recipes.map((item => {
            return item.image;
        }));
        let desc = this.state.recipes.map((item => {
            return item.description;
        }));
        let slug = this.state.recipes.map((item => {
            return item.slug;
        }));
        return {
            title,
            image,
            desc,
            slug
        }
    }

    render() {
        let info = this.getInfo();
        console.log("why", info.image[0]);
        return (
            <div>
                <>
                    <Carousel>
                        <Carousel.Item>

                            <Link to={`/recipes/${info.slug[0]}`} ><img
                                className="d-block w-100"
                                src={info.image[0]}
                                alt="First slide"
                            /></Link>

                            <div className="recipe-top">
                                <h6>Newest Recipes</h6>
                            </div>
                            <Carousel.Caption>
                                <h3>{info.title[0]}</h3>
                                <p>{info.desc[0]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to={`/recipes/${info.slug[1]}`} ><img
                                className="d-block w-100"
                                src={info.image[1]}
                                alt="Third slide"
                                height="550"

                            /></Link>
                            <div className="recipe-top">
                                <h6>Newest Recipes</h6>
                            </div>
                            <Carousel.Caption>
                                <h3>{info.title[1]}</h3>
                                <p>{info.desc[1]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to={`/recipes/${info.slug[2]}`} > <img
                                className="d-block w-100"
                                src={info.image[2]}
                                alt="Third slide"
                                height="550"
                            /></Link>
                            <div className="recipe-top">
                                <h6>Newest Recipes</h6>
                            </div>
                            <Carousel.Caption>
                                <h3>{info.title[2]}</h3>
                                <p>{info.desc[2]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </>
            </div>
        )
    }
}

