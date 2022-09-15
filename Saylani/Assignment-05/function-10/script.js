// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = [];
    let input = dataField.value.split(",");
    let temp = [];
    
    if (dataField.value !== '') {
        for (let i = 0; i < input.length; i++) {
            temp.push(parseInt(input[i]));
        }
        console.log(temp.sort(function(a,b){return a-b}));
        outputValue.push(temp[1]);
        outputValue.push(temp[input.length-2]);
        
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = outputValue;
});