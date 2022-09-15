// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = '';
    if (dataField.value !== '') {
        outputValue = dataField.value.toLowerCase().split("").sort().join("");
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = outputValue;
});