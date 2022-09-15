// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = '';
    if (dataField.value !== '') {
        for (let i = 0; i < dataField.value.length; i++) {
            const element = dataField.value[dataField.value.length-i-1];
            outputValue += element;
        }
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = outputValue;
});