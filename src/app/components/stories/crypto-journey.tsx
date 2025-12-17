/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { UserData } from "@/utils";
import ShareDownload from "../share-download";
import Image from "next/image";
import { formatDollar } from "@/utils/helpers";

const CryptoJourney = ({ userData }: { userData: UserData }) => {
  return (
    <motion.div
      key="crypto-journey"
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
      className="flex flex-col items-center text-center justify-center h-full sm:px-8 px-6  w-full relative"
      style={{
        backgroundImage: "url('/bg/trades-desktop.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center z-10 mt-auto">
        <motion.div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1">
          <div className="bg-[#C79101] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-60 w-34">
            <p className="font-bold max-sm:text-[9px] text-center">
              Crypto Trades Summary
            </p>
          </div>
        </motion.div>
        <motion.h1 className="font-bold sm:text-5xl text-2xl">
          Your Crypto Journey
        </motion.h1>
      </div>
      <div className="w-full max-w-[800px] flex items-end justify-center max-lg:mt-auto mt-6 max-h-[390px] gap-2 sm:gap-4 sm:max-h-[65dvh] h-full">
        {userData.top_cryptos.length > 0 &&
          (() => {
            const sorted = [...userData.top_cryptos].sort(
              (a, b) => Number(b.usd_total) - Number(a.usd_total)
            );

            const displayOrder = [sorted[1], sorted[0], sorted[2]].filter(
              Boolean
            );

            return displayOrder.map((crypto, i) => {
              const rank = sorted.indexOf(crypto) + 1;
              const positionValue = rank as 1 | 2 | 3;

              return (
                <Podium
                  key={crypto.crypto_symbol || i}
                  position={positionValue}
                  coin={{
                    name: crypto.crypto.name,
                    acronym: crypto.crypto_symbol ?? crypto.crypto.code,
                    icon: crypto.crypto.icon ?? "/crypto/eth.svg",
                  }}
                  amount={Number(crypto.usd_total)}
                />
              );
            });
          })()}
      </div>
    </motion.div>
  );
};

export default CryptoJourney;

const Podium = ({
  position,
  coin,
  amount,
}: {
  position: 1 | 2 | 3;
  coin: { name: string; acronym: string; icon: string };
  amount: number;
}) => {

  return (
    <motion.div
      initial={{
        transform: "translateY(100%)",
      }}
      animate={{
        transform: "translateY(0)",
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: position == 3 ? 1 : position == 2 ? 1.5 : 2.2,
      }}
      style={{
        overflow: "hidden",
        willChange: "transform",
      }}
      className={`flex flex-col items-center ${
        position == 1 ? "h-full" : position == 2 ? "h-[85%]" : "h-[75%]"
      }`}
    >
      <Image
        src={coin.icon}
        alt=""
        className="border-white"
        width={85}
        height={90}
      />
      <h1 className="font-semibold text-[10px] text-lg md:text-2xl">
        ({coin.acronym}) <br />
        <span>{coin.name}</span>
      </h1>
      <motion.div className="mt-4 relative">
        <img
          src={"/leaderboard/podium-1.svg"}
          alt=""
          className={`${
            "aspect-311/420"
            // position == 1
            // ? "aspect-311/420"
            // : position == 2
            // ? "aspect-311/354"
            // : "aspect-311/280"
          } max-sm:hidden`}
        />
        <img
          src={"/leaderboard/podium-1-mobile.svg"}
          alt=""
          className="md:aspect-311/115  sm:hidden"
        />

        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center">
          <Image
            src={
              position == 1
                ? "/leaderboard/medal-1.svg"
                : position == 2
                ? "/leaderboard/medal-2.svg"
                : "/leaderboard/medal-3.svg"
            }
            alt=""
            className="aspect-square md:w-[70px] sm:w-[50px] w-[35px]"
            width={70}
            height={70}
          />
          <p className="md:text-sm sm:text-xs text-[9px] mt-2 sm:mt-4">
            Amount Traded
          </p>
          <h1 className="md:text-2xl sm:text-lg text-xs font-semibold ">
            💰{`  `} {formatDollar(amount)}
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};
