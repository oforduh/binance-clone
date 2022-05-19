import React from "react";
import styles from "./banner.module.scss";

import bg from "../../assets/jasmy.jpeg";

const Banner = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.bannerPage}>
        <img src={bg} alt="" />
        <div className={styles.logoText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          provident quam facilis eligendi, delectus rem voluptas voluptatum in
          illum ipsa exercitationem et numquam tempora magnam ab totam nihil, at
          aperiam. Consectetur non, repudiandae aliquid tempore illum, quidem
          culpa perspiciatis id, fugiat iste nostrum tenetur sequi! Harum dicta
          accusantium dignissimos aliquam facilis nobis placeat mollitia natus
          recusandae eum nesciunt consectetur voluptatum possimus labore quod ab
          corrupti soluta, sit odit eaque iusto earum vel. Illum optio
          distinctio maxime inventore, aperiam rem! Eius aut odit quam non,
          velit quidem recusandae impedit illo aliquam voluptates alias
          similique quasi pariatur repudiandae adipisci maxime ab labore.
        </div>
        <div className={styles.logoItem}></div>
      </div>
    </div>
  );
};

export default Banner;
