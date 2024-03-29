import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';
import GoBackBtn from '../sharedComponents/button/GoBackBtn';
import BackToTop from '../sharedComponents/backToTop/';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
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
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  const siteTitle = `Kevin O'Malley`;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Kevin O'Malley Portfolio Website" />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
          <section className='goBack'>
            <GoBackBtn />
          </section>
          <BackToTop showButton={showButton} scrollToTopHandler={scrollToTop} />
        </main>
        <Footer />
      </div>
    </>
  );
}
