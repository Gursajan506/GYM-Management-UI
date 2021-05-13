import React, {useState} from "react";
import "./style.scss"
import {Button, Col, Container, Row} from "react-bootstrap";
import DashboardCard, {DashboardCardProps} from "./DashboardCard";
import { useHistory } from "react-router-dom";

export function AdminDashboard() {
    const history=useHistory();
    const [dashboard, setDashboard] = useState<DashboardCardProps[]>([
        {
            title: "Growth",
            percentage: "20%",
        },{
            title: "User",
            percentage: "30%",
            actions: <>
                <Button onClick={()=>{
                    history.push("/admin/users");
                }}>
                    Manage
                </Button>
            </>,
        },
        {
            title: "Payments",
            percentage: "3000",
            actions: <>
                <Button onClick={()=>{
                    history.push("/admin/payments");
                }}>
                    Manage
                </Button>
            </>,
        },
        {
            title: "Exercises",
            percentage: "4",
            actions: <>
                <Button>
                    Manage
                </Button>
            </>,
        },
        {
            title: "Diet Plan",
            percentage: "4",
            actions: <>
                <Button>
                    Manage
                </Button>
            </>,
        },
    ])
    return <div className="admin-dashboard">
        <Container>
            <Row>
                {
                    dashboard.map((value, index) => {
                        return <Col md={4} key={index}>
                            <DashboardCard {...value}/>
                        </Col>
                    })
                }
            </Row>
        </Container>

    </div>
}