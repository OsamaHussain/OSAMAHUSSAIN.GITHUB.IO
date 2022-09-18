let slideIndex = 1;
let pos = 0;
let slideObj = [
    { sName: 'Sea Side Tunnel', sUrl: 'photo-1661007687767-344b75b0fa3f.jpg' },
    { sName: 'Desk with Matrials', sUrl: 'photo-1661493818626-629b09c2f4d2.jpg' },
    { sName: 'Sweet Cake with Others', sUrl: 'photo-1661607699778-919620c40b1f.jpg' },
    { sName: 'Chicken with Other Yummy Dishes', sUrl: 'photo-1661607775751-dc9efc8f3a9c.jpg', },
    { sName: 'Cute Baby Girl', sUrl: 'photo-1661749701679-639d5e14f4a4.jpg' },
    { sName: 'Study Work Hard Motivation', sUrl: 'photo-1661860859715-d963b4d51268.jpg', },
    { sName: 'Beautiful View of an Hotel', sUrl: 'photo-1661872952496-e4e3833d2fdf.jpg', },
    { sName: 'Cartoon Animation of Parking Game', sUrl: 'photo-1662092560436-5bdae9a1acea.jpg', },
    { sName: 'Sea View with Mountain Rocks', sUrl: 'photo-1662689237972-ba2165ca6229.jpg', },
    { sName: 'Sea View with Beach', sUrl: 'photo-1663245360704-0d23d90c993c.jpg', },

];

function moveSlide(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n === 1) pos -= 1000;
    if (n === -1) pos += 1000;
    slideIndex = Number((slides.length - 1) * -1 + '000');
    if (pos < slideIndex) pos = 0;
    if (pos > 0) pos = -9000;
    if (n === 1) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.transform = 'translateX(' + pos + 'px)';
        }
        dotSlide(Math.abs(pos / 1000));
    } else if (n === -1) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.transform = 'translateX(' + pos + 'px)';
        }
        dotSlide(Math.abs(pos / 1000));
    }

    // console.log(dotN);
}

function createSlide() {
    let container = document.getElementsByClassName('container')[0];
    let dots = document.getElementsByClassName('dots')[0];
    for (let i = 0; i < slideObj.length; i++) {
        let cSlide = document.createElement('div');
        cSlide.setAttribute('class', 'slide fade');
        cSlide.innerHTML = `
                    <div class="numbertext"></div>
                    <img src="./Assets/img/${slideObj[i].sUrl}">
                    <div class="text">${slideObj[i].sName}</div>
                    `;
        container.appendChild(cSlide);

        let dot = document.createElement('span');
        dot.setAttribute('class', 'dot');
        dot.setAttribute('onclick', 'dotSlide(' + i + '); directMoveDotSlide(' + i + ')');
        dots.appendChild(dot);
    }
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    button1.setAttribute('class', 'prev');
    button1.setAttribute('onclick', 'moveSlide(-1)');
    button1.innerHTML = '&#10094;';
    button2.setAttribute('class', 'next');
    button2.setAttribute('onclick', 'moveSlide(1)');
    button2.innerHTML = '&#10095;';
    container.appendChild(button1);
    container.appendChild(button2);
}
createSlide();

function slideNumbers() {
    let num = document.getElementsByClassName('numbertext');
    for (i = 0; i < num.length; i++) {
        num[i].innerText = i + 1 + ' / ' + num.length;
    }
}
slideNumbers();

function dotSlide(n) {
    let d = document.getElementsByClassName('dot');
    for (let i = 0; i < d.length; i++) {
        d[i].className = d[i].className.replace(" active", "");
    }
    d[n].classList.add('active');
}
dotSlide(0);

function directMoveDotSlide(n) {
    let i;
    let d = document.getElementsByClassName('dot');
    let slides = document.getElementsByClassName('slide');
    pos = -(n * 1000);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(' + pos + 'px)';
    }
}