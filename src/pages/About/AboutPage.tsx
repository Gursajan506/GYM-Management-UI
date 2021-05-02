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
                        <p>

                            Gym and Fitness was founded in 2021 as a college project website.The Gym and Fitness founders didn’t want it to be just another gym equipment retailer - they wanted to be the best in the industry and set their minds to doing so! Since its birth, Gym and Fitness has grown into one of india's largest fitness equipment retailers having helped over 5000 customers live longer, happier and healthier lives
                            What we do

                            We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your need

                        </p>

                    </Col>
                </Row>

            </div>

        </div>


    </Container>
}