/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";
import Image from "next/image";

const Rank = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="rank"
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
      className="flex flex-col items-center text-center justify-center h-full gap-6 sm:px-8 px-6  w-full relative"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1 -rotate-1">
          <div className="bg-[#C79101] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-40 w-24">
            <p className="font-bold max-sm:text-[9px] text-center">
              We value you
            </p>
          </div>
        </motion.div>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          You are a
        </motion.h1>
      </div>

      <img
        src="/icons/rank.svg"
        className=" aspect-477/180 w-[477px] z-10"
        alt=""
      />

      <p className="sm:text-2xl text-xs font-medium z-10">
        That’s
        <span className="font-bold text-base sm:text-2xl ">Top 3%</span> of our
        user’s
      </p>
    </motion.div>
  );
};

export default Rank;
