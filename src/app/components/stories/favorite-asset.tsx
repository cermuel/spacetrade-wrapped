import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import Image from "next/image";

const FavoriteAsset = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="favorite-asset"
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
        YOUR GO-TO ASSET
      </motion.p>
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="bg-linear-to-br from-[#C79101] to-yellow-600 p-16 rounded-3xl mb-8 shadow-2xl relative overflow-hidden"
      >
        <Image src={"/images/ethereum.svg"} alt="" width={120} height={120} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-5xl font-black text-white mb-4 text-center"
      >
        {userData.favoriteAsset}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-300 text-xl"
      >
        Your most traded crypto
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-[#C79101] text-lg mt-4"
      >
        Top transaction: {userData.topTransaction}
      </motion.p>
    </motion.div>
  );
};

export default FavoriteAsset;
