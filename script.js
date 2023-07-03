const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
var body = document.body;

hamburger.addEventListener("click",() => {

    if(hamburger.classList.toggle("active")){
        navMenu.classList.toggle('active');
        body.classList.add('overflowhidden');
    }    
    else{
        navMenu.classList.toggle('active');
        body.classList.remove('overflowhidden');
    }
})


document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click"),() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

})


