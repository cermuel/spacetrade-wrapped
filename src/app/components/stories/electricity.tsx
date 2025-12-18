/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";
import Image from "next/image";
import { formatNumber } from "@/utils/helpers";

const Electricity = ({ userData }: { userData: UserData }) => {
  const text = `Your Utility `;
  const letters = text.split("");

  const getDelay = (index: number) => {
    if (index < 9) {
      return 0.5 + 0.7 + (index - 5) * 0.1;
    } else {
      return 1.1 + 0.7 + (index - 5) * 0.1;
    }
  };
  return (
    <motion.div
      key="electricity"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center justify-center h-full gap-10 sm:px-8 px-6  w-full relative"
      style={{
        // backgroundImage: "url('/bg/transactions.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1 -rotate-3">
        <div className="bg-[#C79101] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-40 w-24">
          <p className="font-bold max-sm:text-[9px] text-center">
            Bill Payments
          </p>
        </div>
      </motion.div>
      <motion.h1
        className="font-bold sm:text-5xl text-2xl"
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
        Blueprint
      </motion.h1>

      <div className="z-10 flex items-center relative w-full justify-center max-w-[800px] sm:h-40 h-[330px] gap-10 max-sm:flex-col sm:gap-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", mass: 2, stiffness: 150 }}
          className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-between gap-4 w-full flex p-6"
        >
          <div className="space-y-4 text-left">
            <p>Number of utility bills paid</p>
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
              {formatNumber(
                userData.top_utility.reduce(
                  (acc, curr) => acc + Number(curr.total || 0),
                  0
                )
              )}
            </h1>
          </div>
          <Image src={"/icons/gear.svg"} alt="" width={50} height={50} />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", mass: 2, stiffness: 150 }}
          className="h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 z-10 flex-1 rounded-[15px] items-center justify-between gap-4 w-full flex p-6"
        >
          <div className="space-y-4 text-left">
            <p>Your top biller</p>
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold ">
              {userData?.top_utility[0]?.type}
            </h1>
          </div>
          <Image src={"/icons/bulb.svg"} alt="" width={50} height={50} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Electricity;
