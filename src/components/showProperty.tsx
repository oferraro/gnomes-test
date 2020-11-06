import React from "react";

interface IPropertyProps {
    title: string;
    data: string | number;
}

export function showProperty(props: IPropertyProps) {
    return <div>
        <strong>{props.title}</strong>: {props.data} <br />
    </div>;
}
