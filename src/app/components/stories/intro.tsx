/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import Image from "next/image";

const Intro = ({ userData }: { userData: UserData }) => {
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setIsReversed((prev) => !prev);
      },
      !isReversed ? 3000 : 600
    );

    return () => clearTimeout(timeout);
  }, [isReversed]);
  return (
    <motion.div
      key="intro"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full px-8 gap-3 sm:gap-4 w-full relative"
      style={{
        backgroundImage: "url('/bg/intro-desktop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full  max-w-[1100px] h-full "
        style={{
          backgroundImage: "url('/bg/intro-circles.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <motion.div
        initial={{
          transform: "scale(2)",
        }}
        animate={{
          transform: "scale(1)",
          position: "static",
          y: 0,
        }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-center justify-center gap-3 sm:hidden"
      >
        <motion.img
          className="sm:w-[70px] w-9.5 aspect-square"
          src={"/images/logo-icon.svg"}
          alt="logo"
        />
        <motion.img
          className="sm:h-[35px] h-4.5 w-auto"
          src={"/images/logo-text.svg"}
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{
          transform: "scale(3)",
        }}
        animate={{
          transform: "scale(1)",
          position: "static",
          y: 0,
        }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-center justify-center gap-3 max-sm:hidden"
      >
        <motion.img
          className="sm:w-[70px] w-9.5 aspect-square"
          src={"/images/logo-icon.svg"}
          alt="logo"
        />
        <motion.img
          className="sm:h-[35px] h-4.5 w-auto"
          src={"/images/logo-text.svg"}
          alt="logo"
        />
      </motion.div>
      <motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="font-bold sm:text-5xl text-2xl"
        >
          Your SpaceTrade
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className=" flex items-start justify-center"
        >
          <motion.h1 className="font-bold sm:text-5xl text-2xl text-center">
            journey in
          </motion.h1>
          <div className="flex items-center relative ">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: isReversed ? 0 : 1,

                rotate: isReversed ? -180 : 0,
              }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="flex items-center absolute pt-4 sm:pt-6  left-0 sm:w-[132px] w-[69px] h-auto"
            >
              <motion.img
                className="w-full h-full"
                src={"/images/2025.svg"}
                alt="logo"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="max-sm:text-xs"
      >
        Let’s relive your best moments on SpaceTrade!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="flex items-center justify-center gap-2"
      >
        <Image src={"/images/user.png"} alt="" width={35} height={35} />
        <p className="font-bold">@cermuel</p>
      </motion.div>
      <motion.div
        initial={{
          transform: "translateY(-100%)",
          opacity: 0,
        }}
        animate={{
          transform: "translateX(0)",
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 2 }}
        className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1"
      >
        <div className="bg-[#22C55E] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-40 w-20">
          <p className="font-bold max-sm:text-[9px] text-center">Wrapped</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
