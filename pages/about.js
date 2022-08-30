import React from "react";
import styles from "../styles/About.module.css";
import Contact from "./contact";
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Blogger</h1>
      <img
        className={styles.myImg}
        src="/blogger.jpg"
        alt="coder"
        width={192}
        height={128}
      />
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        voluptas eveniet ab ad provident corporis? Odit deserunt at minus
        officia praesentium laborum eaque molestias esse, exercitationem alias.
        Eum illum atque laboriosam unde corrupti quo perferendis necessitatibus,
        porro nemo fuga quam natus. Quisquam eligendi similique nemo adipisci
        nobis beatae iusto laudantium rerum aut deserunt, laboriosam obcaecati
        temporibus. Deserunt aliquid perferendis similique? Eveniet eos numquam
        quaerat perferendis porro quos aperiam dolores accusantium rem nobis
        dignissimos consequatur quam esse sunt asperiores, voluptas itaque? Ea
        nisi consectetur enim vel cum est iure architecto.
      </p>
      <h2>Services Offered</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro, quod
        culpa fugiat molestias tempora fuga, ducimus similique expedita quas
        perspiciatis quam! Impedit quod, odit cupiditate recusandae labore
        explicabo nisi.
      </p>

      <Contact />
    </div>
  );
};

export default About;
