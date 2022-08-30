import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  //  const router = useRouter();
  //  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title Of The Page - {blog && blog.title} </h1>
        <hr />
        <img className={styles.myImg} src={blog && blog.imageSrc} />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

// function for static side generator
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

// function for server side rendering
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myBlog = await data.json();

//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   };
// }

export default Slug;
