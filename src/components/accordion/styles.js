import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #1B1C22;
    border-radius: 4px;
    padding: 20px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 770px;
    overflow-y: overlay;
    overflow-x: hidden;
`

export const Wrapper = styled.div`
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    ${props => props.open?`
        background-color: #131317;
        ${props.valid? `
            border: solid 1px #131317;
        `:`
            border: solid 1px #B22222;
        `}
        
        > div {
            &: nth-child(2){
                max-height: 5000px;
            }
        }
    `:`
        border: solid 1px #131317;
        
        > div {
            &: nth-child(2){
                max-height: 0px;
            }
        }
    `};
`

export const Header = styled.div`
    padding: 20px;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
`

export const Arrow = styled.div`
    transition: all 0.3s ease-in-out;
    font-weight: bold;
    ${props => props.open? `
        transform: rotate(90deg);
    `:null};
`

export const Title = styled.div`
    flex: 2;
    color: #fff;

    ${props => props.open?`
        font-weight: 500;
        color: #713838;
    `:`
        font-weight: 300;
    `}
`

export const Content = styled.div`
    width: 100%;
    padding: 0 20px;

    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
`

export const DescBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 20px;
`

export const DescWrapper = styled.div`
    margin: 0 0 20px;
    border-radius: 4px;
    
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Desc = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    
    text-align: left;
    overflow: hidden;
    white-space: pre-wrap;
    color: ${props => props.title? `#777777` : `#aaa`};
    ${props => props.bold && `font-weight: 500`};
`

export const WarnWrapper = styled.div`
    padding: 0 0 20px;
`

export const Warn = styled.div`
    color: #B22222;
    font-weight: 500;
    text-align: left;
`