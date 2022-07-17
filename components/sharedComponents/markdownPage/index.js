import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";
import Head from "next/head";
import Image from "next/image";
import styles from "./markdownPage.module.css";
import cls from "classnames";
import { is } from "date-fns/locale";

const MarkdownPage = ({ markdownData, isHomePageDisplay }) => {
  const { title, date, contentHtml, imgUrl } = markdownData;
  return (
    <>
      {!isHomePageDisplay && (
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/kevin-omalley-dev-favicon.png" />
        </Head>
      )}
      <div
        className={cls(
          "glass",
          styles.markdownPage,
          isHomePageDisplay ? styles.homePageDisplay : ""
        )}
      >
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <Image src={imgUrl} height={500} width={600} layout="responsive" />
          </div>
          <div>
            <h1>{title}</h1>
            <div>
              <Date dateString={date} />
            </div>
          </div>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </>
  );
};

export default MarkdownPage;
