import Footer from "../components/footer";
import Header from "../components/header";
import { useLocation } from "react-router";
import axios from "../axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addBasket } from "../store/productsSlice";
function ProductPage() {
  const location = useLocation();
  const { id } = location.state;
  // console.log(id);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/product/${id}`).then((resp) => {
      const allData = resp.data;
      setData(allData);
    });
  }, []);

  const dispatch = useDispatch();
  const addToBassket = (e) => {
    dispatch(addBasket({ e }));
  };

  return (
    <>
      <Header />
      <section className="productPage center">
        {data ? (
          <>
            <div>
              <img className="productPage__img" src={data.image} />
            </div>
            <article className="productPage__text">
              <h2 className="productPage__title">{data.title}</h2>
              <Link to={`/catalog/${data.category}`} className="productPage__category">
                #{data.category}
              </Link>
              <p className="productPage__description">{data.description}</p>
              <p className="productPage__price">{data.price}$</p>
              <button className="productPage__addButton" onClick={(e) => addToBassket(e.target.id)} id={data.id}>
                add basket
              </button>
            </article>
          </>
        ) : (
          ""
        )}
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
