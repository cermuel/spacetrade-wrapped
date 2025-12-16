/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";
import Image from "next/image";

const Impact = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="impact"
      initial={{
        transform: "translateX(40%)",
        opacity: 0,
      }}
      animate={{
        transform: "translateX(0)",
        opacity: 1,
      }}
      exit={{ transform: "translateX(-40%)", opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center max-md:justify-center md:pt-28 h-full gap-10 sm:px-8 px-6  w-full relative"
      style={{
        backgroundImage: "url('/bg/impact-desktop.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1 -rotate-3">
        <div className="bg-[#C79101] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-40 w-24">
          <p className="font-bold max-sm:text-[9px] text-center">Your Impact</p>
        </div>
      </motion.div>
      <motion.h1 className="font-bold sm:text-5xl text-2xl">
        Your trades powered SpaceTrade
      </motion.h1>

      <div className="z-10 flex items-center relative w-full justify-center max-w-[800px] sm:h-40 h-[330px] gap-10 max-sm:flex-col">
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">25</h1>
          <p>Number of refferals</p>
        </div>
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
            245 days
          </h1>
          <p>Total active days</p>
        </div>
        <img
          src="/icons/impact.svg"
          className="sm:w-30 aspect-square w-28 z-10 absolute left-1/2 -translate-x-1/2"
          alt=""
        />
      </div>
      <p className="sm:text-2xl text-xs font-medium z-10">
        That puts you in
        <span className="font-bold text-base sm:text-4xl text-[#C79101]">
          Top 0.2%
        </span>{" "}
        of SpaceTraders.
      </p>
    </motion.div>
  );
};

export default Impact;
