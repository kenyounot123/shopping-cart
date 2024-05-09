import Navbar from "../../components/Navbar/Navbar";
import rootStyle from "./Root.module.css";
export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <div className={rootStyle["pic-container"]}>
          <img
            className={rootStyle["banner-img"]}
            src="public/images/mobile-shopping-banner.png"
            alt="Shirts"
          />
        </div>
        <h2 className={rootStyle.title}>
          Discover the Best Deals on Our Website
        </h2>
        <button className={rootStyle.btn}>Shop Now</button>
      </main>
    </>
  );
}
