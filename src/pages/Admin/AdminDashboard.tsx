import React, {useCallback, useEffect, useState} from "react";
import "./style.scss"
import {Alert, Col, Container, Row} from "react-bootstrap";
import DashboardCard, {DashboardCardProps} from "./DashboardCard";
import {useHistory} from "react-router-dom";
import diet from "../../assets/images/workout.webp"
import AdminDashboardAPIs from "../../apis/admin/dashbord.apis";
import useIsMounted from "ismounted";
import {CustomLoader} from "../../Components/CustomLoader";

export function AdminDashboard() {
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const isMounted = useIsMounted();
    const loadDashboard = useCallback(() => {
        setLoading(true)
        new AdminDashboardAPIs().get_dashboard().then((res) => {
            if (isMounted.current) {
                if (AdminDashboardAPIs.hasError(res)) {
                    setError(res.message)
                } else {
                    res.dashboard && setDashboard(res.dashboard)
                    setLoading(false)
                }
            }
        })
    }, [isMounted])
    useEffect(()=>{
        loadDashboard();
    },[])
    const [dashboard, setDashboard] = useState<DashboardCardProps[]>([])
    if (loading) {
        return <CustomLoader/>
    }
    return <div className="admin-dashboard" style={{
        backgroundImage: `url(${diet})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }}>
        {
            error && <Alert>{error}</Alert>
        }
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