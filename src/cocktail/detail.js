class Detail {
  constructor(data) {
    this.id = data.idDrink;
    this.name = data.strDrink;
    this.glass = data.strGlass;
    this.instructions = data.strInstructions;
    this.url = data.strDrinkThumb;
    this.recipe = makeRecipe(data)
    Detail.all.push(this);
  }

  renderDetail(){
    return   `<img src="${this.url}" alt="${this.name}" width="400" height="400">`
  }

  renderTitle(){
    return `<center><h1 style="color:white;">${this.name}</h1><center>`
  }

  renderInfo(){
    return `<div class="row">
              <div class="column">
                  <h3 style="color:white">Glass: </h3> <p style="color:white">${this.glass}</p>
              </div>
              <div class="column">
                  <h3 style="color:white">Ingredients: </h3>
                  <p style="color:white">${this.recipe}</p>
              </div>
            <div class="yo"><h3 style="color:white">Instructions: </h3><p style="color:white">${this.instructions}</p><div>`

  }

}
 Detail.all = []

  function makeRecipe(data){
    let i=1;
    let recipe = "";
    while (true) {
      let ingr = "strIngredient"+i;
      let meas = "strMeasure"+i;
      if ((data[ingr])&&(data[meas])) {
        recipe += (data[ingr] + " " + data[meas]+"<br></br>")
      }
      else {
        break;
      }
      ++i
    }
  return recipe;
  }
