import { useSelector, useDispatch } from "react-redux";
import { fetchLocal, fetchProducts, getBasket, deleteBasket } from "../store/productsSlice";
import { useEffect, useState } from "react";
import axios from "../axios";

function BasketCards() {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  let sum = 0;
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getBasket());
  }, []);

  try {
  } catch (error) {}

  const deleteProduct = (e) => {
    const idProduct = e.parentNode.parentNode.id;
    dispatch(deleteBasket({ idProduct }));
  };

  const sendFeedBack = (formData) => {
    const name = formData.get("name");
    const surname = formData.get("surname");
    const phone = formData.get("phoneNumber");
    const email = formData.get("email");

    console.log(name, surname, phone, email, sum);
    axios
      .post("/application", {
        firstName: name,
        surname: surname,
        phone: phone,
        email: email,
        summa: sum,
        idProduct: products.basket,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios.post("/application",{
    //   firstname
    // });
  };

  return (
    <>
      <section className="basket__cards">
        {products.basket ? (
          products.items ? (
            products.items.map((item) => {
              if (products.basket) {
                if (products.basket.length > 0) {
                  return products.basket.split(",").map((idBasket) => {
                    if (Number(idBasket) === item.id) {
                      sum = sum + Number(item.price);
                      return (
                        <article className="basket__cards__card" id={item.id} key={item.id}>
                          <div className="basket__cards__card_imgBox" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "contain" }}></div>
                          <article className="basket__cards__card__text">
                            <h3 className="basket__cards__card__text_title">{item.title}</h3>
                            <p className="basket__cards__card__text_price">{item.price}$</p>
                            <button onClick={(e) => deleteProduct(e.target)}>Delete</button>
                          </article>
                        </article>
                      );
                    }
                  });
                }
              }
            })
          ) : (
            <p className="basket__cards__err">Error, refresh the page. If the error persists, please contact us by phone or e-mail to order. </p>
          )
        ) : (
          <p className="titleCategory">Basket empty</p>
        )}
      </section>
      <article className="basket__cards__application">
        <form className="basket__cards__application__form" action={sendFeedBack}>
          <input type="text" className="basket__cards__application__form__input" name="name" placeholder="Input name" required></input>
          <input type="text" className="basket__cards__application__form__input" name="surname" placeholder="Input surname" required></input>
          <input type="text" className="basket__cards__application__form__input" name="phoneNumber" placeholder="Input number" required></input>
          <input type="email" className="basket__cards__application__form__input" name="email" placeholder="Input email" required></input>
          <p className="basket__cards__application__form__sum" name="price">
            {sum}$
          </p>
          <button className="basket__cards__application__form__button">Send a request</button>
        </form>
      </article>
    </>
  );
}

export default BasketCards;
