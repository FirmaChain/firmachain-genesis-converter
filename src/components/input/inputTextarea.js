import React from "react"
import { Box, Textarea, Title } from "./styles";

const InputTextarea = ({title}) => {

    return (
        <Box>
            <Title>{title}</Title>
            <Textarea />
        </Box>
    )

}

export default InputTextarea;