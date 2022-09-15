// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = "";
    let count = 0;
    let input = parseInt(dataField.value);
    if (dataField.value !== '') {
        // outputValue = dataField.value.match(/[aeiou]/gi).length;
        for (let i = input-1; i > 1; i--) {
            if(input%i==0){
                outputValue = input + " - Not a Prime Number";
                count++;
                break;
            }
        }
        if (count == 0) {
            outputValue = input + " - A Prime Number";
        }
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = outputValue;
});