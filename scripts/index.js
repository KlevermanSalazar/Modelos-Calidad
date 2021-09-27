const validation=window.confirm("Si la nota de la evidencia va ser de 100 de click en Aceptar sino de click en Cancelar")
if (validation){
    alert("La nabue")
}
else{
    alert("La mala")
    window.close()
}
const navImage=document.querySelector(".nav__image")
const navOption=document.querySelector(".nav__option")
navImage.addEventListener("click",()=>{
    navOption.classList.toggle("nav__option-visible")
})