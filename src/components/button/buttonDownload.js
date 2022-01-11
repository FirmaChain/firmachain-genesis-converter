import React from "react";
import { Box, Container, Title } from "./styles";
import { FileDownloadOutlined } from "@mui/icons-material";


const ButtonDownload = ({title, onClickEvent}) => {

    const handleButtonClick = () => {
        onClickEvent && onClickEvent();
    }

    return (
        <Container>
            <Box onClick={handleButtonClick}>
                <FileDownloadOutlined style={{height: '24px'}}/>
                <Title>{title}</Title>
            </Box>
        </Container>
    )
}

export default ButtonDownload;