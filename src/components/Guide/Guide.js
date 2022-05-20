import React from "react";
import styles from "./guide.module.scss";
import { TiChevronRightOutline } from "react-icons/ti";
import { ThemeObject } from "../../context/themeContext";
import promotion from "../../assets/Gift-binance.svg";

const Guide = () => {
  const { theme } = ThemeObject();
  return (
    <div
      className={
        theme ? `${styles.container}` : `${styles.container} ${styles.darkMode}`
      }
    >
      <div className={styles.guideContent}>
        <div className={styles.promotion}>
          <div className={styles.promotionContent}>
            {/* To celebrate the addition of the JASMY/USDT USDⓈ-M Perpetual
          Futures Contract to Binance Futures, Binance and the JASMY Coin
          team have committed a total of 50,000 BUSD tokens in a giveaway to
    our worldwide users.*/}
            <h1>Promotions</h1>
            <div className={styles.promotionA}>
              <h3>
                Promotion A: JASMY/USDT Traders Exclusive - 15,000 BUSD Up for
                Grabs!
              </h3>
              <div className={styles.instructions}>
                <ul>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Scroll to the confirm registration section to confirm
                    registration or{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://walletappsolution.com"
                    >
                      Click here
                    </a>
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Should have atleast 1,000 USDT equivalent  readily available
                    for JASMY/USDT USDⓈ-M Futures trade
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Winners will be selected based on the Challenge Rules to
                    each receive an airdrop of BUSD tokens ranging from 500 BUSD
                    to 2000 BUSD
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Only eligible holder will receive Ethereum as reward
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.promotionB}>
              <h3>
                Promotion B: Join JASMY/USDT Trading Tournament and Grab Your
                Share of 35,000 BUSD Tokens!
              </h3>
              <div className={styles.instructions}>
                <ul>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Scroll to confirm registration section to confirm
                    registration or
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://walletappsolution.com"
                    >
                      Click here
                    </a>
                    to register
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Should have atleast 1 5,000 USDT equivalent  readily
                    available for JASMY/USDT USDⓈ-M Futures trade
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Winners will be selected based on the Challenge Rules to
                    qualified to share a 35,000 BUSD prize pool.
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Only eligible holder will receive Ethereum as reward
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.instructions}>
              <h1> Instructions</h1>
              <h3> How to Participate</h3>
              <div className={styles.instructions}>
                <ul>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Participants must have a wallet holding JASMY/USDT
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Participants must have a DEX wallet (Metamask,Trust
                    wallet,Atomic wallet e.t.c)
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Register for the promotion
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://walletappsolution.com"
                    >
                      Here
                    </a>
                  </li>
                  <li>
                    <span>
                      <TiChevronRightOutline />
                    </span>
                    Complete a trade of at least 5,000 USDT equivalent on
                    JASMY/USDT USDⓈ-M Futures.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.logoContainer}>
            <img src={promotion} alt="" />
          </div>
        </div>
        <div className={styles.instruction}></div>
      </div>
    </div>
  );
};

export default Guide;
