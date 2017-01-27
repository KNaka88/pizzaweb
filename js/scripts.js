$(function(){

  //Constractor
  function Pizza (pizzaName, pizzaSize, pizzaToppings, pizzaQuantity){
     this.pizzaName = pizzaName;
     this.pizzaSize = pizzaSize;
     this.pizzaToppings = pizzaToppings;
     this.pizzaQuantity = pizzaQuantity;
  }

  function UserCart(pizza){
  }

  //prototype
  Pizza.prototype.sizePrice = function(){
    switch(this.pizzaSize){
      case "small":
        return 8;
        break;
      case "medium":
        return 10;
        break;
      case "large":
        return 12;
        break;
      default:
        alert("pizzaSize: error");
    }
  }

  Pizza.prototype.toppingPrice = function(){
      return toppingPriceCalc(this.pizzaToppings);
  }

  Pizza.prototype.pizzaPrice = function(){
    return (this.sizePrice() + this.toppingPrice()) * this.pizzaQuantity;
  }

  Pizza.prototype.discount = function(){


  }
  Pizza.prototype.promotion = function(){

  }


////Function

  //function for prototype:toppingPrice
  var toppingPriceCalc = function(pizzaToppings){
    var toppingsPrice = 0;
    for(var i=0; i<pizzaToppings.length; i++){
      toppingsPrice += getToppingPriceList(pizzaToppings[i]);
    }
    return toppingsPrice;
  }

  var getToppingPriceList = function(pizzaToppings){
    switch(pizzaToppings){
      case "tomatoes":
        return 1;
        break;
      case "bacon":
        return 2;
        break;
      case "mozzarella":
        return 1.5;
        break;
      case "bbqSauce":
        return 0.5;
        break;
      default:
        alert("pizzaToppings: Error");
    }
  }
  //End of function for prototype:toppingPrice



////Gloval Variables

  var pizzaName = "";
  var pizzaSize = "";
  var pizzaToppings = [];
  var pizzaToppingsPrice = [];
  var pizzaQuantity = 0;

  var cart = [];
  var totalPrice = 0;
  var totalQuantity = 0;

  var pizza1 = new Pizza();

////Business Logic Goes Here

    //STEP1: when user click "add cart", get inputs and create object

    $(".pizza-menu button").click(function(){

      var id = (parseInt( this.id.replace(/[^0-9]*/g, "")));

      pizzaName = document.getElementById("pizza" +id+ "-name").textContent;

      pizzaSize = $("#pizza" +id+ " input:radio[name=pizza" +id+ "-size]:checked").val();
      //remove duplicates!!
      $("#pizza" +id+ " input:checkbox[name=pizza" +id+ "-topping]:checked").each(function(){
        pizzaToppings.push($(this).val());
      });


      pizzaQuantity = parseInt($("#pizza" +id+ "-quantity").val());

      console.log("pizzaName = " +  pizzaName);
      console.log("pizzaSize = " + pizzaSize);
      console.log("pizzaToppings = " + pizzaToppings);
      console.log("pizzaQuantity = " + pizzaQuantity);

      var pizza = new Pizza(pizzaName, pizzaSize, pizzaToppings, pizzaQuantity);

      console.log(pizza);

      cart.push(pizza);
      console.log(cart)

      //STEP2: Given user inputs, call prototype and calculate the price
      console.log("Prototype, price = " + pizza.sizePrice());
      console.log("Prototype Topping Price = " + pizza.toppingPrice());
      console.log("Prototype totalprice for this pizza =" + pizza.pizzaPrice());
    });


    //STEP3: When user click purchase, show the order summary and open payment form


    //STEP4: when user type the payment info and buy button show the purchase summary

    //STEP5: if user didn't provide sufficient info, alert.


  //Interface Logic Goes Here






});

//Bonus
  //COUPON CODE form`
  //Pop up window (Modal)
  //another order confirmation page
