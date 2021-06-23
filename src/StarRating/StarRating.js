import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating(){
    return [
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="grey" />,
        <FaStar color="grey" />
    ];
}

const Star = ({ selected = false }) => (
    <FaStar color={selected ? "red" : "grey"} />
);