import React from "react";
import { Square } from "./styles";

const ButtonSquare = ({title, onClickEvent}) => {

    const handleButtonClick = () => {
        onClickEvent && onClickEvent();
    }

    return (
        <Square onClick={handleButtonClick}>{title}</Square>
    )
}

export default ButtonSquare;