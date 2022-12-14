import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h2 {
            font-size: 38px;
          }
          h3 {
            font-size: 38px;
          }
        `}
      </style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Blog-Web App</h1>
        <div className={styles.imagewrap}>
          {/* <Image
            className={styles.myImg}
            src="/coder.jpg"
            width={192}
            height={128}
          /> */}
          <img
            className={styles.myImg}
            src="/coder1.jpg"
            alt="coder"
            width={192}
            height={128}
          />
        </div>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          omnis earum nam. Molestias molestiae nulla quasi dolor quis quia
          consectetur ex illum ad.
        </p>

        <div className="blogs">
          <h2 className={styles.h2}>Popular Blogs</h2>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn javascript in 2022</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn javascript in 2022</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn javascript in 2022</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn javascript in 2022</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
