document.getElementById('btn-quota')
    .addEventListener('click', function(event){
        event.preventDefault();

        const amount = getInputFieldValueById('quota-amount');

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
            const donate = getTextFieldValueById('donated-quota');
            const totalDonate = donate + amount;
            document.getElementById('donated-quota').innerText = totalDonate;
            const currentBalance = balance - amount;
            document.getElementById('account-balance').innerText = currentBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('text-left');
            const now = new Date();
            const currentDateTime = now.toLocaleString();
            div.innerHTML = `
                <h4 class="text-2xl font-bold text-black">${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
                <p class="text-gray-500">Date:${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
           `
            document.getElementById('transaction-container').appendChild(div);
            document.getElementById('my_modal_1').showModal();
        }
    });

