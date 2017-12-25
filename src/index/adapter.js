class Adapter {


  static getandSetDrinks() {
    fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then(resp => resp.json()).then(function(json){
      let drinksArr = json.drinks;
      let drinksNumbers = [];
      // 1.pitu v array
      // 2. perevirutu jaki pochunajutsia z cufru
      // 3a. postavutu jih v novuj array
      // 3b. pokazatu ti sho ne pochunajytsia z cufru
      // 4. pokazatu v kinci array cufru
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


      function renderEl(drink){
        const newDrink = new Drink(drink);
        const right = document.getElementById("right-side")
        right.innerHTML += newDrink.render()
      }

    })


  }
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
