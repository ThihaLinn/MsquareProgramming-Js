let btn = document.getElementsByClassName("btn")[0]
let body = document.getElementsByTagName("body")[0]
let message = document.createElement("div")

btn.addEventListener("click",() => {
    message.innerHTML = ""
    message.textContent = "Your file was succeffully uploaded"
    body.append(message)
    // message.style.bottom = `-${message.offsetHeight}px`
    message.style.transform = `translateY(-${message.offsetHeight})`
    console.log(message.offsetHeight)

    setTimeout(() => {
        message.style.bottom = "0px"
        // message.style.transform = `translateY(${message.offsetHeight})`
    }, 1000);

    setTimeout(() => {
        message.style.bottom = `-${message.offsetHeight}px`
        //message.style.transform = `translateY(${message.offsetHeight})`
    }, 4000);

})