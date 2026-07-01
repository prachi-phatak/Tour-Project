let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}


//----------- Toggle Search Form Updated----------------//
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const searchForm = document.querySelector('.search-form');

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
});

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


// back to top cta
const ctaTop = document.querySelector('#ctaTop');

// debounce helper to improve scroll performance
function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

window.addEventListener("scroll", debounce(() => {
    if (window.scrollY > 300) {
        ctaTop.classList.add("show");
    } else {
        ctaTop.classList.remove("show");
    }
}, 100));

ctaTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.classList.replace("fa-moon", "fa-sun");
}

themeBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.classList.replace("fa-sun", "fa-moon");
    }
};