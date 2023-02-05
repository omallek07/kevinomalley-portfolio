import React from 'react';
import styles from './home.module.css';
import clx from 'classnames';
import Banner from '../../sharedComponents/banner';
import Button from '../../sharedComponents/button';
import AboutMe from './aboutMe';

import Posts from '../posts/';
import Projects from '../projects/';

const Home = ({ allPostsData, allProjectsData }) => {
  return (
    <div className='homePage'>
      <Banner title="Kevin O'Malley" isTopBanner />
      <section className={clx(styles.welcomeSection, styles.section)}>
        <AboutMe />
      </section>
      <section className={styles.section}>
        <Projects allProjectsData={allProjectsData} />
      </section>
      <section className={styles.section}>
        <Posts allPostsData={allPostsData} />
      </section>
      <Button buttonText='Check out my resume' link='/portfolio' />
    </div>
  );
};

export default Home;
