const navMenu = document.querySelector(".nav-Menu");
const burgerBox = document.querySelector(".burger-box");
function hideNav() {
    if (window.innerWidth <= 768) {
        // navMenu.style.display = "none";
        burgerBox.style.display = "flex";
    }
    else {
        // navMenu.style.display = "block";
        burgerBox.style.display = "none";
    }
}
window.addEventListener("resize", hideNav);
window.addEventListener("load", hideNav);


let menuOpen = false;
function clickHideNav() {
    if (!menuOpen) {
        burgerBox.classList.add("open");
        menuOpen = true;
        // navMenu.style.display = "block";
        navMenu.classList.add("active");
    }
    else {
        burgerBox.classList.remove("open");
        menuOpen = false;
        navMenu.classList.remove("active");
        // navMenu.style.display = "none";
    }
}
burgerBox.addEventListener('click', clickHideNav);

            // mobile view of front page

const introDes = document.querySelector('.introDes');
const introDesTexth3 = document.querySelector('.introDes h3');
const introDesTexth1 = document.querySelector('.introDes h1');

let color = false;
// fucntion colorChange()
window.addEventListener('load',() => {
        introDes.classList.add('colorEnd');
        introDesTexth3.classList.add('textAppearh3');
        introDesTexth1.classList.add('textAppearh1');
        // color = true;

});
// function textAppear(){
//     introDes.classList.remove('colorStar');
//     introDes.classList.add('colorEnd');
// }
