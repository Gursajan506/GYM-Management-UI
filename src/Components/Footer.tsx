import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Footer() {
    return <div className="app-footer">
        <Container>
            <div className="footer-content-wrapper">
                <div className="footer-content">
                    <h4>GYM AND FITNESS</h4>
                    <p>

                        Train hard or Go home.

                    </p>
                </div>
                <div className="footer-social">
                    <Row>
                        <Col sm={12} xs={12} className="justify-content-center d-flex p-0">
                            <p className="text-center u500 mb-2">
                                Keep in touch
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="justify-content-end d-flex p-0">
                            <a href="https://www.facebook.com/sajjan/"
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="/assets/images/social_facebook.svg" alt={"social facebook"}/>
                            </a>
                        </Col>
                        <Col sm={4} xs={4} className="justify-content-center d-flex p-0">
                            <a href="https://www.instagram.com/sajjan/?hl=en"
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="/assets/images/social_instagram.svg" alt={"social instagram"}/>
                            </a>
                        </Col>
                        <Col sm={4} xs={4} className="justify-content-start d-flex p-0">
                            <a href="https://www.linkedin.com/company/sajjan"
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="/assets/images/social_linkedin.svg" alt={"social linkedin"}/>
                            </a>
                        </Col>
                        <Col sm={4} xs={4} className="justify-content-end d-flex p-0">
                            <a href="https://www.youtube.com/user/sajjan"
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="/assets/images/social_youtube.svg" alt={"social youtube"}/>
                            </a>
                        </Col>
                        <Col sm={4} xs={4} className="justify-content-center d-flex p-0">
                            <a href="https://twitter.com/sajjan"
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="/assets/images/social_twitter.svg" alt={"social twitter"}/>
                            </a>
                        </Col>
                        <Col sm={4} xs={4} className="justify-content-start d-flex p-0">
                            <a href="mailto:sajjan@sajjan.in"
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="/assets/images/social_mail.svg" alt={"social mail"}/>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>

    </div>
}