import dogsImage from "../assets/dogs.jpg";
import catsImage from "../assets/cats.jpg";
import birdsImage from "../assets/birds.jpg";


const categories = [
  {
    categoryId: "accessories",
    title: "Dogs",
    image: dogsImage,
  },

  {
    categoryId: "accessories",
    title: "Cats",
    image: catsImage,
  },

  {
    categoryId: "accessories",
    title: "Birds",
    image: birdsImage,
  },

  
  

];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}