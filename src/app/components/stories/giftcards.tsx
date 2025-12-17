/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { easeOut, motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";
import Image from "next/image";

const GiftcardMoves = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="giftcard-moves"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center max-md:justify-center md:pt-20 h-dvh gap-10 sm:px-8 px-6  w-full relative"
    >
      <img
        src={"/bg/giftcard-circle.svg"}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full"
        alt=""
      />

      <div className="flex flex-col items-center justify-center z-10">
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1">
          <div className="bg-[#E03A6A] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-60 w-34">
            <p className="font-bold max-sm:text-[9px] text-center">
              Giftcard Trades Summary
            </p>
          </div>
        </motion.div>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          {"Your Giftcard Moves".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: index * 0.06,
              }}
              className={char === " " ? "sm:w-3 w-2" : ""}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: easeOut }}
        className="flex flex-col items-center justify-center z-10"
      >
        <p className="sm:text-sm text-xs">your Most traded giftcard</p>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          <span className="text-[#C79101]">#1 </span> Razer Gold
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: easeOut }}
        className="z-10 flex items-center relative w-full justify-center max-w-[800px] sm:h-40 h-[330px] gap-10 max-sm:flex-col sm:gap-6"
      >
        <img
          src={"/bg/giftcard-blur.png"}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
          width={500}
          height={500}
        />
        <motion.div
          initial={{ transform: "translateX(10%)", opacity: 0 }}
          animate={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: easeOut }}
          className="h-full bg-[#E03A6A80] z-10 flex-1 rounded-[15px] items-center justify-center gap-4 w-full flex flex-col"
        >
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">$32M</h1>
          <p>Total giftcard bought</p>
        </motion.div>
        <motion.div
          initial={{ transform: "translateX(-10%)", opacity: 0 }}
          animate={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: easeOut }}
          className="h-full bg-[#E03A6A80] z-10 flex-1 rounded-[15px] items-center justify-center gap-4 w-full flex flex-col"
        >
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">$32M</h1>
          <p>Total giftcard bought</p>
        </motion.div>
        <img
          src="/giftcard/plate.svg"
          className="sm:w-34 aspect-square w-28 z-10 absolute left-1/2 -translate-x-1/2"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default GiftcardMoves;
