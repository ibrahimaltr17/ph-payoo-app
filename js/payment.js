document.getElementById('payment-apply-btn').addEventListener('click',
    function (event){
        event.preventDefault()
        const paymentType=document.getElementById('payment-type').value;
        const billerAccount=document.getElementById('biller-number').value;
        const payAmount=convertValueByID('payment-money');
        const payPinNumber=convertValueByID('payment-pin');
        const mainBalance=convertInnerTextByID('balance');
        if(billerAccount.length===11){
            if(payAmount<mainBalance){
                if(payPinNumber===1234){
                    let sum=mainBalance-payAmount;
                    updatedBalance('balance',sum);
                    let transHistory=document.createElement('div')
                    transHistory.innerHTML= `
                    <div class="bg-white flex items-center p-3 gap-5">
                    <div class="">
                        <img src="image/purse1.png" alt="">
                    </div>
                    <div class="">
                        <h3 class="font-bold">Cash Out</h3>
                        <p>Paid ${payAmount} USD for ${paymentType} to ${billerAccount} </p> 
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