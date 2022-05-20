import React from "react";
import Banner from "../../components/Banner/Banner";
import Wallet from "../../components/Connect/Wallet";
import Footer from "../../components/Footer/Footer";
import Guide from "../../components/Guide/Guide";
import Table from "../../components/Table/Table";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerSection}>
        <Banner />
      </div>
      <div className={styles.guideSection}>
        <Guide />
      </div>
      <div className={styles.connectSection}>
        <Wallet />
      </div>
      <div className={styles.tableSection}>
        <Table />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
