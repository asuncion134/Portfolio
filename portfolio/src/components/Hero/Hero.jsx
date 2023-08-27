import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> 
        Hi, I`m Klien Mark </h1>
        <p className={styles.description}>
             I`m a fresh graduate from Saint Joseph College and is interested in Web Development specifically in Frontend Development. Reach out!</p>
        <a href='https://web.facebook.com/zipfile.garfieldrusell' className={styles.contactBtn}>DM me!</a>
    </div>
    <img src={getImageUrl("hero/Nerd.png")}     alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  );
};

