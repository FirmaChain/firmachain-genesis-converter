import React from "react";
import { Box, Container, Desc, Title } from "./styles";

const RectDesc = ({title, desc, direction, flex}) => {
    return (
        <Container flex={flex}>
            <Box direction={direction}>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Box>
        </Container>
    )
}

export default RectDesc;