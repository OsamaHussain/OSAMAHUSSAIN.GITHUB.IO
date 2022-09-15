// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
function checkDataType(value)
{
var dataTypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dataTypes.length; x < len; x++) 
     {
            if (value instanceof dataTypes[x])
            {
                return dataTypes[x];
            }
      }
    }
    return typeof value;
}

let input = function(a,b){return a-b};
// Enter Any Value (object, boolean, function, number, string, and undefined)

dataField.value = input;
let outputValue = checkDataType(input);
submitBtn.addEventListener('click', ()=>{
    outputField.children[0].innerText = outputValue;
});