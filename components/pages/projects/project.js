import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";
import Head from "next/head";
import Image from "next/image";

const Project = ({ projectData }) => {
  const { title, date, contentHtml, imgUrl } = projectData;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="glass">
        <div>{title}</div>
        <div>
          <Date dateString={date} />
        </div>
        <div>
          <Image src={imgUrl} height={400} width={600} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </>
  );
};

export default Project;
