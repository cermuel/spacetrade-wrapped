/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import Image from "next/image";

const Outro = ({
  handleReplay,
}: {
  userData: UserData;
  handleReplay: () => void;
}) => {
  return (
    <motion.div
      key="outro"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full px-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <Image
          src="/images/logo-gold.svg"
          alt="SpaceTrade"
          className="w-32 h-32"
          width={128}
          height={128}
        />
      </motion.div>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl font-black text-white mb-4 text-center"
      >
        Thanks for trading
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[#C79101] text-3xl font-bold mb-8"
      >
        with SpaceTrade!
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-300 text-xl text-center max-w-md mb-8"
      >
        Here's to more trades, more wins, and zero drama in 2026! 🚀
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-[#C79101] hover:bg-[#A67801] text-black font-bold px-12 py-4 rounded-full text-lg transition-colors"
        onClick={handleReplay}
      >
        Watch Again
      </motion.button>
    </motion.div>
  );
};

export default Outro;
