import cardStyle from "./Card.module.css";
import { useState } from "react";
export default function Card({ data }) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(value);
  };
  const addValue = (e) => {
    e.preventDefault();
    setQuantity((prevState) => (prevState += 1));
  };
  const subtractValue = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity((prevState) => (prevState -= 1));
    }
  };
  const handleSubmit = () => {};
  return (
    <div className={cardStyle["card-container"]}>
      <p className={cardStyle["card-title"]}>{data.title}</p>
      <div className={cardStyle["img-container"]}>
        <img
          className={cardStyle["card-img"]}
          src={data.image}
          alt="Product Image"
        />
      </div>
      <p className={cardStyle["card-price"]}>Price: ${data.price}</p>
      <form className={cardStyle["card-bottom-content"]}>
        <div
          className={`${cardStyle["quantity"]} ${cardStyle["input-fields"]}`}
        >
          <button
            onClick={(e) => subtractValue(e)}
            className={cardStyle["subtract-btn"]}
          >
            -
          </button>
          <input
            className={cardStyle["quantity-input"]}
            required
            value={quantity}
            type="text"
            onChange={(e) => handleQuantityChange(e)}
            pattern="^\d{1,3}$"
          />
          <button onClick={(e) => addValue(e)} className={cardStyle["add-btn"]}>
            +
          </button>
        </div>
        <button
          className={`${cardStyle["submit-item"]} ${cardStyle["input-fields"]}`}
        >
          Add To Cart
        </button>
      </form>
    </div>
  );
}
