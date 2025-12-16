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
      initial={{
        transform: "translateX(40%)",
        opacity: 0,
      }}
      animate={{
        transform: "translateX(0)",
        opacity: 1,
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-full px-8 gap-5"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="md:text-5xl sm:text-3xl text-2xl font-black text-white text-center"
      >
        Thanks for trading with
      </motion.h2>
      <motion.div
      // animate={{
      //   scale: [1, 1.1, 1],
      // }}
      // transition={{
      //   duration: 2,
      //   repeat: Infinity,
      //   ease: "easeInOut",
      // }}
      >
        <Image
          src="/images/logo-full.svg"
          alt="SpaceTrade"
          className="w-full h-14 sm:h-20"
          width={314}
          height={82}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-300 md:text-2xl text-xl text-center max-w-md"
      >
        Here's to more trades, more wins, and zero drama in 2026! 🚀
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-[#543D00] text-[#F0FDF4] px-16 py-3 rounded-md text-lg transition cursor-pointer"
        onClick={handleReplay}
      >
        Watch Again
      </motion.button>
    </motion.div>
  );
};

export default Outro;
