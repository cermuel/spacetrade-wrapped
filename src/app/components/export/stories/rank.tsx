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
  return (
    <ExportWrapper
      ref={ref}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center pt-28 h-full gap-10 px-8 w-full"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1 -rotate-1">
          <div className="bg-[#C79101] p-2.5 rounded-[15px] w-40">
            <p className="font-bold text-center">We value you</p>
          </div>
        </div>
        <h1 className="font-bold text-5xl">You are a</h1>
      </div>
      <img
        src="/icons/rank.svg"
        className="aspect-477/180 w-[477px] z-10"
        alt=""
      />
      <p className="text-2xl font-medium z-10">
        That's
        <span className="font-bold text-2xl">Top 3%</span> of our user's
      </p>
    </ExportWrapper>
  );
};

export default RankExport;
