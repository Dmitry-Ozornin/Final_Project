import CategoryCatalog from "../components/categoryCatalog";
import Footer from "../components/footer";
import Header from "../components/header";

function Catalog() {
  return (
    <>
      <Header />
      <h1 className="titleCategory">Category</h1>
      <CategoryCatalog />

      <Footer />
    </>
  );
}

export default Catalog;
