const listCategories = document.querySelectorAll(".item");

console.log("Number of categories:", listCategories.length);

const categoryArray = [...listCategories];

categoryArray.map((item) => {
  console.log(`Category: ${item.firstElementChild.textContent} 
Elements: ${item.lastElementChild.children.length}`);
});
