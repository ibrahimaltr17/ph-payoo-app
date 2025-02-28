document.getElementById('bonus-apply-btn').addEventListener('click',
    function(event){
        event.preventDefault()
        const coupon=document.getElementById('coupon-code').value;
        const mainBalance=convertInnerTextByID('balance');
        if(coupon==='ibrahim101'){
            let sum=mainBalance+101;
            updatedBalance('balance',sum);
        }
    }
)