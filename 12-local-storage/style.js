let comment = document.getElementsByTagName("textarea")[0]
let comments = document.getElementsByClassName("comments")[0]
let btn = document.getElementsByTagName("button")[0]
let count=1



btn.addEventListener("click",() => {
    if ((comment.value.trim().length) > 0) {
        let div = document.createElement("div")
        div.classList.add("comment","w-50")
        div.textContent = comment.value
        comments.appendChild(div)
        comment.value=""
    }
    localStorage.setItem("comments", comments.innerHTML)
})

let condition = localStorage.getItem("comments")


window.addEventListener("load", () => {
    if (condition!=null){
        comments.innerHTML = condition
    }
})