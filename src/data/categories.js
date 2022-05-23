import dogsImage from "../assets/dogs.webp";
import catsImage from "../assets/cats.jpg";
import birdsImage from "../assets/birds.jpg";
import rodentsImage from "../assets/rodents.jpg";
import fishImage from "../assets/fihs.jpg";
import accessoriesImage from "../assets/accessories1.jpg";


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


  {
    categoryId: "accessories",
    title: "Rodents",
    image: rodentsImage,
  },
  
  {
    categoryId: "accessories",
    title: "Accessories",
    image: accessoriesImage,
  },


  
  {
    categoryId: "accessories",
    title: "Fish",
    image: fishImage,
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