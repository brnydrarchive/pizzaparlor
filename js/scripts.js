//Business Logic

let newOrder = new Order();
// this will need to be called on load

function Order() {
  this.pizzas = [];
  this.totalCost = 0;
  this.counter = 0;
}

Order.prototype.addPizza = function(pizza) {
this.pizzas.push(pizza);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}
/*let order = {
  pizzas: [
    {
    pizza: 
  ]
}
*/

//UI Logic

//we will have to create a separate addPizzaToOrder function to call within this one, 
//this function will only create a pizza based on the user input
//once the pizza is made, the add pizza to order function is called
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
  let i = newOrder.counter;
  let toppings = newOrder.pizzas[i].toppings;
  let divsize = newOrder.pizzas[i].size;
  p.innerText = divsize + " with " + toppings.join(", ");
  orderDiv.append(p);
  newOrder.counter +=1;
  
}

// const pElement = document.createElement("p");
// pElement.append("text");
// const firstDiv = document.querySelector("div");
// firstDiv.append(pElement);


window.addEventListener("load", function (){
  document.querySelector("form#orderpizza").addEventListener("submit", addPizzaToOrder);
  //document.querySelector("form#orderpizza").addEventListener("click", provideTotal);
  
})


 

