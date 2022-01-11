import React, { useMemo } from 'react';
import { AccordionDesc, Box, Container, Wrapper } from './styles';
import Sidebar from 'organisms/sidebar';
import RectDesc from 'components/description/rectDesc';
import { useSelector } from 'react-redux';
import Accordion from 'components/accordion/accordion';

export default function Main() {
    const publicData = useSelector(state => state.public);
    const genesis = useSelector(state => state.genesis);

    const genFileName = useMemo(() => {
        return publicData.genesisFileName;
    }, [publicData.genesisFileName]);

    const csvFileName = useMemo(() => {
        return publicData.csvFileName;
    }, [publicData.csvFileName]);

    const csvParseData = useMemo(() => {
        return genesis.dataArray;
    }, [genesis.dataArray]);

    const errorCounts = useMemo(() => {
        let time = 0;
        let timeName = [];
        let amount = 0;
        let amountName = [];
        if(csvParseData){
            csvParseData.map(item => {
                if(item.valid_time === false){ 
                    time += 1;
                    timeName.push(item.name);
                }
                if(item.valid_amount === false){ 
                    amount += 1; 
                    amountName.push(item.name);
                }
            })
            return {
                time: time,
                timeName: timeName,
                amount: amount,
                amountName: amountName,
            } 
        }
        return null;
    }, [csvParseData]);

    const errorMessage = useMemo(() => {
        let message = '';
        if(errorCounts){
            message += 'You have wrong data.\n';
            if(errorCounts.time > 0){
                message += errorCounts.time + ' for time data ('; 
                let tName = '';
                errorCounts.timeName.map((item, index) => {
                    const comma = index === errorCounts.time -1? '' : ', ';
                    tName += item + comma;
                });
                message += tName + ')';
                message += errorCounts.amount > 0 && '\n';
            }

            if(errorCounts.amount > 0){
                message += errorCounts.amount + ' for amount data ('; 
                let aName = '';
                errorCounts.amountName.map((item, index) => {
                    const comma = index === errorCounts.time -1? '' : ', ';
                    aName += item + comma;
                });
                message += aName + ')';
            }
        }
        return message;
    }, [errorCounts])

    let acdDesc = `Upload a standardized CSV.\n`;
    acdDesc += `You can check the JSON to be added to genesis.`;
   
    return (
        <Container>
            <Sidebar />
            <Box>
                <Wrapper justifycontent={'flex-start'}>
                    <RectDesc title={'Uploaded genesis file'} desc={genFileName}/>
                    <RectDesc title={'Uploaded CSV file'} desc={csvFileName}/>
                    <RectDesc direction={'row'} flex={'3'} title={'message'} desc={errorMessage}/>
                </Wrapper>
                
                <Wrapper justifycontent={'flex-start'}>
                    {csvParseData ?
                    <Accordion data={csvParseData} /> :
                    <AccordionDesc>{acdDesc}</AccordionDesc>
                    }
                </Wrapper>
            </Box>
        </Container>
    )
}
