// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = [];
    let count = 0;
    if (dataField.value !== '') {
        for(let i = 0 ;i < dataField.value.length; i++){
            for(let j = i+1; j< dataField.value.length+1; j++){
                outputValue.push(dataField.value.slice(i , j));
                count += 1;
                if (count == 10) {
                    outputValue.push("<br>");
                    count = 0;
                }
            }
        }
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerHTML = outputValue;
});