import { useParams } from "react-router";
import axios from "../axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";
function Category() {
  const params = useParams();
  const [data, setData] = useState();

  // console.log(params);
  useEffect(() => {
    axios.get(`/categoryProducts/${params.category}`).then((resp) => {
      const allData = resp.data;
      setData(allData);
    });
  }, []);

  return (
    <>
      <Header />
      <h1 className="titleCategory">{params.category}</h1>
      <section className="center categoryPage">
        {!data
          ? ""
          : data.map((card) => {
              return <ProductCard card={card} key={card.id} />;
            })}
      </section>
      <Footer />
    </>
  );
}

export default Category;
