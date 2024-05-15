import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import shopStyle from "./Shop.module.css";
import { CartContext } from "../../helpers/CartContext";
export default function Shop() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setProductData(json))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Error page
    return <p>A network error was encountered</p>;
  }
  return (
    <>
      <Navbar></Navbar>
      <div
        className={`${shopStyle.grid} ${shopStyle.container} ${shopStyle.ptop}`}
      >
        {productData &&
          productData.map((data, idx) => (
            <Card addToCart={addToCart} key={idx} data={data}></Card>
          ))}
      </div>
    </>
  );
}
