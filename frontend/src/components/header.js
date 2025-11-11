import { Link } from "react-router";
function Header() {
  return (
    <section className="header center">
      <article className="header__links">
        <Link to="/" className="header__links__link">
          Home
        </Link>
        <Link to="/catalog" className="header__links__link">
          Catalog
        </Link>

        <Link to="/basket" className="header__links__link">
          Basket
        </Link>
      </article>
    </section>
  );
}

export default Header;
