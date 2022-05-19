import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerSection}>
        <Banner />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
