import { readString } from 'react-papaparse';
import { GenesisActions, PublicActions } from '../redux/actions';
import { JsonForBalance, JsonForBase, JsonForVesting } from './createJson';

export const ParseCSV = (csv) => {
    readString(csv, {
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: (result) => {
            if(result.errors.length > 0){
                PublicActions.setCsvFileName(''); 
                return alert("Invalid format. Please check the CSV file.");
            }
            orgnizeCSV(result.data);
        }
    });
}

const orgnizeCSV = (result) => {
    createJsons(result);
}

const createJsons = (data) => {
    var dataArray = [];
    data.map(item => {
        if(item.address !== undefined && item.address !== ''){
            const name = item.name;
            
            let accountJson;
            let validTime = true;
            let validAmount = true;
            if(item?.vesting_count !== "" || Number(item.vesting_count) > 0){
                const result = JsonForVesting(item);
                accountJson = result.vestingJson;
                validTime = result.validTime;
                validAmount = result.validAmount;
            } else {
                accountJson = JsonForBase(item);
                validAmount = true;
            }
            let balanceJson = JsonForBalance(item);
    
            dataArray.push({
                ...
                {
                    name: name,
                    accounts: accountJson,
                    balances: balanceJson,
                    valid_time: validTime,
                    valid_amount: validAmount,
                }
            });
        }
    });
    GenesisActions.createDataArray(dataArray);
}