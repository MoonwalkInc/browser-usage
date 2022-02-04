import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/browsers");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const responseData = await response.json();
    return setData(responseData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Browser Usage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>Browser Usage</b>
        </h1>
        <p>
          <button onClick={fetchData}>Fetch Latest Data</button>
        </p>

        <div>
          {data.length ? (
            <>
              <div className={styles.card}>
                <h2>All Browsers</h2>
                <ul>
                  {data.map((browser: any, i) => {
                    return (
                      <li key={i}>
                        {browser?.name} ({browser.usage})
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            "Click above to fetch latest data"
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
