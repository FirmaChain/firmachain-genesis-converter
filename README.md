# Firmachain Genesis Converter


![firmachain_genesis_converter](https://user-images.githubusercontent.com/93243647/148916414-f5d8989e-7fdf-42fa-8cad-25e85f7e70f6.png)


how to build firmachain-genesis-converter
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

