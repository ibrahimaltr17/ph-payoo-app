const button=document.getElementById('add-money-btn').addEventListener('click',
    function (event){
        event.preventDefault()
        const mainBalance=convertInnerTextByID('balance');
        const bank=document.getElementById('banking').value;
        const account=document.getElementById('account-number').value;
        const addMoney=convertValueByID('add-money');
        const pinNumber=convertValueByID('pin');
        if (account.length===11){
            if(pinNumber===1234){
                const sum=mainBalance+addMoney
                updatedBalance('balance',sum)
                let transHistory=document.createElement('div')
                transHistory.innerHTML= `
                <div class="bg-white flex items-center p-3 gap-5">
                    <div class="">
                        <img src="image/wallet1.png" alt="">
                    </div>
                    <div class="">
                        <h3 class="font-bold">Add Money</h3>
                        <p>Added <span class="font-semibold">${addMoney}</span> USD from ${bank} to your account</p> 
                    </div>
                </div>
                `
                transactionBox.appendChild(transHistory)
            }
            else{
                alert('Enter valid PIN')
            }
        }
        else{
            alert('Enter valid number')
        }
    }
)

const logOut=document.getElementById('logout-btn').addEventListener('click',
    function(){
        window.location.href="./index.html"
    }
)