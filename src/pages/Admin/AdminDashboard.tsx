import React, {useCallback, useEffect, useState} from "react";
import "./style.scss"
import {Alert, Card, Col, Container, Row} from "react-bootstrap";
import DashboardCard, {DashboardCardProps} from "./DashboardCard";
import {useHistory} from "react-router-dom";
import diet from "../../assets/images/slide-4.jpg"
import AdminDashboardAPIs from "../../apis/admin/dashbord.apis";
import useIsMounted from "ismounted";
import {CustomLoader} from "../../Components/CustomLoader";
import {Chart} from "react-google-charts";

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
   backgroundColor:"skyblue",
        width: "100vw",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }}>
        {
            error && <Alert>{error}</Alert>
        }
        <Container >
            <Row >
                <Col md={12}>
                    <Card className="admin-dashboard-card">
                        <div className="admin-dashboard-card-info">
                            <div>
                                <h5>
                                    Growth
                                </h5>
                            </div>
                            <Chart
                                width={'550px'}
                                height={"350px"}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Year', 'Users', 'Expenses', 'Profit'],
                                    ['2020', 660, 1120, 300],
                                    ['2021', 1030, 540, 350],
                                ]}
                                options={{
                                    // Material design options
                                    chart: {
                                        title: 'GYM Performance',
                                        subtitle: 'Users, Expenses, and Profit: 2020-2021',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '2' }}
                            />
                        </div>

                    </Card>
                </Col>
                {
                    dashboard && dashboard.filter((value => value.title!=="Growth")).map((value, index) => {
                        return <Col md={4} key={index}>
                            <DashboardCard {...value}/>
                        </Col>
                    })
                }
                <Col md={12} style={{marginBottom:"500px"}}></Col>
            </Row>
        </Container>

    </div>
}