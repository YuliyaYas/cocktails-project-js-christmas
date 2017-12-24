class Adapter {

  static getandSetDrinks() {
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(json => json.forEach(drink => {
      const newDrink = new Drink(drink);
      const right = document.getElementById("right-side")
      right.innerHTML += newDrink.render()
      
    }))

  }


//



}
