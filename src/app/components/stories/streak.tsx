/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";

const Streak = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="streak"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center h-full px-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-8xl mb-8"
      >
        🔥
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-orange-400 mb-8 font-bold tracking-wider"
      >
        YOUR LONGEST STREAK
      </motion.p>
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="text-8xl font-black text-transparent bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text mb-4"
      >
        {userData.tradingStreak}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-3xl text-white font-bold"
      >
        days of trading
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 mt-4 text-center max-w-md"
      >
        Consistency is key! You're building wealth one trade at a time.
      </motion.p>
    </motion.div>
  );
};

export default Streak;
