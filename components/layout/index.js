import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children, pageTitle }) {
  const siteTitle = `Kevin O'Malley${pageTitle && " | " + pageTitle}`;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kevin O'Malley Portfolio Website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.layout}>
        <Header pageTitle={pageTitle} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
