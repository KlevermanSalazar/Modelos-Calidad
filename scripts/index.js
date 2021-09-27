const navImage=document.querySelector(".nav__image")
const navOption=document.querySelector(".nav__option")
navImage.addEventListener("click",()=>{
    navOption.classList.toggle("nav__option-visible")
})