import React from 'react'
import { Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <div className="NavBar">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://cdn.imgbin.com/10/1/6/imgbin-rolling-pin-kitchenware-lovely-hand-painted-cartoon-rolling-pin-brown-rolling-pin-nQbUgCRArQG9E3RwFBb9bv98s.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"

                    />{' '}
                    Guyanese Recipes
                </Navbar.Brand>
            </Navbar>
        </div>


    )
}
