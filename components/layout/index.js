import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";
import GoBackBtn from "../sharedComponents/button/GoBackBtn";

export default function Layout({ children }) {
  const siteTitle = `Kevin O'Malley`;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
          <section className="goBack">
            <GoBackBtn />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
