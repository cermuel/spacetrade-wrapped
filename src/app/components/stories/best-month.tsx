/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { easeOut, motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";

const BestMonth = ({ userData }: { userData: UserData }) => {
  const text = `Your Best Trading Month`;
  const letters = text.split("");

  const getDelay = (index: number) => {
    if (index < 5) {
      return index * 0.1;
    } else if (index < 9) {
      return 0.5 + 0.7 + (index - 5) * 0.1;
    } else {
      return 1.1 + 0.7 + (index - 5) * 0.1;
    }
  };
  return (
    <motion.div
      key="best-month"
      initial={{ opacity: 0, transform: "scale(0.8)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", mass: 1.5, stiffness: 120 }}
      className="flex flex-col items-center text-center justify-center h-full sm:px-8 px-6 w-full relative"
      style={{
        backgroundImage: "url('/bg/best-month-desktop.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={"/bg/best-trading-month.png"}
        alt=""
        className="absolute bottom-0 left-0 w-full h-auto"
      />

      <div className="flex flex-col items-center justify-center z-10 gap-8 sm:gap-10">
        {/* <motion.h1 className="font-bold sm:text-5xl text-2xl max-w-[560px]">
          Your Best Trading Month
        </motion.h1> */}
        <motion.h1
          className="font-bold sm:text-5xl text-2xl max-w-[560px]"
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={letter === " " ? "inline-block sm:w-3 w-2" : ""}
              transition={{
                duration: 0.1,
                delay: getDelay(index),
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1">
          <div className="bg-[#E03A6A] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] w-max">
            <p className="font-bold md:text-5xl sm:4xl text-2xl text-center">
              ️🗓️ {userData.best_month.month}
            </p>
          </div>
        </motion.div>
        <motion.p
          initial={{ transform: "translateY(-80%)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: easeOut }}
          className="max-sm:text-xs"
        >
          You made a total of{" "}
          <span className="font-bold">
            {userData.best_month.trade_count} trades 🚀
            <span className="w-1 inline-block"></span> Boss level things
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default BestMonth;
