// navbar fixed 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');
Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});