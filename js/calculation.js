let totalPrice = 0;
function updateResult (){
   
    const resultElement = document.getElementById('total-price');
    resultElement.textContent = `${totalPrice}`;

}

let discountPrice = 1;

function updateDiscountPrice (){
    const discountResultElement = document.getElementById('discount-price');
    discountResultElement.textContent = `${discountPrice}`;
}