const searchBar = document.getElementById("searchBar")
const productList = document.getElementsByClassName("productList")[0]
const container = document.getElementsByClassName("container")[0]
let products;

let URL ="https://fakestoreapi.com/products"

let data = ()=> fetch(URL)
    .then(res => res.json())
    .then(json => { return json })

let getProduct = async () => {
   let file =await data();
   products = file;
   console.log(products)
   container.style.display = "block"
}

getProduct()



let productElement;
let index=-1;
searchBar.addEventListener("keyup",(event)=>{
  

    productList.innerHTML=""
    const filerProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(event.target.value.toLowerCase())
    })

    if (event.target.value.length===0){
        return;
    }

    if(products != undefined){
        
    }

    if(filerProduct.length>0 && productList.textContent==""){
        for (let i = 0; i < filerProduct.length; i++) {
             productElement = document.createElement("div")
            const titleElement = document.createElement("span")
            const imgElement = document.createElement("img")

            titleElement.textContent=filerProduct[i].title
            imgElement.src=filerProduct[i].image
            productElement.id = i;
            productElement.append(titleElement,imgElement)
            productList.append(productElement)
            productElement.classList.add("form-control","product")
            
        }
    }

    const selectedProduct = () => {
        const product = index.toString();
        let selectProduct = document.getElementById(product)
        selectProduct.classList.add("selectProduct")
        return selectProduct;
    }
    
    const getProduct = () => {
        selectedProduct()
        let result = document.getElementsByClassName("selectProduct")[0].firstChild
        console.log(result.innerHTML)
        searchBar.value = result.innerHTML
        console.log(searchBar)
    }
    

    if (event.key === "ArrowDown") {
        if (index===filerProduct.length-1) {
            index=-1
        }
        index++
        selectedProduct()

    } else if (event.key === "ArrowUp") {
        if (index === 0) {
            index = filerProduct.length
        }
        index--
        selectedProduct()
    } else if(event.key==="Enter"){
        getProduct();

    }

    

})
