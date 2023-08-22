document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('deposit-field');
    // console.log(newDepositAmount);

    const previousDepositTotal = getTextElementValueById('deposit-total');

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // console.log(currentDepositTotal);
    setTextElementValueById('deposit-total',currentDepositTotal);


    const previousBalanceDeposit = getTextElementValueById('total-balance');
    // console.log(previousBalanceDeposit);

    const newBalanceFromDeposit = newDepositAmount + previousBalanceDeposit;

    setTextElementValueById('total-balance',newBalanceFromDeposit);

})