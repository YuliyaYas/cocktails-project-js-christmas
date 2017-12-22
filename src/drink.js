class Drink {
  constructor(data) {
    this.id = data.idDrink;
    this.url = data.strDrinkThumb;
    this.name = data.strDrink
    Drink.all.push(this)
  }
  render(){
    // const div = document.createEleme
    return `<div id=${this.id}><p>${this.name}</p><img src="${this.url}">`
    // <img src="${this.url}">
  }
}

Drink.all = []
