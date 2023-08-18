document.getElementById('buy-btn1').addEventListener('click',function(){

    addToCart('Flower-1',50); 
    const flower1 = getInputText('flower-1');
    totalPrice += flower1;
    discountPrice =totalPrice -  totalPrice * 0.3;
    updateResult();
    updateDiscountPrice();

});

document.getElementById('buy-btn2').addEventListener('click',function(){

    addToCart('Flower-2',90);
    const flower2 = getInputText('flower-2')
    totalPrice += flower2;
    discountPrice =totalPrice -  totalPrice * 0.3;
    updateResult();
    updateDiscountPrice();

});

document.getElementById('buy-btn3').addEventListener('click',function(){

    addToCart('Flower-3',170);
    const flower3 = getInputText('flower-3');
    totalPrice += flower3;
    discountPrice =totalPrice -  totalPrice * 0.3;
    updateResult();
    updateDiscountPrice();

   

});

document.getElementById('delete-btn').addEventListener('click',function(){
    const totalPriceText = document.getElementById('total-price');
    const totalDiscountPrice = document.getElementById('discount-price');
    const totalCalculationEntry = document.getElementById('calculation-entry');
    
    totalPriceText.innerText = '';
    totalDiscountPrice.innerText = '';
    totalCalculationEntry.innerText = '';
    console.log(location.href = 'index.html');

});