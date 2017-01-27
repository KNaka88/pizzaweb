$(function(){

  //Constractor
  function Pizza (pizzaName, pizzaSize, pizzaToppings, pizzaQuantity){
     this.pizzaName = pizzaName;
     this.pizzaSize = pizzaSize;
     this.pizzaToppings = pizzaToppings;
     this.pizzaQuantity = pizzaQuantity;
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

  var appendPizzaInfo = function(id){
    $("#appendPizzaInfo").append(
      '<div class="col-md-3">' +
        '<h5 id="cartPizzaName' +id+ '">Pizza:<br> </h5>' +
      '</div>' +
      '<div class="col-md-2">' +
        '<h5 id="cartPizzaSize' +id+ '">Size:<br> </h5>' +
        '</div>' +
      '<div class="col-md-2">' +
        '<h5 id="cartPizzaTopping' +id+ '">Topping:<br> </h5>' +
      '</div>' +
      '<div class="col-md-1">' +
        '<h5 id="cartPizzaQuantity' +id+ '">Quantity:<br> </h5>' +
       '</div>' +
       '<div class="col-md-2">' +
        '<h5 id="cartPizzaPrice' +id+ '">Price:<br> $</h5>' +
       '</div>'
      )
  }

  var returnToppingLists = function(pizzaToppings){
    var returnToppingLists = "";
    for(var i=0; i<pizzaToppings.length; i++){
        returnToppingLists += (pizzaToppings[i] + "<br>&nbsp");
    }
    return returnToppingLists;
  }

  var returnTotalPrice = function(cart){
    var totalPrice = 0;
    for(var i=0; i<cart.length; i++){
      totalPrice += cart[i].pizzaPrice();
    }
      return totalPrice;
  }






////Gloval Variables



  var cartArray = [];

////Business Logic Goes Here

    //STEP1: when user click "add cart", get inputs and create object

    $(".pizza-menu button").click(function(){
      var id =0;
      var pizzaName = "";
      var pizzaSize = "";
      var pizzaToppings = [];
      var pizzaQuantity = 0;

      id = (parseInt( this.id.replace(/[^0-9]*/g, "")));

      pizzaName = document.getElementById("pizza" +id+ "-name").textContent;

      pizzaSize = $("#pizza" +id+ " input:radio[name=pizza" +id+ "-size]:checked").val();


      $("#pizza" +id+ " input:checkbox[name=pizza" +id+ "-topping]:checked").each(function(){
        pizzaToppings.push($(this).val());
      });

      pizzaQuantity = parseInt($("#pizza" +id+ "-quantity").val());


      var pizza = new Pizza(pizzaName, pizzaSize, pizzaToppings, pizzaQuantity);


      cartArray.push(pizza);
      console.log(cartArray)

      //STEP2: Given user inputs, call prototype and calculate the price
      console.log("Prototype, price = " + pizza.sizePrice());
      console.log("Prototype Topping Price = " + pizza.toppingPrice());
      console.log("Prototype totalprice for this pizza =" + pizza.pizzaPrice());

      appendPizzaInfo(id);
      $("#cartPizzaName" + id).append(pizza.pizzaName);
      $("#cartPizzaSize" + id).append(pizza.pizzaSize);
      $("#cartPizzaTopping" + id).append(returnToppingLists(pizza.pizzaToppings));
      $("#cartPizzaQuantity" + id).append(pizza.pizzaQuantity);
      $("#cartPizzaPrice" + id).append(pizza.pizzaPrice());

      $("#totalPrice").text( returnTotalPrice(cartArray));
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
