import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";
import Head from "next/head";
import Image from "next/image";
import styles from "./markdownPage.module.css";
import cls from "classnames";

const MarkdownPage = ({ markdownData }) => {
  const { title, date, contentHtml, imgUrl } = markdownData;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={cls("glass", styles.markdownPage)}>
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
