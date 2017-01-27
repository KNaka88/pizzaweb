$(function(){

//Constractor
function Pizza (pizzaName, pizzaSize, pizzaToppings){
   this.pizzaName = pizzaName;
   this.pizzaSize = pizzaSize;
   this.pizzaToppings = pizzaToppings;
   this.price = 0;
   this.quantity = 0;
}

function UserCart(pizza){

}


//prototype
Pizza.prototype.discount = function(){

}
Pizza.prototype.promotion = function(){

}

//Gloval Variables
var totalPrice = 0;
var totalQuantity = 0;


//Business Logic Goes Here

  //STEP1: when user click "add cart", get inputs and create object
    


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
