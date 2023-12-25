let Btnden=document.getElementById("den")
let Btnlollo=document.getElementById("lollo")

Btnden.addEventListener("click", ()=>{
    window.location.href="lollo.html"
})

Btnlollo.addEventListener("mouseover", ()=>{
    let x=Math.floor(Math.random()*(window.innerWidth - Btnlollo.offsetWidth))
    let y=Math.floor(Math.random()*(window.innerHeight - Btnlollo.offsetHeight))

    Btnlollo.style.position='absolute'
    Btnlollo.style.left=x+"px"
    Btnlollo.style.top=y+"px"

})

Btnlollo.addEventListener("click", ()=>{
    let x=Math.floor(Math.random()*(window.innerWidth - Btnlollo.offsetWidth))
    let y=Math.floor(Math.random()*(window.innerHeight - Btnlollo.offsetHeight))

    Btnlollo.style.position='absolute'
    Btnlollo.style.left=x+"px"
    Btnlollo.style.top=y+"px"

})