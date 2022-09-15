// Variables
let taskAdder = document.querySelector('.task-adder');
let text = document.querySelector('#text');
let submitBtn = document.querySelector('#submit-btn');

let taskList = document.querySelector('.task-list');
let taskListE = document.querySelectorAll('.task-list-in');
// let deleteBtn = document.querySelectorAll('.delete');

// Functions and Event Listners
function addTask(){
    if (text.value === "") {
        alert("Important ---<>--- You must enter something");
    }else {
        let t = text.value;
        text.value = "";
        let taskListE = document.createElement('div');
        taskListE.classList.add('task-list-in');
        let taskText = document.createElement('div');
        taskText.classList.add('task-text');
        taskListE.appendChild(taskText);
        let para = document.createElement('p');
        para.innerText = `${t}`;
        taskText.appendChild(para);
        let buttons = document.createElement('div');
        buttons.innerHTML = `<button class="finish"><i class="fa-solid fa-check"></i></button>
        <button class="delete"><i class="fa-solid fa-trash-can"></i></button>`;
        taskListE.appendChild(buttons);
        taskList.prepend(taskListE);
    }
}

function finishTask(){
    let finishBtn = document.querySelectorAll('.finish');
    for (let i = 0; i < finishBtn.length; i++) {
        finishBtn[i].addEventListener('click', ()=>{
            let item = finishBtn[i].parentElement.parentElement.firstElementChild.firstElementChild;
            item.innerHTML = `<s>${item.innerText}</s>`;
        });
    }
}
finishTask();

function deleteTask(){
    let deleteBtn = document.querySelectorAll('.delete');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', ()=>{
            let item = deleteBtn[i].parentElement.parentElement;
            item.remove();
        });
    }
}
deleteTask();

submitBtn.addEventListener('click', ()=>{
    addTask();
    text.focus();
    finishTask();
    deleteTask();
});

text.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        addTask();
        text.focus();
        finishTask();
        deleteTask();
    }
});