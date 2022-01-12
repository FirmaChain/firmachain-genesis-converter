export const convertNumber = (num) => {
    if(Number.isNaN(Number.parseFloat(num))) return 0;
    return Number.parseFloat(num);
}