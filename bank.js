document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositText = document.getElementById('deposit-text');
    const previousDepositTextString = depositText.innerText;
    const previousDepositText = parseFloat(previousDepositTextString);

    const currentDepositAmount = newDepositAmount + previousDepositText;
    depositText.innerText = currentDepositAmount;

    depositField.value = '';

    const balanceField = document.getElementById('balance-field');
    const balanceAmountString = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const currentBalanceAmount = newDepositAmount + balanceAmount;
    balanceField.innerText = currentBalanceAmount;
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawText = document.getElementById('withdraw-text');
    const previousWithdrawTextString = withdrawText.innerText;
    const previousWithdrawText = parseFloat(previousWithdrawTextString);

    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawText;
    withdrawText.innerText = currentWithdrawAmount;

    withdrawField.value = '';

    const balanceField = document.getElementById('balance-field');
    const balanceAmountString = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const currentBalanceAmount = balanceAmount - newWithdrawAmount;
    balanceField.innerText = currentBalanceAmount;
});