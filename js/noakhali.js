document.getElementById('btn-noakhali')
    .addEventListener('click', function(event){
        event.preventDefault();

        const amount = getInputFieldValueById('noakhali-amount');

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
            const donate = getTextFieldValueById('donated-noakhali');
            const totalDonate = donate + amount;
            document.getElementById('donated-noakhali').innerText = totalDonate;
            const currentBalance = balance - donate;
            document.getElementById('account-balance').innerText = currentBalance;
        }
    });