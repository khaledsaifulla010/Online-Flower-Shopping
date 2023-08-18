function addToCart (flowerType,price){

    const calculationEntry = document.getElementById('calculation-entry');
    const childCount = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${childCount+1}. ${flowerType} = ${price}`;
    calculationEntry.appendChild (p);
    
}