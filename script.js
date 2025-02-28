let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


document.addEventListener("DOMContentLoaded", function() {
    const acrelev = document.querySelector('.acrelev');
    const text = acrelev.textContent;
    acrelev.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent =char;
        span.style.animation = `rollIn 0.7s ease-out ${(text.length -index -1)  * 0.2}s forwards`;
        acrelev.appendChild(span);
    });
});



//Auto Field scroll For active field
document.querySelectorAll('input, textarea').forEach((el) => {
    el.addEventListener('focus', (event) => {
        event.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});