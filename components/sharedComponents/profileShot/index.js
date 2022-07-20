import React from "react";
import Image from "next/image";

const ProfileShot = () => {
  return (
    <Image
      src="/static/KevinProfile2022.jpg"
      layout="fill"
      alt="Kevin O'Malley Profile Picture"
    />
  );
};

export default ProfileShot;
