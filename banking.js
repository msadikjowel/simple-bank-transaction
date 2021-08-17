const depositButton = document.getElementById('deposit-button')
const withdrawButton = document.getElementById('withdraw-button')

depositButton.addEventListener('click', function(){
    changeBalance('deposit')
})

withdrawButton.addEventListener('click', function(){
    changeBalance('withdraw')
})

function changeBalance(type){

    const previousTotal = document.getElementById(`${type}-total`);
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    const newMoney = document.getElementById(`${type}-input`);
    const newMoneyText = newMoney.value;
    if(newMoneyText.length != 0 && newMoneyText > 0){
        const newMoneyAmount = parseFloat(newMoneyText);
    
    previousTotal.innerText = previousTotalAmount + newMoneyAmount;

    newMoney.value = '';
    
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    if(type == 'withdraw'){
        balanceTotal.innerText = balanceTotalAmount - newMoneyAmount;
    }
    else{
        balanceTotal.innerText = balanceTotalAmount + newMoneyAmount
    }
    }
    else if(newMoneyText < 0){
        alert('Negative value! Please input Positive value above 0')
    }
    else{
        alert('Pleaes input Positive Number. Thank You')
    }
}