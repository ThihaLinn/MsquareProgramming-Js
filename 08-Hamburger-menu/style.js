const menu = document.querySelector(".menu")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const overlay = document.getElementById("overlay")
const liTag = document.getElementsByTagName("li")

let isopen=false
menu.addEventListener("click",()=>{
    // if(isopen==false){
    //     line1.classList.add("rotateLine1")
    //     line2.classList.add("removeLine2")
    //     line3.classList.add("rotateLine3")
    //     // overlay.classList.remove("overlay")
    //     console.log(overlay)
    //     isopen=true
    // }else if(isopen=true){
    //     line1.classList.remove("rotateLine1")
    //     line2.classList.remove("removeLine2")
    //     line3.classList.remove("rotateLine3")
    //     overlay.classList.add("overlay")
    //     console.log(overlay)
    //     isopen = false
    // }
    line1.classList.toggle("rotateLine1")
    line2.classList.toggle("removeLine2")
    line3.classList.toggle("rotateLine3")
    overlay.classList.toggle("overlay")
    for (let i = 0; i < liTag.length; i++) {
        liTag[i].classList.toggle("moveUp") 
    }
    
})