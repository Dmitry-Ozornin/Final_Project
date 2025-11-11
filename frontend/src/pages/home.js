import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/header";
import AboutHome from "../components/aboutHome";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";

function Home() {
  const { products } = useSelector((state) => state.data);
  // console.log(products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <AboutHome />
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>Catalog</h1>
      <section className="CardBox center">
        {products.items.length < 1
          ? ""
          : products.items.map((card) => {
              if (card.id < 6) {
                return <ProductCard card={card} key={card.id}/>;
              } else {
                return "";
              }
            })}
      </section>
      <div className="center linkBox">
        <Link className="linkBox_linkCatalog" to="/catalog">
          Go Catalog
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
