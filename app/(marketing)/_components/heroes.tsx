import Image from "next/image";

import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="realative w-[300px] h-[300px] sm:[250px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/notion1.png"
            className="objet-contain dark:hidden
            "
            width={600}
            height={800}
            alt="notion1"
          />
          <Image
            src="/dark.svg"
            className=" hidden dark:block ml-5
            "
            width={160}
            height={140}
            alt="notion1"
          />
        </div>
        <div className="relative h-[400px] w-[330px] md:block">
          <Image
            src="/better101.jpg"
            className=" object-contain dark:hidden"
            width={400}
            height={400}
            alt="notion2"
          />
          <Image
            src="/diary.svg"
            className=" hidden dark:block ml-40"
            width={160}
            height={140}
            alt="dark2"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
