/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { easeOut, motion } from "framer-motion";
import { UserData } from "@/utils";
import { formatNaira } from "@/utils/helpers";

const TotalTrades = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="total-trades"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center justify-center h-full sm:px-8 px-6 gap-10 sm:gap-15 w-full relative"
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
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-0.75 sm:p-1">
          <div className="bg-[#E03A6A] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px]  w-52 max-sm:w-28">
            <p className="font-bold max-sm:text-[9px] text-center">
              Your Year at a Glance
            </p>
          </div>
        </motion.div>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          Here’s how far you’ve come
        </motion.h1>
      </div>
      <motion.div className="flex flex-col items-center justify-center gap-1 z-10">
        <p className="font-medium max-sm:text-xs">Total number of trades</p>
        <motion.h1
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="font-bold sm:text-5xl text-2xl text-[#C79101]"
        >
          🚀 {userData.total_trade.count}
        </motion.h1>
      </motion.div>
      <motion.div className="flex flex-col items-center justify-center gap-1 z-10">
        <p className="font-medium max-sm:text-xs">Total profit made</p>
        <motion.h1
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 200, mass: 1.1 }}
          className="font-bold sm:text-5xl text-2xl text-[#C79101]"
        >
          💰 {formatNaira(userData.total_trade.naira)}
        </motion.h1>
      </motion.div>
      <motion.p
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 200, mass: 1.1 }}
        className="sm:text-2xl text-xs font-medium z-10 max-w-97.5"
      >
        You ranked in the{" "}
        <span className="font-bold text-base sm:text-4xl text-[#C79101]">
          Top {userData.percentile_rank}%
        </span>{" "}
        of SpaceTraders.
      </motion.p>
    </motion.div>
  );
};

export default TotalTrades;
