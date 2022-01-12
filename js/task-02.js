const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemsOfIngredients=ingredients.map((item)=> {
  // console.log(item);
  const items= document.createElement("li")
  items.textContent=`${item}`
  items.classList.add("item")
  return items
})

console.log(...itemsOfIngredients);
const makeNewList=document.querySelector("#ingredients").append(...itemsOfIngredients)