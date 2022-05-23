import Header from "../components/Header/Header";
import headerImage from "../assets/products2.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title="Produkcts!"
        image={headerImage}>
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;