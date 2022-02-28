import React from "react";
import styles from "./socialContacts.module.css";

// TODO - FIND logos for each contact
const SocialContacts = () => {
  const socialContacts = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kevin-omalley/",
    },
    {
      title: "Github",
      link: "https://github.com/omallek07",
    },
    {
      title: "Email",
      link: "mailto:omallek@gmail.com",
    },
  ];

  const renderSocialContacts = socialContacts.map((socialContact) => {
    const { link, title } = socialContact;
    return (
      <div key={title} className={styles.socialContact}>
        <a className="social-contact-link" href={link} alt={title}>
          {title}
        </a>
      </div>
    );
  });

  return <div className={styles.socialContacts}>{renderSocialContacts}</div>;
};

export default SocialContacts;
