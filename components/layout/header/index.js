import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
  const navLinks = [
    {
      link: "/",
      label: "Home",
      icon: "/icons/home-icon-white.svg",
    },
    {
      link: "/posts",
      label: "Blog",
      icon: "/icons/blog-icon-white.svg",
    },
    {
      link: "/projects",
      label: "Projects",
      icon: "/icons/projects-icon-white.svg",
    },
    {
      link: "/portfolio",
      label: "Portfolio",
      icon: "/icons/resume-icon-white.svg",
    },
  ];

  const renderedNavLinks = navLinks.map((navLink) => {
    const { label, link, icon } = navLink;
    return (
      <Link key={label} href={link}>
        <div className={styles.navItem}>
          <div className={styles.imageWrapper}>
            <Image
              alt={label}
              src={icon}
              height={30}
              width={30}
              layout="responsive"
            />
          </div>
          <a className={styles.navLink}>{label}</a>
        </div>
      </Link>
    );
  });

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.navHeader}>Kevin O'Malley</h1>
      </div>
      <nav className={styles.navContainer}>{renderedNavLinks}</nav>
    </header>
  );
};

export default Header;
