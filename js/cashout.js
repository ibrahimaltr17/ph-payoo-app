document.getElementById('cashout-apply-btn').addEventListener('click',
    function (event){
        event.preventDefault()
        const cashoutAccount=document.getElementById('cashout-number').value;
        const withdrawAmount=convertValueByID('withdraw-amount');
        const cashoutPinNumber=convertValueByID('cashout-pin');
        const mainBalance=convertInnerTextByID('balance');
        if(cashoutAccount.length===11){
            if(withdrawAmount<mainBalance){
                if(cashoutPinNumber===1234){
                    let sum=mainBalance-withdrawAmount;
                    updatedBalance('balance',sum);
                    let transHistory=document.createElement('div')
                    transHistory.innerHTML= `
                    <div class="bg-white flex items-center p-3 gap-5">
                    <div class="">
                        <img src="image/send1.png" alt="">
                    </div>
                    <div class="">
                        <h3 class="font-bold">Cash Out</h3>
                        <p>Withdraw <span class="font-semibold">${withdrawAmount}</span> USD from agent(Agent Number: ${cashoutAccount})</p> 
                    </div>
                    </div>
                    `
                transactionBox.appendChild(transHistory)
                }
                else{
                    alert('Enter valid PIN');
                }
            }
            else{
                alert('Do not have sufficient balance');
            }
        }
        else{
            alert('Enter valid number')
        }
    }
)