import React from "react";
import styles from "./wallet.module.scss";
import { ThemeObject } from "../../context/themeContext";

const Wallet = () => {
  const { theme } = ThemeObject();
  return (
    <div
      className={
        theme ? `${styles.container}` : `${styles.container} ${styles.darkMode}`
      }
    >
      <div className={styles.walletContent}>
        <div className={styles.textContainer}>
          <h1>Register Here</h1>
          <span>Connect your wallet to commence registration</span>
        </div>

        <div className={styles.buttonContainer}>
          <button>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://walletappsolution.com"
            >
              Register
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
