/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";
import Image from "next/image";
import TransactionChart from "./transaction-chart";
import DonutChart from "./transaction-chart";

const Transactions = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="transactions"
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
      className="flex flex-col items-center text-center max-md:justify-center md:pt-20 h-full gap-24 sm:px-8 px-6  w-full relative"
      style={{
        backgroundImage: "url('/bg/transactions.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={"/bg/transactions-circle.png"}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        alt=""
        width={600}
        height={600}
      />

      <div className="flex flex-col items-center justify-center z-10">
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1 -rotate-3">
          <div className="bg-[#C79101] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-52 w-30">
            <p className="font-bold max-sm:text-[9px] text-center">
              Your Fastest Payout
            </p>
          </div>
        </motion.div>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          Blink and You Got Paid
        </motion.h1>
      </div>
      <div>
        <DonutChart
          className="sm:w-[280px] md:w-[350px] w-[200px]"
          totalWithdrawal={1050000}
          totalTransfer={750000}
        />
      </div>
    </motion.div>
  );
};

export default Transactions;
