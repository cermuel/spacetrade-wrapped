import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";

const ImpactExport = ({
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
      style={{
        backgroundImage: "url('/bg/impact-desktop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1 -rotate-3">
        <div className="bg-[#C79101] p-2.5 rounded-[15px] w-40">
          <p className="font-bold text-center">Your Impact</p>
        </div>
      </div>
      <h1 className="font-bold text-5xl">Your trades powered SpaceTrade</h1>
      <div className="z-10 flex items-center relative w-full justify-center max-w-[800px] h-40 gap-10">
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="text-5xl font-bold">25</h1>
          <p>Number of refferals</p>
        </div>
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="text-5xl font-bold">245 days</h1>
          <p>Total active days</p>
        </div>
        <img
          src="/icons/impact.svg"
          className="w-30 aspect-square z-10 absolute left-1/2 -translate-x-1/2"
          alt=""
        />
      </div>
      <p className="text-2xl font-medium z-10">
        That puts you in
        <span className="font-bold text-4xl text-[#C79101]">Top 0.2%</span> of
        SpaceTraders.
      </p>
    </ExportWrapper>
  );
};

export default ImpactExport;
