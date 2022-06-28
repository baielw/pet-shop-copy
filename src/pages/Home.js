
import Header from "../components/Header/Header";
import headerImage from "../assets/header3.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our pet-shop-dogs!"
        image={headerImage}>
        A pet shop or pet store is a retail business which sells different kinds of animals. Pet stores also sell pet food, supplies, and accessories. </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;