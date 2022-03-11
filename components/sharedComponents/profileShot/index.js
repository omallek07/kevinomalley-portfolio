import React from "react";
import Image from "next/image";

const ProfileShot = () => {
  return (
    <Image
      src="/static/KevinProfile2022.jpg"
      height={690}
      width={500}
      layout="responsive"
      alt="Kevin O'Malley Profile Picture"
    />
  );
};

export default ProfileShot;
