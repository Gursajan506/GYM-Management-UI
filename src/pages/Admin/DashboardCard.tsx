import React from "react";
import "./style.scss"
import {Card} from "react-bootstrap";

export interface DashboardCardProps {
    title:string,
    percentage:string,
    actions?:React.ReactNode
}
export default function DashboardCard(props:DashboardCardProps) {
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
            {props.actions}
        </div>
    </Card>
}