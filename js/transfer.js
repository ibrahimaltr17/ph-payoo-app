document.getElementById('transfer-apply-btn').addEventListener('click',
    function (event){
        event.preventDefault()
        const transferAccount=document.getElementById('transfer-number').value;
        const transferAmount=convertValueByID('transfer-amount');
        const transferPinNumber=convertValueByID('transfer-pin');
        const mainBalance=convertInnerTextByID('balance');
        if(transferAccount.length===11){
            if(transferAmount<mainBalance){
                if(transferPinNumber===1234){
                    let sum=mainBalance-transferAmount;
                    updatedBalance('balance',sum);
                    let transHistory=document.createElement('div')
                    transHistory.innerHTML= `
                    <div class="bg-white flex items-center p-3 gap-5">
                    <div class="">
                        <img src="image/money1.png" alt="">
                    </div>
                    <div class="">
                        <h3 class="font-bold">Transfer Money</h3>
                        <p>Transferred <span class="font-semibold">${transferAmount}</span> USD to account: ${transferAccount}</p> 
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