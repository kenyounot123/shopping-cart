import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import shopStyle from "./Shop.module.css";
export default function Shop() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [itemsInCart, setItemsInCart] = useState(0);
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
      <Navbar
        onChange={() => setItemsInCart((prev) => (prev += 1))}
        itemsInCart={itemsInCart}
      ></Navbar>
      <div
        className={`${shopStyle.grid} ${shopStyle.container} ${shopStyle.ptop}`}
      >
        {productData &&
          productData.map((data, idx) => (
            <Card
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
              key={idx}
              data={data}
            ></Card>
          ))}
      </div>
    </>
  );
}
