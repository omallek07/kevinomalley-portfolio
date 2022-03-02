import Link from "next/link";
import Image from "next/image";
import React from "react";
import cls from "classnames";
import styles from "./card.module.css";

import Date from "../dateDisplay";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.card}>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.title}</h2>
            <small>
              <Date dateString={props.date} />
            </small>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.imgUrl}
              width={260}
              height={160}
            />
          </div>
          <p>{props.shortDescription}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
