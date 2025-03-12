const current = document.querySelector("#current");
const images = document.querySelector(".images");
const img = document.querySelectorAll(".images img");
const opacity = 0.6;

img[0].style.opacity = opacity;

images.addEventListener("click", (event) =>{
    img.forEach((imgElem)=>imgElem.style.opacity = 1);
    current.src = event.target.src;
    current.classList.add("fadeIn");
    setTimeout(()=>{
        current.classList.remove("fadeIn");
    },600);

    event.target.style.opacity = opacity;
});
