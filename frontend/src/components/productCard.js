import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addBasket } from "../store/productsSlice";
function ProductCard({ card }) {
  const dispatch = useDispatch();
  const addToBassket = (e) => {
    dispatch(addBasket({e}));
  };
  return (
    <article className="card"  key={card.id}>
      <Link to={`/catalog/${card.category}/${card.title}`} className="card__link" state={{id: card.id}}>
        <img className="card__img" src={card.image} alt="product" />
        <h2 className="card__title">{card.title}</h2>
      </Link>
      <button className="card__addBasket" onClick={(e) => addToBassket(e.target.id)} id={card.id}>
        add basket
      </button>
    </article>
  );
}

export default ProductCard;
