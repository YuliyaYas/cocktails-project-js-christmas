class Drink {
  constructor(data) {
    this.id = data.idDrink;
    this.url = data.strDrinkThumb;
    this.name = data.strDrink
    Drink.all.push(this)
  }
  render(){
    // const div = document.createEleme
    return   `<div class="gallery">
                  <img src="${this.url}" alt="${this.name}" width="300" height="200">
                  <div class="desc">${this.name}</div>
              </div> `

  }
}
 Drink.all = []
