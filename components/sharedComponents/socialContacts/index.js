import React from "react";
import styles from "./socialContacts.module.css";
import Image from "next/image";
import clx from "classnames";

// TODO - FIND logos for each contact
const SocialContacts = ({ isLabel = false, useOrangeIcons = false }) => {
  const useInvertedColor = useOrangeIcons ? "orange" : "white";
  const socialContacts = [
    {
      title: "Github",
      link: "https://github.com/omallek07",
      icon: `/icons/github-icon-${useInvertedColor}.svg`,
      alt: "My Github Profile",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kevin-omalley/",
      icon: `/icons/linkedin-icon-${useInvertedColor}.svg`,
      alt: "My LinkedIn Profile",
    },
    {
      title: "Email",
      link: "mailto:omallek@gmail.com",
      icon: `/icons/email-icon-${useInvertedColor}.svg`,
      alt: "My Email Address",
    },
  ];

  const renderSocialContacts = socialContacts.map((socialContact) => {
    const { link, title, icon, alt } = socialContact;
    return (
      <div
        key={title}
        className={clx(styles.socialContact, isLabel && styles.labelIcons)}
      >
        <div className={styles.imageWrapper}>
          <Image
            alt={alt}
            src={icon}
            height={25}
            width={25}
            layout="responsive"
          />
        </div>
        <a className="social-contact-link" href={link} alt={title}>
          {title}
        </a>
      </div>
    );
  });

  return <div className={styles.socialContacts}>{renderSocialContacts}</div>;
};

export default SocialContacts;
