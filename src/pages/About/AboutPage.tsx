import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./style.scss"
import about_image from "../../assets/images/about.jpeg"

export default function AboutPage() {
    return <Container>
        <div className="about">
            <div>
                <h5>
                    About
                </h5>
            </div>
            <div className="about-description-wrapper">
                <Row>
                    <Col md={6}>
                        <img src={about_image} alt={"about"}/>
                    </Col>
                    <Col md={6}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>
                    </Col>
                </Row>

            </div>

        </div>


    </Container>
}