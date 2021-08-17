const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

depositButton.addEventListener('click', function(){
    bankBalance('deposit')
})

withdrawButton.addEventListener('click', function(){
    bankBalance('withdraw')
})

function bankBalance(type){
    // getting deposit and withdraw total value
    const previousTotal = document.getElementById(`${type}-total`);
    const previoustTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previoustTotalText)
    
    // getting deposit and withdraw input value
    const inputMoney = document.getElementById(`${type}-input`);
    const inputMoneyText = inputMoney.value;
    
    // checking value is negative or not or empty
    if(inputMoneyText > 0 && inputMoneyText.length != 0){
        const inputMoneyAmount = parseFloat(inputMoneyText);

        // adding deposit and withdraw input with their total value
        previousTotal.innerText = previousTotalAmount + inputMoneyAmount;
    
        // clear input value after addition
        inputMoney.value = '';
    
        // getting total balance
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const balanceTotalAmount = parseFloat(balanceTotalText);
    
        // addition and substraction to total balance with condition
        if(type == 'deposit'){
            balanceTotal.innerText = balanceTotalAmount + inputMoneyAmount;
        }
        else if(type == 'withdraw'){
            balanceTotal.innerText = balanceTotalAmount - inputMoneyAmount;
        }
    }
    else{
        alert('input positive number value')
    }
}