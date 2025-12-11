import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";

const Volume = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="volume"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.5, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center h-full px-8"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-[#C79101] mb-12 font-bold tracking-wider"
      >
        YOUR TOTAL TRADING VOLUME
      </motion.p>
      <motion.div
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[#C79101] blur-3xl opacity-30"></div>
        <h2 className="relative text-[64px] sm:text-7xl md:text-8xl font-black text-transparent bg-linear-to-r from-[#C79101] via-yellow-300 to-[#C79101] bg-clip-text">
          {userData.totalVolume}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-[#C79101]/10 px-8 py-4 rounded-full border border-[#C79101]/30"
      >
        <p className="text-[#C79101] font-bold text-lg">
          Zero drama. All gains. 💰
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Volume;
