/* eslint-disable react/no-unescaped-entities */
import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";
import { formatNaira } from "@/utils/helpers";

const TotalTradesExport = ({
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
      wrapperClassName="flex flex-col items-center text-center justify-center h-full px-8 gap-14 w-full"
    >
      <img
        src={"/bg/trades-circles-top.svg"}
        alt=""
        className="absolute -top-4 -right-12 h-screen"
      />
      <img
        src={"/bg/trades-circles-bottom.svg"}
        alt=""
        className="absolute -bottom-10 -left-10 h-screen"
      />
      <div className="flex flex-col items-center justify-center z-10">
        <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1">
          <div className="bg-[#E03A6A] p-2.5 rounded-[15px] w-52">
            <p className="font-bold text-base text-center">
              Your Year at a Glance
            </p>
          </div>
        </div>
        <h1 className="font-bold text-5xl">Here's how far you've come</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 z-10">
        <p className="font-medium text-base">Total number of trades</p>
        <h1 className="font-bold text-5xl text-[#C79101]">
          🚀 {userData.total_trade.count}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 z-10">
        <p className="font-medium text-base">Total profit made</p>
        <h1 className="font-bold text-5xl text-[#C79101]">
          💰 {formatNaira(userData.total_trade.naira)}
        </h1>
      </div>
      <p className="text-2xl font-medium z-10">
        You ranked in the{" "}
        <span className="font-bold text-4xl text-[#C79101]">
          Top {userData.percentile_rank}%
        </span>{" "}
        of SpaceTraders.
      </p>
    </ExportWrapper>
  );
};

export default TotalTradesExport;
