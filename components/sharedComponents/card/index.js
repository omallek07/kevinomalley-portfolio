import Link from "next/link";
import Image from "next/image";
import React from "react";
import cls from "classnames";
import styles from "./card.module.css";

import Date from "../dateDisplay";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a className={cls("glass", styles.card)}>
        <div className={styles.container}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={cls(styles.cardHeader, "label")}>{props.title}</h2>
            <div>
              <div className={styles.cardDate}>
                <small className="label">
                  <Date dateString={props.date} />
                </small>
              </div>
            </div>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.imgUrl}
              width={260}
              height={160}
            />
          </div>
          <div className={styles.cardDescription}>
            <p>{props.shortDescription}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
