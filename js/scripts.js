$(function(){

//Constractor
function Pizza (pizzaName, pizzaSize, pizzaToppings, pizzaPrice, pizzaQuantity){
   this.pizzaName = pizzaName;
   this.pizzaSize = pizzaSize;
   this.pizzaToppings = pizzaToppings;
   this.pizzaPrice = pizzaPrice;
   this.pizzaQuantity = pizzaQuantity;
}

function UserCart(pizza){

}


//prototype
Pizza.prototype.discount = function(){

}
Pizza.prototype.promotion = function(){

}

//Gloval Variables

var pizzaName = "";
var pizzaSize = "";
var pizzaToppings = [];
var pizzaPrice = 0;
var pizzaQuantity = 0;
var totalPrice = 0;
var totalQuantity = 0;
var pizza1 = new Pizza();

//Business Logic Goes Here

  //STEP1: when user click "add cart", get inputs and create object

  $("#pizza1 button").click(function(){
    pizzaName = document.getElementById("pizza1-name").textContent;

    pizzaSize = $("#pizza1 input:radio[name=pizza1-size]:checked").val();

    //remove duplicates!!
    $("#pizza1 input:checkbox[name=pizza1-topping]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });

    pizzaPrice = parseInt(document.getElementById("pizza1-price").textContent);

    pizzaQuantity = parseInt($("#pizza1-quantity").val());

    console.log("pizzaName = " +  pizzaName);
    console.log("pizzaSize = " + pizzaSize);
    console.log("pizzaToppings = " + pizzaToppings);
    console.log("pizzaPrice = " + pizzaPrice);
    console.log("pizzaQuantity = " + pizzaQuantity);

    pizza1 = new Pizza(pizzaName, pizzaSize, pizzaToppings, pizzaPrice, pizzaQuantity);

    console.log(pizza1);
  });

  //STEP2: if user didn't provide sufficient info, alert.

  //STEP3: Given user inputs, call prototype and calculate the price

  //STEP4: When user click purchase, show the order summary and open payment form

  //STEP5: when user type the payment info and buy button show the purchase summary


//Interface Logic Goes Here






});

//Bonus
  //COUPON CODE form
  //Pop up window (Modal)
  //another order confirmation page
