class EventListener {
  static search(){
    const input = document.getElementById("drink-search-input");
    input.addEventListener("input", e => {
    const inputValue = e.target.value.trim().toLowerCase();
    const filter = Drink.all.filter(drink => drink.name.toLowerCase().includes(inputValue));
    const container = document.getElementById("right-side");
    container.innerHTML = (createRender(filter));


    function createRender(filter) {
        return filter.map(drink => {
          return drink.render()
        }).join("");
      };
     });
  };

  static showCocktail(){
    const cocktail = document.getElementsByClassName("gallery");
  }

  static getInput(){
    const button = document.getElementById("button")
    button.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("ingredient-input").value;
    const right = document.getElementById("right-side");
    // get input and create an array of elements
    const ingredients = []
    input.split(/[ ,]+/).forEach(function (name) {if (name) {ingredients.push(name.trim())}})
    console.log(ingredients);

    Adapter.getDetails(ingredients)

    Adapter.getCocktailbyId(id)


    })
  }



}



// all ingredients messege on top
    // let all = ""
    // for (let i=0; i<(ingredients.length-1); i++) {
    //   let el=ingredients[i]
    //   all += (el + ", ")
    // }
    // let allIngredients = all + "and " + ingredients[ingredients.length-1]+"."
    // right.innerHTML = `<center><h1 style="color:white;">Your ingredients are: ${allIngredients}</h1><center>`;
