import { Link } from "react-router";
import forWomen from "../image/closeup-shot-beautiful-young-female-posing-outdoor.jpg";
import forMen from "../image/man-suit.jpg";
import Jewelery from "../image/luxurious-shiny-golden-chain.jpg";

function CategoryCatalog() {
  return (
    <section className="categoryCatalog ">
      <article className="categoryCatalog__boxes">
        <Link to={`/catalog/Women's clothing`}>
          <img className="categoryCatalog__boxes_img" src={forWomen} alt="for women" />
          <h2 className="categoryCatalog__boxes_title">Women's clothing</h2>
        </Link>
      </article>
      <article className="categoryCatalog__boxes">
        <Link to={`/catalog/men's clothing`}>
          <img className="categoryCatalog__boxes_img" src={forMen} alt="for women" />
          <h2 className="categoryCatalog__boxes_title">men's clothing</h2>
        </Link>
      </article>
      <article className="categoryCatalog__boxes">
        <Link to={`/catalog/jewelery`}>
          <img className="categoryCatalog__boxes_img" src={Jewelery} alt="for women" />
          <h2 className="categoryCatalog__boxes_title">jewelery</h2>
        </Link>
      </article>
    </section>
  );
}

export default CategoryCatalog;
