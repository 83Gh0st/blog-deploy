import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, @83Gh0st here!</b> Explore my journey in engineering.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="Featured post image" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            The Intersection of Technology and Innovation: My Latest Thoughts
          </h1>
          <p className={styles.postDesc}>
            Delve into how cutting-edge technologies, such as artificial intelligence and electrical systems, are reshaping industries and inspiring new possibilities. In this post, I share my insights, ideas, and real-world applications that drive my passion for engineering and tech.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
