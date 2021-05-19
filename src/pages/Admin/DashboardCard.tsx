import React from "react";
import "./style.scss"
import {Button, Card} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export interface DashboardCardProps {
    title: string,
    percentage: string,
    action_link?:string,
    actions?: React.ReactNode
}

export default function DashboardCard(props: DashboardCardProps) {
    const history=useHistory();
    return <Card className="admin-dashboard-card">
        <div className="admin-dashboard-card-info">
            <div>
                <h5>
                    {props.title}
                </h5>
            </div>
            <div>
                {props.percentage}
            </div>
            {props.action_link &&   <Button onClick={()=>{
                props.action_link && history.push(props.action_link);
            }}>
                Manage
            </Button>}
        </div>
    </Card>
}