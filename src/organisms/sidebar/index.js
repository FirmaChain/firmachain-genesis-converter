import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { GenesisActions, PublicActions } from "redux/actions";
import ButtonDownload from "components/button/buttonDownload";
import InputFile from "components/input/inputFile";
import { Container, Logo } from "./styles";
import { CreateGenesisJsonFile } from "utils/createGenesisJsonFile";
import { ParseCSV } from "utils/parseCsv";
import CSV from '../../constants/csv_sample.csv';

const Sidebar = () => {
    const state = useSelector(state => state.genesis);

    const genesis = useMemo(() => {
        if(state.genesis !== null){
            try {
                return JSON.parse(state.genesis);
            } catch(error) {
                console.log(error);
                setGenesisJsonToRedux(null);
                PublicActions.setGenesisFileName('');
                alert("Invalid format. Please check the JSON file.");
            }
        }
    }, [state.genesis]);

    const setGenesisJsonToRedux = (value) => {
        GenesisActions.setGenesis(value);
    }

    const handleCreateGenesis = () => {
        let gen = genesis;
        gen.app_state.bank.balances = [];

        dataArray.map(item => {
            gen.app_state.auth.accounts.push(item.accounts);
            gen.app_state.bank.balances.push(item.balances);
        });
        CreateGenesisJsonFile(gen);
    }

    const handleDownloadCSV = () => {
        const element = document.createElement("a");
        element.href = CSV;
        element.download = 'csv_sample.csv';
        element.click();
    }
    
    const dataArray = useMemo(() => {
        return state.dataArray;
    }, [state.dataArray])


    useEffect(() => {
        if(genesis){
            const time = new Date(genesis.genesis_time);
            const epoch = time.getTime() / 1000;
        }
    }, [genesis])

    return (
        <Container>
            <Logo src='/img/firma_chain_title.svg' alt='logo' />
            <InputFile 
                title={'Genesis file'} 
                accept='.json' 
                setData={value => setGenesisJsonToRedux(value)}
                setFileName={name => PublicActions.setGenesisFileName(name)}/>
            <InputFile 
                title={'CSV file'} 
                accept='.csv' 
                setData={value => ParseCSV(value)}
                setFileName={name => PublicActions.setCsvFileName(name)} />
            <ButtonDownload title={'CSV sample'} onClickEvent={handleDownloadCSV} />
            <ButtonDownload title={'new Genesis'} onClickEvent={handleCreateGenesis} />
        </Container>
    )
}

export default Sidebar;