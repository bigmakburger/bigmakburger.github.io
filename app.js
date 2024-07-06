var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";
    var totalPrice = 0;
    
    function calculateOrder(qty, price, product) {
        if (parseFloat(qty.value) > 0) {
            var subtotal = parseFloat(qty.value) * parseFloat(price.textContent.replace(/[^\d.-]/g, ''));
            totalPrice += subtotal;
            var order = qty.value.toString() + ' pc/s x ' + price.textContent + ' ------ ' + product.textContent + ' ------ ₱' + subtotal.toFixed(2) + '\n';
            carts.textContent += order;
        }
    }
    
    calculateOrder(qty1, price1, product1);
    calculateOrder(qty2, price2, product2);
    calculateOrder(qty3, price3, product3);
    calculateOrder(qty4, price4, product4);
    calculateOrder(qty5, price5, product5);
    calculateOrder(qty6, price6, product6);
    
    total.value = 'Php' + totalPrice.toFixed(2);
}

function calculateChange() {
    var totalPrice = parseFloat(total.value.replace(/[^\d.-]/g, ''));
    var tenderedAmount = parseFloat(cash.value);
    
    if (!isNaN(totalPrice) && !isNaN(tenderedAmount)) {
        var changeAmount = tenderedAmount - totalPrice;
        change.value = 'Php' + changeAmount.toFixed(2);
    } else {
        change.value = "";
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);

cash.addEventListener("keyup", calculateChange);
