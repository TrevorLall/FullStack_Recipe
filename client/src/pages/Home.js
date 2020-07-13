import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/HomeCarousel'
import RecipesList from '../components/RecipesList'
import { Container, Row, Col } from "react-bootstrap";
import FilterRecipes from '../components/FilterRecipes';
export default function Home() {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="homecarousel">
                            <Carousel></Carousel>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FilterRecipes></FilterRecipes>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <RecipesList></RecipesList>
                    </Col>

                </Row>
            </Container>

        </>
    )
}
