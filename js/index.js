let loginButton=document.getElementById('login-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
        const account=document.getElementById('account-number').value;
        // let accountNumber=account.value;
        const pin=document.getElementById('pin').value;
        let pinNumber= parseInt(pin)
        if(account.length===11){
            if(pinNumber===1234){
                window.location.href="./main.html"
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