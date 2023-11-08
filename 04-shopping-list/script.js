const container = document.getElementsByClassName("container")[0]
const input = document.getElementsByTagName("input")[0]

let productId = 1
const add = ()=>{

const shoppingList = document.createElement("div")
const shoppingItem = document.createElement("span")
const trush =document.createElement("i")



shoppingItem.classList.add("productlist")
shoppingItem.id =productId
trush.classList.add("fa-solid","fa-trash-can","trush")

console.log(shoppingItem)

//Append State
shoppingItem.append(productId,'. ',input.value)
shoppingList.append(shoppingItem,trush)
container.append(shoppingList)

//purchased State
shoppingItem.addEventListener("click",()=>{
    if(shoppingItem.classList.contains("purchased")){
        shoppingItem.clastsList.remove("purchased")
    }else
        shoppingItem.classList.add("purchased")
})

//Final state
productId++
input.value= ""
let beforRemoved = container.getElementsByTagName("div").length+1

//remove state
trush.addEventListener("click",()=>{
        
        let removedItem = shoppingList.remove() 
        // let removedData = shoppingList.getElementsByTagName("span")[0]
        // let removedId = removedData.id
        
        // console.log(removedId)

        // if(removedId == beforRemoved){
        //     console.log("before :",beforRemoved,removedId)
        
        //    productId--
        //    console.log("ok")
        // }else{
        //     console.log(removedId)
        //     console.log(beforRemoved)
        //      for (let i = removedId; i < beforRemoved; i++) {
        //     shoppingItem.append(i,'. ',)
        //     shoppingList.append(shoppingItem,trush)
        //     container.append(shoppingList)
        //     console.log("working")
            
            
        // }
        // } 
            

        
        
})


 
}

input.addEventListener("change",add)


//check if end or not
//