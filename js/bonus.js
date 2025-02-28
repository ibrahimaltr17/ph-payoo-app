document.getElementById('bonus-apply-btn').addEventListener('click',
    function(event){
        event.preventDefault()
        const coupon=document.getElementById('coupon-code').value;
        const mainBalance=convertInnerTextByID('balance');
        if(coupon==='ibrahim101'){
            let sum=mainBalance+101;
            updatedBalance('balance',sum);
            let transHistory=document.createElement('div')
                    transHistory.innerHTML= `
                    <div class="bg-white flex items-center p-3 gap-5">
                    <div class="">
                        <img src="image/bonus1.png" alt="">
                    </div>
                    <div class="">
                        <h3 class="font-bold">Payment</h3>
                        <p>Congratulation you have got <span class="font-semibold">101</span> USD bonus </p> 
                    </div>
                    </div>
                    `
        }
    }
)