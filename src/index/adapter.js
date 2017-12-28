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

  static randomDrink(){
    const random = Math.floor(Math.random()*(Drink.all.length+1));
    const drink = Drink.all[`${random}`];
    document.getElementById("random-drink").innerHTML = drink.renderRandom();
  }


  static getCocktailbyId(id){
    fetch("http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}")
    .then(resp => resp.json())
    .then(json => { const drinkById = json.drinks[0]
      // console.log(drinkById);
})
  }
  static getDetails(ingredients){
  var names = ["vodka", "gin", "lemon"];
  let ids = {};
  const makeFetch = function(name) {
    let url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+name;
    return fetch(url).then(res => res.json());
     }

  Promise
      .all(names.map(makeFetch))
      .then(searchResultArr => searchResultArr.forEach(function(result, index) {
        const allDrinks = result.drinks;
        let all=[];
        allDrinks.forEach(drink => all.push(drink["idDrink"]));
        const i = names[index];
        ids[i]=all;
        console.log(ids);

      }


      ))


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
