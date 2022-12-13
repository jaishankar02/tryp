const navMenu = document.querySelector(".nav-Menu");
const burgerBox = document.querySelector(".burger-box");
function hideNav(){
    if (window.innerWidth <= 768){
        navMenu.style.display = "none";
        burgerBox.style.display = "flex";
    }
    else{
        navMenu.style.display = "block";
        burgerBox.style.display = "none";
    }
}
window.addEventListener("resize",hideNav);
window.addEventListener("load",hideNav);


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
