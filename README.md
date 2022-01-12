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
![VESTING](https://user-images.githubusercontent.com/93243647/149111407-5074cfb4-dbed-4df5-9f7b-d990983ea27d.png)
* If vesting_count does not have a value, it is created to BaseAccount.
* If vesting_count has a value, it is created to PeriodicVestingAccount. Also, vesting_periods are created according to the number of vesting_period_arry.

The files created as examples are attached
------------------------------------------
* <a href="https://github.com/FirmaChain/firmachain-genesis-converter/blob/master/sample/220112_FIRMACHAIN_Genesis_Vesting(SAMPLE).csv">220112_FIRMACHAIN_Genesis_Vesting(SAMPLE).csv</a>
* <a href="https://github.com/FirmaChain/firmachain-genesis-converter/blob/master/sample/220112_FIRMACHAIN_Vesting_for_CSV(SAMPLE).xlsx">220112_FIRMACHAIN_Vesting_for_CSV(SAMPLE).xlsx</a>
* This is a sample Excel file that can create a csv file and a vesting list generated from the sample Excel file.
------------------------------------------
* <a href="https://github.com/FirmaChain/firmachain-genesis-converter/blob/master/sample/base_genesis(SAMPLE).json">base_genesis(SAMPLE).json</a>
* <a href="https://github.com/FirmaChain/firmachain-genesis-converter/blob/master/sample/genesis(SAMPLE).json">genesis(SAMPLE).json</a>
* Default frames for genesis file and created file via this project.

