/* eslint-disable react/no-unescaped-entities */
import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";

const RankExport = ({
  ref,
  userData,
}: {
  ref: Ref<HTMLElement> | undefined;
  userData: UserData;
}) => {
  const formatNumber = (value: number): string => {
    const absValue = Math.abs(value);
    const sign = value < 0 ? "-" : "";

    if (absValue >= 1_000_000_000) {
      const billions = absValue / 1_000_000_000;
      return `${sign}${billions.toFixed(1).replace(/\.0$/, "")}B`;
    }

    if (absValue >= 1_000_000) {
      const millions = absValue / 1_000_000;
      return `${sign}${millions.toFixed(1).replace(/\.0$/, "")}M`;
    }

    if (absValue >= 100_000) {
      // Fixed: was 1_00_000
      const thousands = absValue / 1000;
      return `${sign}${thousands.toFixed(1).replace(/\.0$/, "")}K`;
    }

    const formatted = absValue.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return `${sign}${formatted}`;
  };
  return (
    <ExportWrapper
      userData={userData}
      ref={ref}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center pt-28 h-full gap-10 px-8 w-full"
    >
      <div className="text-8xl">👑</div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1 -rotate-1">
          <div className="bg-[#C79101] p-2.5 rounded-[15px] w-40">
            <p className="font-bold text-center">We value you</p>
          </div>
        </div>
        <h1 className="font-bold text-5xl">You are a</h1>
      </div>
      <div
        style={{
          background: `linear-gradient(316.98deg, #${userData.badge.end_color} 0%, #${userData.badge.start_color} 73.06%)`,
        }}
        className="rounded-[20px] p-6 flex items-center justify-center gap-4 shadow-2xl"
      >
        {/* <img
          src={userData.badge.badge}
          alt=""
          className="w-22.5 h-30"
          width={90}
          height={120}
          crossOrigin="anonymous"
        /> */}
        <div>
          <h1 className="font-bold text-[40px]">{userData.badge.title}</h1>
          <div
            style={{
              background: `linear-gradient(316.98deg, #${userData.badge.end_color} 0%, #${userData.badge.start_color} 73.06%)`,
            }}
            className="font-medium text-2xl w-max rounded-full p-1 px-2 py-1.5 flex items-center gap-1.5"
          >
            <span>🔥</span> {formatNumber(Number(userData.total_trade.count))}{" "}
            trades
          </div>
        </div>
      </div>
      <p className="text-2xl font-medium z-10">
        That's
        <span className="font-bold text-2xl">Top 3%</span> of our user's
      </p>
    </ExportWrapper>
  );
};

export default RankExport;
