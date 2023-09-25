var allProduct = document.querySelectorAll(".box .card-box h2") 
var btn = document.querySelector("#btn")
var div = document.querySelector("#content")
var div1 = document.querySelector("#div1")
var totalprice = 0

var totalPrice = 0 ;
allProduct.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";
        if (content.innerHTML != "" ){
            btn.style.display = "block";
           
        }
    }
})
btn.onclick = function (){
    div1.innerHTML = totalPrice
}

