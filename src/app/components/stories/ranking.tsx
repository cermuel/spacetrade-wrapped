/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";

const Ranking = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="ranking"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.5, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center h-full px-8"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-8xl mb-8"
      >
        👑
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-[#C79101] mb-6 font-bold tracking-wider"
      >
        YOU'RE A
      </motion.p>
      <motion.div
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
        className="bg-linear-to-br from-[#C79101] via-yellow-400 to-[#C79101] p-12 rounded-3xl mb-8 shadow-2xl"
      >
        <h2 className="text-5xl font-black text-black text-center">
          {userData.rank}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-[#C79101]/10 px-8 py-4 rounded-full border border-[#C79101]/30"
      >
        <p className="text-[#C79101] font-bold text-xl">
          That's {userData.percentile} of all traders!
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-400 mt-6 text-center"
      >
        You've been with us since {userData.joinedMonth}
      </motion.p>
    </motion.div>
  );
};

export default Ranking;
