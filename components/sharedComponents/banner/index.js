import React from 'react';
import clx from 'classnames';
import styles from './banner.module.css';

const Banner = ({ title, isTopBanner = false }) => {
  let titleRender;

  // For styling purposes, split title into individual spans if title is more than one word
  if (title.split(' ').length > 1) {
    titleRender = title
      .split(' ')
      .map((word, idx) => <span key={word + idx}>{word}</span>);
  } else {
    titleRender = <span>{title}</span>;
  }

  return (
    <div className={clx(styles.banner, isTopBanner && styles.isTopBanner)}>
      <h1 className={styles.title}>{titleRender}</h1>
    </div>
  );
};

export default Banner;
