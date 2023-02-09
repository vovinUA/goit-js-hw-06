const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elementsList = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = `${item}`;
  ingredient.classList.add("item");
  return ingredient;
});
list.append(...elementsList);
