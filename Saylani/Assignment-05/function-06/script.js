// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = [];
    let result;
    if (dataField.value !== '') {
        for (let i = 0; i < dataField.value.split(" ").length; i++) {
            const element = dataField.value.split(" ")[i];
            outputValue.push(element);
        }
        result = outputValue[0];
        for (let i = 1; i < outputValue.length; i++) {
            if (result.length < outputValue[i].length) {
                result = outputValue[i];
            }
        }
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = result;
});