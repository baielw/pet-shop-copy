import cookcat1 from "../assets/cookcat1.jpg";
import cookcat2 from "../assets/cookcat2.jpeg";

import dogcook1 from "../assets/dogcook1.png";
import dogcook2 from "../assets/dogcook2.jpg";
import dogcook3 from "../assets/dogcook3.jpg";

import cookbirds1 from "../assets/cookbirds1.jpg";
import cookbirds2 from "../assets/cookbirds2.webp";

import buldog from "../assets/buldog.jpg";

import catt from "../assets/catt.webp";


const products = [
  {
    image: cookcat1,
    productId: "Pro Plan Sterilised",
    categoryId: "coffee-beans",
    title: "Pro Plan Sterilised",
    description: `Ingredients:
    salmon (20%), dry poultry protein, rice, corn gluten, corn, wheat gluten, wheat fiber, fiber, egg powder, minerals, animal fat, amino acids, flavoring feed additive, yeast, preservatives, vitamins, fish oil, antioxidants..`,
    price: 10,
   },
   {
     image: cookcat2,
     productId: "Pro Plan Kitten",
     categoryId: "coffee-beans",
     title: "Pro Plan Kitten",
     description: `Ingredients:
     turkey (17%**), rice**, dry turkey protein**, pea protein concentrate**, animal fat, soy protein**, corn gluten**, corn starch, dried chicory root (2%*), minerals, flavoring feed additive, yeast**, amino acids, vitamins, fish oil, preservatives, antioxidants`,
     price: 12,
   },
  {
    image: cookcat1,
    productId: " Gold Tuna and Brown Rice",
    categoryId: "coffee-beans",
    title: "Gold Tuna",
    description: `Ingredients:
    Turkey (18%), rice, corn gluten, pea protein concentrate, dry turkey protein, animal fat, egg powder, corn starch, corn, minerals, fish oil, flavoring feed additive, yeast, preservatives, vitamins, antioxidants.`,
    price: 14,
  },
  {
    image: dogcook1,
    productId: "SmartHeart Beef",
    categoryId: "coffee-beans",
    title: "SmartHeart Beef",
    description: `TSmart Heart Beef and Rice Flavor is an easily digestible food. Each granule is specially designed and well crushed for easy absorption and good quality stool.`,
    price: 13,
  },
  {
    image: dogcook2,
    productId: "Power Maxx",
    categoryId: "coffee-beans",
    title: "Power Maxx",
    description: `Excellent price-to-quality ratio and, accordingly, the most optimal choice for your pet!`,
    price: 18,
  },
  
  {
    image: dogcook3,
    productId: "Pedigree",
    categoryId: "coffee-beans",
    title: "Pedigree",
    description: `Appetizing dry food with beef will definitely give pleasure to your dog, and give his body all the necessary elements`,
    price: 18,
  },

  {
    image: cookbirds1,
    productId: "RIO Daily",
    categoryId: "coffee-beans",
    title: "RIO Daily",
    description: `Balanced food for daily feeding of medium parrots is perfect for feeding lovebirds and corellas.`,
    price: 12,
  },

  {
    image: cookbirds2,
    productId: "RIO Daily",
    categoryId: "coffee-beans",
    title: "RIO Daily",
    description: `Balanced food for daily feeding of medium parrots is perfect for feeding lovebirds and corellas.`,
    price: 12,
  },
  {
    image: cookbirds1,
    productId: "RIO Daily",
    categoryId: "coffee-beans",
    title: "RIO Daily",
    description: `Balanced food for daily feeding of medium parrots is perfect for feeding lovebirds and corellas.`,
    price: 12,
  },
  
  {
    image:buldog ,
    categoryId: "accessories",
    title: "BUl-Dog",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 50,
  // },
  //  {
  //    image: catt,
  //    productId: "mango-tea",
  //    categoryId: "tea",
  //    title: "Baby Cat",
  //    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
  //    price: 55,
  //  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);    
  }

  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}