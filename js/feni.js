document.getElementById('btn-feni')
    .addEventListener('click', function(event){
        event.preventDefault();

        const amount = getInputFieldValueById('feni-amount');

        if(isNaN(amount)){
            alert('Failed donate');
            return;
        }
        if(amount < 1){
            alert('Please try again.');
            return;
        }
        const balance = getTextFieldValueById('account-balance');
        if(balance < amount){
            alert('You do not have enough money ');
            return;
        }
        else{
            const donate = getTextFieldValueById('donated-feni');
            const totalDonate = donate + amount;
            document.getElementById('donated-feni').innerText = totalDonate;
            const currentBalance = balance - amount;
            document.getElementById('account-balance').innerText = currentBalance;
        }
    });