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
    const cocktail = document.getElementsByClassName("gallery")
    // addEventListener("click", alert("hi"))
  }


}
