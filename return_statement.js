// Phillips, Ralph
// Returning a value from a JS function
// 07 JUN 2021

// Source: https://youtu.be/q-O1n445uys

function doAddition(firstNum, secondNum){
    return firstNum + secondNum;
}

function doSubtraction(firstNum, secondNum){
    return firstNum - secondNum;
}

function doMath(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);

    let sum = doAddition(n1, n2);
    let difference = doSubtraction(n1, n2);

    console.log(`${n1} + ${n2} = ${sum}`);
    console.log(`${n1} - ${n2} = ${difference}`);
}

document.getElementById('calcButton').addEventListener('click', doMath);
