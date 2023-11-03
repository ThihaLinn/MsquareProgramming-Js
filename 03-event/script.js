let btn = document.getElementsByTagName("button")[0]
let img = document.getElementsByClassName("image")[0]

let orgImg = img.src
let count =0
let arraylink = [
    "https://shorturl.at/AEK45",
    "https://shorturl.at/jAHZ5",
    "https://shorturl.at/ipFW7"
]
console.log(orgImg)
const myFunction = () =>{

    if(count === 3){
        img.src =orgImg
        count=0
        return 0;
    }
    img.src= arraylink[count]
    count ++;
    console.log(count)
}

btn.addEventListener("click",myFunction)
