# Firmachain Genesis Converter


![firmachain_genesis_converter](https://user-images.githubusercontent.com/93243647/148916414-f5d8989e-7fdf-42fa-8cad-25e85f7e70f6.png)

This project is a service that makes it easy to add VestingAccount to Genesis.json. 

It was used in the creation of FirmaChain mainnet genesis.

How to build firmachain-genesis-converter
=========================================
### 1. install and run
<pre>
  <code>
  npm install
  npm run start
  </code>
</pre>

### 2. steps
1. upload genesis and csv files.
2. check the values of time and amount are correct.
3. download new genesis file from sidebar.

### 3. how to use csv
* You can download the csv sample file from the sidebar.
* The csv columns are as follows.
<pre>
  <code>
  name, address, balances, start_time, end_time, vesting_count, vesting_period_arry_n(1~21)
  </code>
</pre>
* If vesting_count does not have a value, it is created to BaseAccount.
* If vesting_count has a value, it is created to PeriodicVestingAccount. Also, vesting_periods are created according to the number of vesting_period_arry.

The files created as examples are attached
------------------------------------------
* [220112_FIRMACHAIN_Genesis_Vesting(SAMPLE).csv](https://github.com/FirmaChain/firmachain-genesis-converter/files/7851711/220112_FIRMACHAIN_Genesis_Vesting.SAMPLE.csv)
* [220112_FIRMACHAIN_Vesting_for_CSV(SAMPLE).xlsx](https://github.com/FirmaChain/firmachain-genesis-converter/files/7851713/220112_FIRMACHAIN_Vesting_for_CSV.SAMPLE.xlsx)

* This is a sample Excel file that can create a csv file and a vesting list generated from the sample Excel file.
