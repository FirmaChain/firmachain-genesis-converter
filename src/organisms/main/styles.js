import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #131317;
    display: flex;
    align-items: flex-start;
    justify-content: flex-center;
`

export const Box = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: ${props => props.justifycontent || `center`};
    gap: 20px;
`

export const AccordionDesc = styled.div`
    width: 100%;
    height: 200px;
    background-color: #1B1C22;
    border-radius: 4px;
    display: felx;
    align-items: center;
    justify-content: center;

    color: #aaa;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    white-space: pre-wrap;
`