import React from "react";

export interface iDetail {
    title: string,
    image: string,
    description: string
}

export default function DetailCard(props: iDetail) {
    return <div>
        <h4 className="text-center">
            {props.title}
        </h4>
        <img src={props.image} style={{width:"100%"}}/>
        <p>
            {props.description}
        </p>
    </div>
}