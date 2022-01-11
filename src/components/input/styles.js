import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    border-radius: 4px;
    cursor: pointer;
    padding: 8px 16px;

    &:hover {
        background-color: #131317;
    }
`

export const Title = styled.div`
    flex: 1;
    height: auto;
    word-break: keep-all;
    font-weight: 100;
    font-size: 14px;
    text-align: left;
    margin-bottom: 4px;
`

export const Input = styled.input`
    min-width: 300px;
`

export const Textarea = styled.textarea`
    min-width: 300px;
    height: auto;
`

export const ImgButton = styled.img`
    width: 24px;
    height: 24px;
`

export const Filename = styled.div`
    font-size: 14px;
    font-weight: 100;
    color: #aaa;
`