/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import Image from "next/image";
import { formatNumber } from "@/utils/helpers";

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
      className="flex flex-col items-center text-center justify-center h-full gap-6 sm:px-8 px-6 w-full relative"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-6xl sm:text-8xl"
      >
        👑
      </motion.div>

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

      <motion.div
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
        style={{
          background: `linear-gradient(316.98deg, #${userData.badge.end_color} 0%, #${userData.badge.start_color} 73.06%)`,
        }}
        className="rounded-[20px] sm:p-6 p-4 flex items-center justify-center gap-4 shadow-2xl"
      >
        <Image
          src={userData.badge.badge}
          alt=""
          className="w-16.25 h-21.5 sm:w-22.5 sm:h-30"
          width={90}
          height={120}
        />
        <div>
          <h1 className="font-bold sm:text-[40px] text-2xl">
            {userData.badge.title}
          </h1>
          <div
            style={{
              background: `linear-gradient(316.98deg, #${userData.badge.end_color} 0%, #${userData.badge.start_color} 73.06%)`,
            }}
            className="font-medium sm:text-2xl text-sm w-max rounded-full p-1 px-2 sm:py-1.5 flex items-center gap-1.5"
          >
            <span>🔥</span> {formatNumber(Number(userData.total_trade.count))}{" "}
            trades
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-[#C79101]/10 px-8 py-4 rounded-full border border-[#C79101]/30"
      >
        <p className="text-[#C79101] font-bold sm:text-xl text-base">
          That's Top {userData.percentile_rank}% of all traders!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Rank;
