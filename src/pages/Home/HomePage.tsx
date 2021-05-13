import React, {useContext} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "./style.scss"
import AboutPage from "../About/AboutPage";
import {AppStateContext} from "../../App";
import {Redirect,} from "react-router-dom";
export default function HomePage() {


    const {loggedInUser}= useContext(AppStateContext);

    if(!loggedInUser){
        return <Redirect to={"/user/login"}/>
    }
    return <div>
        <div>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/3Q-P923MMx8"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
        <div className="what-we-offer">
            <Container>
                <div>
                    <h5 className="text-center">
                        What we offer
                    </h5>
                </div>
                <Row className="what-we-offer-row">
                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    Diet Planning
                                </h6>
                                <div className="plan-features">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    </p>
                                </div>
                            </div>

                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card><div className="what-we-offer-card">
                            <h6>
                                Diet Planning
                            </h6>
                            <div className="plan-features">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </p>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                            <h6>
                                Diet Planning
                            </h6>
                            <div className="plan-features">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </p>
                            </div>
                        </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    Diet Planning
                                </h6>
                                <div className="plan-features">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    Diet Planning
                                </h6>
                                <div className="plan-features">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    Diet Planning
                                </h6>
                                <div className="plan-features">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
        <div className="app-body-packages">
            <h5>
                Packages
            </h5>
            <Container>
                <Row className="app-body-packages-plans">
                    <Col className="app-body-packages-plan">
                        <div className="plan-heading">
                            Plan 1
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="app-body-packages-plan">
                        <div className="plan-heading">
                            Plan 1
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="app-body-packages-plan">
                        <div className="plan-heading">
                            Plan 1
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                                <li>
                                    This is feature
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <AboutPage/>
    </div>


}