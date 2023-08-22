document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    // console.log(newWithdrawAmount);

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // console.log(previousWithdrawTotal);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total',currentWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('total-balance');
    // console.log(previousBalanceTotal);

    const newBalanceFromWithdraw = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('total-balance', newBalanceFromWithdraw);

})

