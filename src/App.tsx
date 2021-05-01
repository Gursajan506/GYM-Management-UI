import React, {useState} from "react";
import "./app.css";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutPage from "./pages/About/AboutPage";
import {AdminDashboard} from "./pages/Admin/AdminDashboard";

export default function App() {

    return <div className="app">
        <Header/>
        <Switch>
            <Route path="/admin/dashboard" component={AdminDashboard}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/" component={HomePage}/>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
    </div>
}