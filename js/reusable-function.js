// const firstFlowerText = document.getElementById('flower-1');
//     const firstFlowerTextString = firstFlowerText.innerText;
//     const flower1 = parseFloat(firstFlowerTextString)

function getInputText (elementId){

    const flowerText = document.getElementById(elementId);
    const firstFlowerTextString = flowerText.innerText;
    const flower = parseFloat(firstFlowerTextString);

    return flower;
}
