class Drink {
  constructor(data) {
    this.id = data.idDrink;
    this.url = data.strDrinkThumb;
    this.name = data.strDrink
    Drink.all.push(this)
  }
  render(){
    // const div = document.createEleme
    return   `<div class="gallery" id="${this.id}">
                  <a href="./cocktail.html#${this.id}">
                    <img src="${this.url}" alt="${this.name}" width="300" height="200">
                    <div class="desc">${this.name}</div>
                  </a>
              </div> `

  }

  renderRandom(){
    // const div = document.createEleme
    return   `<div><a href="./cocktail.html#${this.id}">
              <img src="${this.url}" alt="${this.name}" width="245" height="280">
              </a></div>`

  }

}
 Drink.all = []
