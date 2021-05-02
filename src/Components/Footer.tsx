import React from "react";
import {Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
export default function Footer() {
    return <div className="app-footer">
        <Container>
            <div className="footer-content-wrapper">
                <div className="footer-content">
                    <h4>GYM AND FITNESS</h4>
                    <p>
                        Train like a beast, look like a beauty
                        Train hard or Go home.
                        Hustle for that muscle
                    </p>
                </div>
                <div className="footer-social">
                    <a>Facebook</a>
                    <a>Instagram</a>
                    <a>Youtube</a>
                </div>
            </div>
        </Container>

    </div>
}