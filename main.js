//! CRUD   S 
//! HTML + CSS ==> UI
// ! em4e m3 el user
var productNameInput = document.getElementById('productName');//input klo
var productPriceInput = document.getElementById('productPrice');//input klo
var productCategoryInput = document.getElementById('productCategory');//input klo
var productDescInput = document.getElementById('productDesc');//input klo

var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');

localStorage.setItem 
var productList =[];
if (localStorage.getItem('products') != null) {
    productList = JSON.parse(localStorage.getItem('products') )
        displayproductList(productList)

    
}
function addProduct(){ 
    if (validProductName()=== true ) {
            //!1-creates a new product
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value , 
        category: productCategoryInput.value,
        desc: productDescInput.value
    };
    //!2-push product to list 
    productList.push(product);
    // console.log((productList));
    //!3- clear inputs
    clearInouts();
    //! set product list at logalstrage
     //!4-display list for user
     setAtlLocalStorageAndDisplay()
        
    }else {
        alert ('pls enter valid prodct name')
    }


}
 function clearInouts() {
    productNameInput.value=''; 
    productPriceInput.value=''; 
    productCategoryInput.value=''; 
    productDescInput.value='';
 }

 function displayproductList(List){
    var cartona ="";
    for(var i=0; i < List.length; i++){
        cartona+=` <tr>
                <td>${List[i].name}</td>
                <td>${List[i].price}</td>
                <td>${List[i].category}</td>
                <td>${List[i].desc}</td>
                <td><button class="btn btn-info"onclick='setFormForUpdate(${i})'>update</button></td>
                <td><button class="btn btn-danger" onclick="DeleteProduct(${i})" >delete</button></td>
            </tr> `
    } 
    console.log(cartona);
    document.getElementById('tBody').innerHTML = cartona; 
 }
function DeleteProduct(index){
    //! delete product
    productList.splice(index ,1);
    console.log(productList);
    //! Row
    //! localStorage
    setAtlLocalStorageAndDisplay()
}
function setAtlLocalStorageAndDisplay() {
    localStorage.setItem('products', JSON.stringify(productList));
    displayproductList(productList );
}
function filterProductListByName(term) {
    var filterdArr = [];
    var lowerCaseTerm =term.toLocaleLowerCase();
    for (let i = 0; i < productList.length; i++) {
          if (productList[i].name.toLocaleLowerCase().includes(lowerCaseTerm) === true) {
            // console.log(i);
            filterdArr.push(productList[i]);
          }              
    }
    // console.log(filterdArr);
    // return filterdArr;

    displayproductList(filterdArr);
}
function setFormForUpdate(index) {
        //remove add Btn
    addBtn.classList.replace('d-block', 'd-none');
        //display add Btn
    updateBtn.classList.replace('d-none', 'd-block');
    productList[index]
    productNameInput.value = productList[index].name;
    productPriceInput.value = productList[index].price;
    productCategoryInput.value = productList[index].category;
    productDescInput.value = productList[index].desc;
}

//!regular expression regex

//!patterm (valid mail)
 
function validProductName(){
    var x = /^[A-Z][a-z]{3,8}$/;
    if (x.test(productName.value)===true){
         return true;
        }else {
            return false;
        }
}