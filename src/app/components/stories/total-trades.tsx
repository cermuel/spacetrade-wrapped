/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";

const TotalTrades = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="total-trades"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center h-full px-8"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-[#C79101] mb-12 font-bold tracking-wider"
      >
        IN 2025, YOU MADE
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
        className="mb-8"
      >
        <h2 className="text-9xl font-black text-[#C79101]">
          {userData.totalTrades}
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-4xl text-white font-bold mb-2"
      >
        trades
      </motion.p>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="text-6xl"
      >
        🚀
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-400 mt-4"
      >
        That's some serious trading!
      </motion.p>
    </motion.div>
  );
};

export default TotalTrades;
