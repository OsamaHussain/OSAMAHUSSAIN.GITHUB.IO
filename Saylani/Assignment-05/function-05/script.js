// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let temp = [];
    let outputValue = [];
    if (dataField.value !== '') {
        for (let i = 0; i < dataField.value.split(" ").length; i++) {
            const element = dataField.value.split(" ")[i];
            temp.push(element);
            outputValue.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
        }
        

    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = outputValue.join(" ");
});