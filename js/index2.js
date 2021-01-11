let productName = document.getElementById("productNameInput")
let productPrice = document.getElementById("productPriceInput")
let productCategory = document.getElementById("productCategoryInput")
let productDesc = document.getElementById("productDescInput")
let products = [];
let indexNum;
if(localStorage.getItem("myProducts") == null)//zebon gedid //awl mara yft7
{
    products = [];
}
else
{
    products = JSON.parse( localStorage.getItem("myProducts"));//dh zbon 2adim leh 7agat fi el localStorage
    displayProduct();
}

function addProduct() {

    let btn2 = document.getElementById('demo').innerHTML
   
    if (btn2 == 'Update') {
     
         products[indexNum].name = productName.value
         products[indexNum].price = productPrice.value
         products[indexNum].category = productCategory.value
         products[indexNum].desc = productDesc.value
         displayProduct();

        document.getElementById('demo').innerHTML = 'Add Product'

    } else {
        let product = {

            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            desc: productDesc.value
        };

        products.push(product);
        
    
        clearForm();
       
         console.log(products);
         displayProduct();
    }
    //1
    localStorage.setItem("myProducts" ,  JSON.stringify( products) );
  
}

function clearForm() {

    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";
   


}

function displayProduct() {
    let itemx = '';
    for (let i = 0; i <products.length; i++) {
        itemx += `  <tr>
        <td>${i}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        
        <td><button class="btn btn-info " onclick="update(${i})">UPDATE</button></td>
        <td><button class="btn btn-danger "onclick="deleteProduct(${i})">delete</button></td>
     
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = itemx;
}

function deleteProduct(productIndex)
{
    products.splice(productIndex,1);
    localStorage.setItem("myProducts" , JSON.stringify(products))

    displayProduct();
}

function search(term){
    item=""
    for(let i=0;i<products.length;i++){
        if(products[i].name.toLowerCase().includes(term.toLowerCase())==true){
            item += `  <tr>
            <td>${i}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].description}</td>
            
            <td><button class="btn btn-info ">UPDATE</button></td>
            <td><button class="btn btn-danger "onclick="deleteProduct(${i})">delete</button></td>
         
        </tr>`
        }
    }
    document.getElementById("tableBody").innerHTML = item;
}

function update(i){
    indexNum=i;
    productName.value=products[i].name
    productPrice.value=products[i].price
    productCategory.value=products[i].category
    productDesc.value=products[i].description

    document.getElementById("demo").innerHTML='Update'
    

}
