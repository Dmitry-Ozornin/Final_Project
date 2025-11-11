import BasketCards from "../components/basketCards";
import Footer from "../components/footer";
import Header from "../components/header";

function Basket() {
  return (
    <>
      <Header />
      <h1 className="titleCategory">Basket</h1>
      <section className="basket">
        <BasketCards />
      </section>
      <section className="basket__footer">
        <Footer />
      </section>
    </>
  );
}

export default Basket;
