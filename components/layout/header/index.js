import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = ({ pageTitle }) => {
  const navLinks = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/posts",
      label: "Blog Posts",
    },
    {
      link: "/projects",
      label: "Projects",
    },
  ];

  const renderedNavLinks = navLinks.map((navLink) => {
    return (
      <Link key={navLink.label} href={navLink.link}>
        <a className={styles.navItem}>{navLink.label}</a>
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
