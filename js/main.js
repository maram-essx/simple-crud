var nameInput = document.getElementById("pName");
var catInput = document.getElementById("pCategory");
var priceInput = document.getElementById("pPrice");
var descriptionInput = document.getElementById("pDescription");
var submitBtn = document.getElementById("submitBtn");
var inputs=document.getElementsByClassName("form-control"); //عشان امسك كل الانبوتس اللي في (html )
var products = [];
//retrieve
if(JSON.parse(localStorage.getItem("productsList"))!=null)
{
    products=JSON.parse(localStorage.getItem("productsList"));
    displayData()
}
submitBtn.onclick = function() {
    if(submitBtn.innerHTML=="add product")
    {
    addProduct();
    }
    else
    {
    updateProduct()
    }
displayData();
clearForm()
}
//add product
function addProduct()
{
    var product = {
        name: nameInput.value,
        category: catInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
    };
    products.push(product);
    localStorage.setItem("productsList",JSON.stringify(products))
}
//display data
function displayData() {
    var content = ''; //to collect  trs
    for (var i = 0; i < products.length; i++) {

        content += `<tr>
        <td>${i+1}</td>
        <td> ${products[i].name}</td>
        <td>${products[i].category} </td>
        <td>${products[i].price}</td>
        <td>${products[i].description}</td>
        <td> <button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
        <td> <button onclick="getProductInfo(${i})" class='btn btn-warning '>update</button></td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML = content;
}

//to clear form after display
function clearForm()
{
for (var i = 0; i< inputs.length; i++) {
   inputs[i].value='';
    
}
}
function deleteProduct(index){
    products.splice(index,1);
    displayData();
    localStorage.setItem("productsList",JSON.stringify(products))
}
//search
function search(val) //كدا مسكت القيمه اللي اتكتبت في الانبت
{ //كدا معايا القيمة اللي هعمل سيرش بيها 
    var content = '';
for (var i = 0; i < products.length; i++) {
    //لو حرف واحد شبه كلمه هيجيب الكلمه
//real time search
//uppercase or lowercase
if(products[i].name.toLowerCase().includes(val.toLowerCase())) 

{    
       content += `<tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].category}</td>
        <td>${products[i].price}</td>
        <td>${products[i].description}</td>
        <td> <button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
        <td> <button onclick="getProductInfo(${i})" class='btn btn-warning '>update</button></td>
        </tr>`;
        }
        document.getElementById("tableBody").innerHTML = content;
}     
}
//update
function getProductInfo(index)
{
nameInput.value=products[index].name;
priceInput.value=products[index].price;
catInput.value=products[index].category;
descriptionInput.value=products[index].description;
submitBtn.innerHTML="update Product"
}
function updateProduct()
{
    alert("good")
}