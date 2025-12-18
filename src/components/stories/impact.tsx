/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import { formatNaira } from "@/utils/helpers";

const Impact = ({ userData }: { userData: UserData }) => {
  const text = `Your trades powered SpaceTrade`;
  const letters = text.split("");

  const getDelay = (index: number) => {
    if (index < 14) {
      return 0.5 + 0.7 + (index - 5) * 0.1;
    } else {
      return 1.1 + 0.7 + (index - 5) * 0.1;
    }
  };
  return (
    <motion.div
      key="impact"
      initial={{ opacity: 0, transform: "scale(1.2)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center max-md:justify-center md:pt-28 h-full gap-10 sm:px-8 px-6  w-full relative"
      style={{
        backgroundImage: "url('/bg/impact-desktop.svg')",

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
      <motion.h1
        initial="hidden"
        animate="visible"
        className="font-bold sm:text-5xl text-2xl"
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

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="z-10 flex items-center relative w-full justify-center max-w-[800px] sm:h-40 h-[330px] gap-10 max-sm:flex-col"
      >
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
            {userData?.total_referrals?.count}
          </h1>
          <p>Number of refferals</p>
        </div>
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
            {formatNaira(Number(userData.total_referrals.amount) ?? 0)}
          </h1>
          <p>Referral earnings</p>
        </div>
        <img
          src="/icons/impact.svg"
          className="sm:w-30 aspect-square w-28 z-10 absolute left-1/2 -translate-x-1/2"
          alt=""
        />
      </motion.div>
      <div className="sm:text-2xl text-xs font-medium z-10 flex items-center">
        That puts you in
        <motion.p
          initial={{ scale: 0, rotateZ: -20 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="font-bold text-base sm:text-4xl px-1 text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text"
        >
          Top {userData.percentile_rank}%
        </motion.p>{" "}
        of SpaceTraders.
      </div>
    </motion.div>
  );
};

export default Impact;
