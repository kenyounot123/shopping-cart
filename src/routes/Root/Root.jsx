import Navbar from "../../components/Navbar/Navbar";
import rootStyle from "./Root.module.css";
export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <div className={rootStyle["container"]}>
          <h1 className={rootStyle["banner-title"]}>Summer Deals 25% Off!</h1>
          <img
            className={rootStyle["desktop-banner-img"]}
            src="/images/shopping-banner.jpg"
            alt="Banner"
          />
          <img
            className={rootStyle["mobile-banner-img"]}
            src="/images/mobile-shopping-banner.png"
            alt="Banner"
          />
        </div>
        <div className={rootStyle["title-and-btn"]}>
          <h2 className={rootStyle.title}>
            Discover the Best Deals on Our Website!
          </h2>
          <button className={rootStyle.btn}>Shop Now</button>
        </div>
      </main>
    </>
  );
}
