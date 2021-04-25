import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./app.css";
import {Link, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
export default function App() {

    const [count,setCount]=useState<number>(0);

    return <div className="app">
        <div className="app-header">
            <div>
                <h5>The GYM Management</h5>
            </div>

            <div>
                <a href="#" className="app-home">
                    Home
                </a>
                <a href="#" className="app-contact-us">
                    Contact us
                </a>
                <a href="#" className="app-about">
                    About
                </a>
                <Link to="/login" className="app-login">
                    Login
                </Link>
            </div>
        </div>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={HomePage} />
            <Redirect to="/" />
        </Switch>
        <div className="app-footer">
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

    </div>
}