import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";
import GoBackBtn from "../sharedComponents/button/GoBackBtn";
import BackToTop from "../sharedComponents/backToTop/";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
          <section className="goBack">
            <GoBackBtn />
          </section>
          <BackToTop showButton={showButton} scrollToTopHandler={scrollToTop} />
        </main>
        <Footer />
      </div>
    </>
  );
}
