/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import Image from "next/image";

const TypingText = () => {
  const phrases = [
    "Here's to more wins in 2026! 🚀",
    "Here's to more trades in 2026! 🚀",
    "Here's to zero drama in 2026! 🚀",
    "Here's to more success in 2026! 🚀",
  ];

  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const baseText = "Here's to ";

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentPhrase.length) {
            setDisplayText(currentPhrase.substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
        } else {
          if (displayText.length > baseText.length) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
            setCharIndex(baseText.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, charIndex, isDeleting, phraseIndex]);

  return (
    <p className="text-gray-300 md:text-2xl text-xl text-center max-w-md">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-5 md:h-6 bg-gray-300 ml-1 align-middle"
      />
    </p>
  );
};

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
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/logo-full.svg"
          alt="SpaceTrade"
          className="w-full h-14 sm:h-20"
          width={314}
          height={82}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <TypingText />
      </motion.div>
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
