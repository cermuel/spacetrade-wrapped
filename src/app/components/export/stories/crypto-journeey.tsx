import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";

const CryptoExport = ({
  ref,
  userData,
}: {
  ref: Ref<HTMLElement> | undefined;
  userData: UserData;
}) => {
  return (
    <ExportWrapper
      ref={ref}
      style={{
        backgroundImage: "url('/bg/trades-desktop.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center justify-center h-full px-8 w-full"
    >
      <div className="flex flex-col items-center justify-center z-10 mt-auto">
        <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1">
          <div className="bg-[#C79101] p-2.5 rounded-[15px] w-60">
            <p className="font-bold text-center">Crypto Trades Summary</p>
          </div>
        </div>
        <h1 className="font-bold text-5xl">Your Crypto Journey</h1>
      </div>
      <div className="w-full max-w-[800px] flex items-end justify-center  max-h-[80%] h-full gap-4">
        <Podium
          position={3}
          coin={{ name: "Ethereum", acronym: "ETH", icon: "/crypto/eth.svg" }}
        />
        <Podium
          position={1}
          coin={{ name: "Bitcoin", acronym: "BTC", icon: "/crypto/BTC.svg" }}
        />
        <Podium
          position={2}
          coin={{ name: "Solana", acronym: "SOL", icon: "/crypto/sol.svg" }}
        />
      </div>
    </ExportWrapper>
  );
};

export default CryptoExport;

const Podium = ({
  position,
  coin,
}: {
  position: 1 | 2 | 3;
  coin: { name: string; acronym: string; icon: string };
}) => {
  return (
    <div
      className={`flex flex-col items-center overflow-hidden gap-y-4 ${
        position == 1 ? "h-" : position == 2 ? "h-[75%]" : "h-[60%]"
      }`}
    >
      <img
        src={coin.icon}
        alt=""
        className="border-white"
        width={85}
        height={90}
      />
      <h1 className="font-semibold text-2xl">
        ({coin.acronym}) <br />
        <span>{coin.name}</span>
      </h1>
      <div className="mt-auto relative">
        <img
          src={"/leaderboard/podium-1.svg"}
          alt=""
          className="aspect-311/420"
        />
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center">
          <img
            src={
              position == 1
                ? "/leaderboard/medal-1.svg"
                : position == 2
                ? "/leaderboard/medal-2.svg"
                : "/leaderboard/medal-3.svg"
            }
            alt=""
            className="aspect-square w-[70px]"
            width={70}
            height={70}
          />
          <p className="text-sm mt-4">Amount Traded</p>
          <h1 className="text-2xl font-semibold">💰 $30,000</h1>
        </div>
      </div>
    </div>
  );
};
