import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";

const BestMonthExport = ({
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
        backgroundImage: "url('/bg/best-month-desktop.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center justify-center h-full px-8 w-full"
    >
      <div className="flex flex-col items-center justify-center z-10 gap-10">
        <h1 className="font-bold text-5xl max-w-[560px]">
          Your Best Trading Month
        </h1>
        <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1">
          <div className="bg-[#E03A6A] p-2.5 rounded-[15px] w-[260px]">
            <p className="font-bold text-5xl text-center">️🗓️ August</p>
          </div>
        </div>
        <p>
          You made a total of{" "}
          <span className="font-bold">250k trades 🚀! Boss level things</span>
        </p>
      </div>
    </ExportWrapper>
  );
};

export default BestMonthExport;
