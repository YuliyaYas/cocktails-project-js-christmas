class Adapter {

  static getandSetDrinks() {
    fetch("http://localhost:3000/drinks")
    .then(resp => resp.json())
    .then(json => json.forEach(drink => {
      const newDrink = new Drink(drink);
      document.body.innerHTML += newDrink.render()
    }))

  }

//



}
