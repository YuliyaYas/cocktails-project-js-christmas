class Adapter {


  static getandSetDrinks() {
    if (sessionStorage.getItem("all")){
      processRequest(sessionStorage.getItem("all"));
    }
    else {

      fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then(resp => resp.text()).then(function(resp){
        sessionStorage.setItem("all", resp);
        // setItem cannot save json
        processRequest(resp);

      });


    }
  }

}


function processRequest(resp){
  const json = JSON.parse(resp);
  // changes text back to json
  let drinksArr = json.drinks;
  let drinksNumbers = [];

  drinksArr.forEach(function(drink,k){
    if (!!parseInt(drink.strDrink)){
    drinksNumbers.push(drinksArr[k]);
  }
  else {
    renderEl(drink);
  }

  })
  drinksNumbers.forEach(function(drink){
    renderEl(drink);
  })


}

function renderEl(drink){
  const newDrink = new Drink(drink);
  const right = document.getElementById("right-side")
  right.innerHTML += newDrink.render()
}







  // static getandSetDrinks() {
  //   fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  //   .then(resp => resp.json())
  //   .then(json => json.drinks.forEach(drink => {
  //     const newDrink = new Drink(drink);
  //     const right = document.getElementById("right-side")
  //     right.innerHTML += newDrink.render()
  //
  //   }))
  //
  // }
