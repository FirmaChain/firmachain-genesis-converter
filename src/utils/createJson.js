import { convertNumber } from "./common";

export const JsonForVesting = (item) => {
    let periodTime = Number(item.start_time);
    let periodAmount = 0;

    let typeKey = {};
    typeKey["@type"] = "/cosmos.vesting.v1beta1.PeriodicVestingAccount";

    let vestingJson = {
        ...typeKey,    
        base_vesting_account:{
            base_account:{
                address: item.address,
                pub_key: null,
                account_number: "0",
                sequence: "0"
            },
            original_vesting: [
                {
                    amount: convertNumber(item.balances).toFixed(0),
                    denom: "ufct"
                }
            ],
            delegated_free: [],
            delegated_vesting: [],
            end_time: item.end_time,
        },
        start_time: item.start_time,
    }

    vestingJson['vesting_periods'] = [];
    let period = [];
    for(var i = 1; i <= Number(item.vesting_count); i++) {
        const keyName = 'vesting_period_arry_'+i;

        periodTime += Number(JSON.parse(item[keyName])[0]);
        periodAmount += Number(JSON.parse(item[keyName])[1]);

        period.push({
            length: `${JSON.parse(item[keyName])[0]}`,
            amount: [{
                amount:`${JSON.parse(item[keyName])[1]}`,
                denom:"ufct",
            }],

        })

    }

    vestingJson['vesting_periods'] = [
        ...period
    ]

    const validTime = periodTime === Number(item.end_time);
    const validAmount = periodAmount === convertNumber(item.balances);

    return {vestingJson, validTime, validAmount};
}

export const JsonForBase = (item) => {
    let typeKey = {};
    typeKey["@type"] = "/cosmos.auth.v1beta1.BaseAccount";

    let baseJson = {
        ...typeKey,
        address: item.address,
        pub_key: null,
        account_number: "0",
        sequence: "0",
    }

    return baseJson;
}

export const JsonForBalance = (item) => {
    let balanceJson = {
        address : item.address,
        coins: [
            {
                amount: convertNumber(item.balances).toFixed(0),
                denom: "ufct",
            }
        ]
    }

    return balanceJson;
}