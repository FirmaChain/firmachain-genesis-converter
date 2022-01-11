import React from 'react'
import { Box, Title, Input } from './styles';

const InputHorizontal = ({title, placeholder, value, onChangeEvent}) => {

    const handleInput = (e) => {
        console.log(e.target.value);
        onChangeEvent && onChangeEvent(e.target.value)
    }

    return (
        <Box>
            <Title>{title}</Title>
            <Input placeholder={placeholder} value={value} onChange={handleInput} />
        </Box>
    )
}

export default InputHorizontal;