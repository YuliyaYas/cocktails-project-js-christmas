document.addEventListener('DOMContentLoaded', () => {
  let id = location.hash.replace("#", "");
  Adapter.getCocktail(id);

})
