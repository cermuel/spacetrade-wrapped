import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";

const Activities = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="activities"
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
        YOUR YEAR IN NUMBERS
      </motion.p>
      <div className="w-full max-w-md space-y-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="bg-linear-to-r from-[#C79101]/20 to-yellow-600/20 px-8 py-6 rounded-2xl backdrop-blur-sm border border-[#C79101]/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Giftcards Traded</p>
              <p className="text-4xl font-black text-white">
                {userData.giftcardsTraded}
              </p>
            </div>
            <span className="text-5xl">🎁</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="bg-linear-to-r from-blue-600/20 to-purple-600/20 px-8 py-6 rounded-2xl backdrop-blur-sm border border-blue-500/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Bills Paid</p>
              <p className="text-4xl font-black text-white">
                {userData.billsPaid}
              </p>
            </div>
            <span className="text-5xl">💡</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="bg-linear-to-r from-green-600/20 to-emerald-600/20 px-8 py-6 rounded-2xl backdrop-blur-sm border border-green-500/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Referrals</p>
              <p className="text-4xl font-black text-white">
                {userData.referrals}
              </p>
            </div>
            <span className="text-5xl">🤝</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Activities;
