import React from "react";
import styles from "./banner.module.scss";
import displayPage from "../../assets/landingphoto.svg";
import { ThemeObject } from "../../context/themeContext";
import Countdown from "react-countdown";

const Banner = () => {
  const { theme } = ThemeObject();
  // Renderer callback with condition

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
  };
  return (
    <div
      className={
        theme ? `${styles.container}` : `${styles.container} ${styles.darkMode}`
      }
    >
      <div className={styles.bannerPage}>
        <div className={styles.imageContainer}>
          <img src={displayPage} alt={displayPage} />
        </div>
        <div className={styles.countDown}>
          <div className={styles.textContent}>
            <h1>
              JASMY/USDT USDⓈ-M Futures Trading Tournament - 150,000 BUSD Up for
              Grabs!
            </h1>
            <div className={styles.parentPeriodContainer}>
              <div className={styles.parentPeriodItem}>
                <span className={styles.period}>
                  <h3>
                    Activity Period: 2022/05/23 00:00:00 - 2022/06/01 23:59:59
                    (UTC)
                  </h3>
                </span>
                <div className={styles.countdownContainer}>
                  <span className={styles.text}> Activity ends in </span>
                  <Countdown date={`2022/06/01`} renderer={renderer} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
