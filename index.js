const navMenu = document.querySelector(".nav-Menu");
function hideNav(){
    if (window.innerWidth <= 768){
        navMenu.style.display = "none";
    }
    else{
        navMenu.style.display = "block";
    }
}
window.addEventListener("resize",hideNav);
window.addEventListener("load",hideNav);

const burgerBox = document.querySelector(".burger-box");
let menuOpen = false;
burgerBox.addEventListener('click',() => {
    if(!menuOpen){
        burgerBox.classList.add("open");
        menuOpen = true;
    }
    else{
        burgerBox.classList.remove("open");
        menuOpen = false;
    }
})
