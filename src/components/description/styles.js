import styled from 'styled-components';

export const Container = styled.div`
    flex: ${props => props.flex || `1`};
    background-color: #1B1C22;
    border-radius: 4px;
`

export const Box = styled.div`
    height: auto;
    display: flex;
    ${props => props.direction === 'row' ? `
        align-items: felx-start;
        justify-content: space-between;
        flex-direction: row;
        height: 70px;
        white-space: pre-wrap;
    `:`
        align-items: felx-start;
        justify-content: center;
        flex-direction: column;
    `}
    gap: 20px;
    padding: 20px;
`

export const Title = styled.div`
    height: 25px;
    word-break: keep-all;
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    color: #aaa;
`

export const Desc = styled.div`
    height: 25px;
    word-break: keep-all;
    text-align: right;
    font-weight: 100;
    font-size: 14px;
    color: #fff;
`