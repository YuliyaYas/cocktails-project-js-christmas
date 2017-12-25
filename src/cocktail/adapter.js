class Adapter {
  static getCocktail(id) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(resp => resp.json()).then(function(json){
  		const detail = json.drinks[0];
      const newDetail = new Detail(detail);
      document.getElementById("main-section").outerHTML = newDetail.renderTitle();
      const leftDiv = document.getElementById("left-side-image");
      leftDiv.innerHTML = newDetail.renderDetail();
      document.getElementById("right-side-info").innerHTML = newDetail.renderInfo();
      })

  }
}
