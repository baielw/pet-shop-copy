import cookcat1 from "../assets/cookcat1.jpg";
import cookcat2 from "../assets/cookcat2.jpeg";

const products = [
  {
    image: cookcat1,
    productId: "Pro Plan Sterilised",
    categoryId: "coffee-beans",
    title: "Ingredients:: ",
    description: ` salmon (20%), dry poultry protein, rice, corn gluten, corn, wheat gluten, wheat fiber, fiber, egg powder, minerals, animal fat, amino acids, flavoring feed additive, yeast, preservatives, vitamins, fish oil, antioxidants..`,
    price: 10,
   },
   {
     image: cookcat2,
     productId: "Pro Plan Kitten Delicate",
     categoryId: "coffee-beans",
     title: "Ingredients:",
     description: `turkey (17%**), rice**, dry turkey protein**, pea protein concentrate**, animal fat, soy protein**, corn gluten**, corn starch, dried chicory root (2%*), minerals, flavoring feed additive, yeast**, amino acids, vitamins, fish oil, preservatives, antioxidants`,
     price: 12,
   },
  // {
  //   image: productImage,
  //   productId: "house-blend",
  //   categoryId: "coffee-beans",
  //   title: "House blend",
  //   description: `Two methods are primarily used to process coffee berries. The first, "wet" or "washed" process, has historically usually been carried out in Central America and areas of Africa. The flesh of the cherries is separated from the seeds and then the seeds are fermented – soaked in water for about two days. This softens the mucilage, which is a sticky pulp residue that is still attached to the seeds. Then this mucilage is washed off with water.`,
  //   price: 14,
  // },
  // {
  //   image: productImage,
  //   productId: "light-roast",
  //   categoryId: "coffee-beans",
  //   title: "Light roast",
  //   description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
  //   price: 13,
  // },
  // {
  //   image: productImage,
  //   productId: "medium-roast",
  //   categoryId: "coffee-beans",
  //   title: "Medium roast",
  //   description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
  //   price: 11,
  // },
  // {
  //   image: productImage,
  //   productId: "coffee-grinder",
  //   categoryId: "accessories",
  //   title: "Coffee grinder",
  //   description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
  //   price: 100,
  // },
  // {
  //   image: productImage,
  //   productId: "coffee-cup",
  //   categoryId: "accessories",
  //   title: "Coffee cup",
  //   description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
  //   price: 50,
  // },
  // {
  //   image: productImage,
  //   productId: "mango-tea",
  //   categoryId: "tea",
  //   title: "Mango tea",
  //   description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
  //   price: 10,
  // },
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