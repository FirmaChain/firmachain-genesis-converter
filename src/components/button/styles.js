import styled from "styled-components";

export const Square = styled.div`
    width: auto;
    font-weight: 300;
    color: #fff;
    background-color: #1B1C22;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

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
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

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