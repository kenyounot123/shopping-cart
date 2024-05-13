import cardStyle from "./Card.module.css";
export default function Card({ data }) {
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
      <div className={cardStyle["card-bottom-content"]}>
        <div className={cardStyle["quantity"]}></div>
        <button className={cardStyle["submit-item"]}>Add To Card</button>
      </div>
    </div>
  );
}
