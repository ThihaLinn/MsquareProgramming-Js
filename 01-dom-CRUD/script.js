//create

document.getElementsByTagName("body");

let h1Element = document.createElement("h1");
let textNode = document.createTextNode("JAVA");
h1Element.appendChild(textNode);

let tagCollection = document.getElementsByTagName("body")
let bodyElement = tagCollection[0]
bodyElement.appendChild(h1Element)
console.log(h1Element)

//Read

let readH1Element = document.getElementsByTagName('h1')[0]
console.log(readH1Element.textContent)

//update

readH1Element.textContent = "Java Script"
console.log(readH1Element)

//Remove

let removeTag = document.createElement("h2")
let removeText = document.createTextNode("Remove text")
removeTag.appendChild(removeText)
bodyElement.appendChild(removeTag)
removeTag.remove()












