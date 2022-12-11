//Business Logic

let newOrder = new Order();

function Order() {
  this.pizzas = [];
  this.totalCost = 0;
  this.counter = 0;
}

Order.prototype.addPizza = function(pizza) {
this.pizzas.push(pizza);
}

/*Order.prototype.determinePrice = function() {

    for (let index = 0; index <= countTo; index += countBy) {
      countArray.push(index);
    }
    return countArray;
  } */

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

//UI Logic

function addPizzaToOrder(event) {
  event.preventDefault();
  let orderDiv = document.getElementById("yourpizzas");
  let p = document.createElement("p");
  let top1 = document.getElementById("topping-1").value;
  let top2 = document.getElementById("topping-2").value;
  let top3 = document.getElementById("topping-3").value;
  let top4 = document.getElementById("topping-4").value;
  let top5 = document.getElementById("topping-5").value;
  let psize = document.getElementById("pizza-size").value;
  let toppingsArray = [top1, top2, top3, top4, top5];
  let pizza = new Pizza(toppingsArray, psize);
  newOrder.addPizza(pizza); 
  determinePrice();
  let i = newOrder.counter;
  let toppings = newOrder.pizzas[i].toppings;
  let divsize = newOrder.pizzas[i].size;
  p.innerText = divsize + " with " + toppings.join(", ") ;
  orderDiv.append(p);
  newOrder.counter +=1;
}

function determinePrice() {
  let i = newOrder.counter; 
  if (document.getElementById("pizza-size").value = "small") {
    newOrder.pizzas[i].price += 10;
  } 
   else if (document.getElementById("pizza-size").value = "medium") {
    newOrder.pizzas[i] += 12;
   }
   else {
    newOrder.pizzas[i] += 15;
   }
   //newOrder.pizzas[i].price += newOrder.pizzas[i].toppings.length;
   let toppingsArray = newOrder.pizzas[i].toppings;
   toppingsArray.forEach(function(topping) {
    if (topping === "none") {
      newOrder.pizzas[i].price += 0
    } else if (topping != "none") {
      newOrder.pizzas[i].price +=1
    }
  })
}

window.addEventListener("load", function (){
  document.querySelector("form#orderpizza").addEventListener("submit", addPizzaToOrder);
 // document.querySelector("form#orderpizza").addEventListener("click", provideTotal);
})