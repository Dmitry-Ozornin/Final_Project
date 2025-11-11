import PhotoAbout from "../image/front-view-woman-holding-clothes.jpg";
function AboutHome() {
  return (
    <section className="aboutHome center">
      <article className="aboutHome__textBox">
        <h1 className="aboutHome__textBox__title">Fashion Showroom</h1>
        <p className="aboutHome__textBox__text">Our showroom offers stylish and fashionable clothes for the whole family. We pride ourselves on the quality of our products and always take care of the health of our customers.</p>
        <p className="aboutHome__textBox__text">We are ready to please you with a large, fashionable, trendy assortment and fast delivery.</p>
      </article>
      <img className="aboutHome__textBox__img" src={PhotoAbout} alt="photo" />
    </section>
  );
}

export default AboutHome;
