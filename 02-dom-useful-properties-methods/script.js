let body = document.getElementsByTagName("body")[0]
let parentDiv = document.createElement("div")
let childDivOne = document.createElement("div")
let childDivTwo = document.createElement("div")

childDivOne.append("One")
childDivTwo.append("Two")
parentDiv.append(childDivOne,childDivTwo)
body.append(parentDiv)

parentDiv.classList.add("parent","container")
childDivOne.classList.add("category")
parentDiv.classList.remove("container")


let box = document.getElementsByClassName("box")[0]
console.log(getComputedStyle(box).height)
console.log(getComputedStyle(box).width)
console.log(getComputedStyle(box).backgroundColor)