import React from "react";
import {Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
export default function Footer() {
    return <div className="app-footer">
        <Container>
            <div className="footer-content-wrapper">
                <div className="footer-content">
                    <h4> The GYM management app</h4>
                    <p>
                        This is some description
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