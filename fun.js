let menuIcon = document.querySelector('#menu-icon');
let menubar = document.querySelector('#menubar');

menuIcon.addEventListener('click', () => {
    menubar.classList.toggle("active");
});

var typed = new Typed('#move',{
    strings:['I am a Web Developer','Ranjeet Singh Chauhan','Full Stack Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:100,
    loop:true,
    showCursor: false
});



