import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";
import Head from "next/head";
import Image from "next/image";
import styles from "./markdownPage.module.css";
import cls from "classnames";

const MarkdownPage = ({ markdownData, isHomePageDisplay }) => {
  const { title, date, contentHtml, imgUrl } = markdownData;
  return (
    <>
      {!isHomePageDisplay && (
        <Head>
          <title>{title}</title>
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
          <div className={styles.headerTitle}>
            <h1 className="label">{title}</h1>
            <div className={cls(styles.cardDate, "label")}>
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
