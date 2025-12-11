/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import Image from "next/image";

const Intro = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="intro"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full px-8"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <Image
          src="/images/logo-gold.svg"
          alt="SpaceTrade"
          width={96}
          height={96}
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-7xl font-black mb-4 text-center text-[#C79101]">
          Your 2025
        </h1>
        <h2 className="text-5xl md:text-6xl font-black text-center text-white">
          Wrapped
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 mt-8 text-xl"
      >
        Let's look back at your year, {userData.name}
      </motion.p>
    </motion.div>
  );
};

export default Intro;
