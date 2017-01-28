#Koji Nakagawa

#### 4th Week Independent Project for Epicodus, 01.27.2017

#### By Koji Nakagawa

## Description
* This website is the fourth independent project for Epicodus "Intro to Programming" class.
* This website get the infomation from user, and show the total price of pizza.


## Specifications
* When user choose the pizza size, quantity, and click "add cart", result show ups on Shopping Cart.
##### **Example Input:**  
######Select(Cheese)--- Size: S, Topping: (Empty), Quantity:1  
##### **Example Output:**
* Pizza: Cheese
* Size: small
* Topping: (Empty)
* Quantity: 1
* Price: $8
* Remove (Button)
* Total $8

* When user choose another pizza, result shows up on Shopping Cart and total price is added.
##### **Example Input:**
######Select(Cheese)--- Size: S, Topping: (Empty), Quantity:1  
######Select(Teriyaki)--- Size: S, Topping: (Empty), Quantity:1  
##### **Example Output:**

* Pizza: Cheese
* Size: small
* Topping: (Empty)
* Quantity: 1
* Price: $8
* Remove (Button)

* Pizza: Teriyaki
* Size: small
* Topping: (Empty)
* Quantity: 1
* Price: $8
* Remove (Button)
* Total $16


* When user changes either Size or Topping or Quantity, price is calculated based on the result and show up on Shopping Cart.
##### **Example1 Input:**
######Select(Cheese)--- Size: L, Topping: (Empty), Quantity:1  
##### **Example1 Output:**
* Pizza: Cheese
* Size: large
* Topping: (Empty)
* Quantity: 1
* Price: $12
* Remove (Button)
* Total $12


##### **Example2 Input:** Select(Cheese)---Size: L, Topping: (Empty), Quantity:2  
##### **Example2 Output:**
* Pizza: Cheese
* Size: large
* Topping: (Empty)
* Quantity: 2
* Price: $24
* Remove (Button)
* Total $24

##### **Example3 Input:** Select(Cheese)---Size: L, Topping: Bacon, Quantity:2  
##### **Example3 Output:**
* Pizza: Cheese
* Size: large
* Topping: bacon
* Quantity: 2
* Price: $28
* Remove (Button)
* Total $28


* When user clicks same cart twice, nothing happens
##### **Example Input:** Select(Cheese)--- Size: L, Topping: (Empty), Quantity:1 (Click Twice)
##### **Example Output:**
* Pizza: Cheese
* Size: large
* Topping: (Empty)
* Quantity: 1
* Price: $12
* Remove (Button)
* Total $12

## Setup/Installation Requirements

* Clone this repository.
* Open the index.html by your web browser.


## Known Bugs

##### If you find some code error or bugs, or find improvements, please feel contact to me.
##### Any help is highly appreciated.


## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap
* JQuery


## License

_Copyright (c) 2017 **Koji Nakagawa**_

_Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._
