import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";

const UtilityExport = ({
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
      wrapperClassName="flex flex-col items-center text-center justify-center h-full gap-10 px-8 w-full"
    >
      <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1 -rotate-3">
        <div className="bg-[#C79101] p-2.5 rounded-[15px] w-40">
          <p className="font-bold text-center">Bill Payments</p>
        </div>
      </div>
      <h1 className="font-bold text-5xl">Your Utility Blueprint</h1>
      <div className="z-10 mb-20 flex items-center relative w-full justify-center max-w-[800px] h-40 gap-6">
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-between gap-4 w-full flex p-6">
          <div className="space-y-4 text-left">
            <p>Number of utility bills paid</p>
            <h1 className="text-5xl font-bold">25</h1>
          </div>
          <img src={"/icons/gear.svg"} alt="" width={50} height={50} />
        </div>
        <div className=" h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-between gap-4 w-full flex p-6">
          <div className="space-y-4 text-left">
            <p>Your top biller</p>
            <h1 className="text-5xl font-bold">Electricity</h1>
          </div>
          <img src={"/icons/bulb.svg"} alt="" width={50} height={50} />
        </div>
      </div>
    </ExportWrapper>
  );
};

export default UtilityExport;
