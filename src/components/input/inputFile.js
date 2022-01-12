import React, { useRef, useState } from "react";
import { Box, Container, Title } from "./styles";
import { FileUploadOutlined } from "@mui/icons-material";

const InputFile = ({title, setData, setFileName, accept}) => {
    const hiddenFileInput = useRef(null);

    const handleChange = (e) =>{
        let file = e.target.files[0];

        if(setData) {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                setData(fileReader.result);
                setFileName(file.name);
            };
            fileReader.readAsText(file);
        }
    }

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    return (
        <Container>
            <Box onClick={handleClick}>
                <FileUploadOutlined style={{height: '24px'}}/>
                <Title>{title}</Title>
                <input 
                    ref={hiddenFileInput} 
                    type='file' 
                    accept={accept} 
                    onChange={handleChange} 
                    style={{display: 'none'}}/>
            </Box>
        </Container>
    )
}

export default InputFile;