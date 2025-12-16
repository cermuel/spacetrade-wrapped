/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";

const TotalTrades = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="total-trades"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center justify-center h-full sm:px-8 px-6 gap-10 sm:gap-[60px] w-full relative"
      style={{
        backgroundImage: "url('/bg/trades-desktop.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={"/bg/trades-circles-top.svg"}
        alt=""
        className="absolute top-0 right-0 h-[60vh] lg:h-screen"
      />
      <img
        src={"/bg/trades-circles-bottom.svg"}
        alt=""
        className="absolute bottom-0 left-0 h-[60vh] lg:h-screen"
      />
      <div className="flex flex-col items-center justify-center z-10">
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1">
          <div className="bg-[#E03A6A] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px]  w-52">
            <p className="font-bold max-sm:text-[9px] text-center">
              Your Year at a Glance
            </p>
          </div>
        </motion.div>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          Here’s how far you’ve come
        </motion.h1>
      </div>
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: easeOut }}
        className="flex flex-col items-center justify-center gap-1 z-10"
      >
        <p className="font-medium max-sm:text-xs">Total number of trades</p>
        <motion.h1 className="font-bold sm:text-5xl text-2xl text-[#C79101]">
          🚀 8
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: easeOut }}
        className="flex flex-col items-center justify-center gap-1 z-10"
      >
        <p className="font-medium max-sm:text-xs">Total profit made</p>
        <motion.h1 className="font-bold sm:text-5xl text-2xl text-[#C79101]">
          💰 ₦8,000,000
        </motion.h1>
      </motion.div>
      <motion.p
        initial={{ transform: "translateY(100%)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: easeOut }}
        className="sm:text-2xl text-xs font-medium z-10 max-w-[390px]"
      >
        You ranked in the{" "}
        <span className="font-bold text-base sm:text-4xl text-[#C79101]">
          Top 0.2%
        </span>{" "}
        of SpaceTraders.
      </motion.p>
    </motion.div>
  );
};

export default TotalTrades;
