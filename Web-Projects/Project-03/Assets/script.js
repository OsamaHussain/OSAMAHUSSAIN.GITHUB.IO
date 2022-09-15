let btn = document.querySelectorAll('.faq div');
let content = document.querySelectorAll('.faq p');

for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    const element2 = content[i];
    element.addEventListener('click', ()=>{
        element2.classList.toggle("display");
        if (element2.classList.value == "display") {
            element.children[0].children[0].innerText = "-";
        }else {
            element.children[0].children[0].innerText = "+";
        }
    });
}

btn[0].children[0].children[0].innerText = "-";
content[0].classList.add("display");