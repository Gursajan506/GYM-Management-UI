import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function HomePage() {
    return <div className="app-body-packages">
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
}