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



  static getDetails(ingredients){

    const makeFetch = function(name) {
      let url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+name;
      return fetch(url).then(resp => resp.text()).then((respText) => {
        try {

          return JSON.parse(respText); // there's always a body
        } catch (error) {
            return {};
          }
      });
    };

    let resultDrinks = {};
    let ids = [];

    Promise
        .all(ingredients.map(makeFetch))
        .then(searchResultArr => searchResultArr.forEach(function(result, index) {
          const allDrinks = result.drinks;

          if(!allDrinks){
            return;
          }
          allDrinks.forEach(function(drink) {
            if (resultDrinks[drink["idDrink"]]){
               resultDrinks[drink["idDrink"]]["count"]++;
            }
            else {
              drink["count"] = 1;
              resultDrinks[drink["idDrink"]] = drink;
            }
          });

        }
      )).then(function(){
        for(let key in resultDrinks){
          ids.push(resultDrinks[key])
        }

        ids.sort(function (a,b){
          if (a.count < b.count)
            return 1;
          if (a.count > b.count)
            return -1;
          return 0;
        })
        console.log(ids);

        const container = document.getElementById("right-side");
        container.innerHTML = ""
        ids.forEach(function(drink){
          renderEl(drink);
        })


      });

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
