document.addEventListener('DOMContentLoaded', () => {
  Adapter.getandSetDrinks();
  Adapter.randomDrink();
  EventListener.search();
  EventListener.getInput();
  // EventListener.showCocktailByIngredient();
  // const random = Math.floor(Math.random()*(Drink.all.length+1));
  // const cocktail = Drink.all[parseInt(random)]
  // const left = document.getElementById("left-side")
  // left.innerHTML = cocktail.render()

})
