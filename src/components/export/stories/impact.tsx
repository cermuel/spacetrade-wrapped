import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";
import { formatNaira } from "@/utils/helpers";

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
      userData={userData}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center pt-28 h-full gap-10 px-8 w-full"
      style={{
        // backgroundImage: "url('/bg/impact-desktop.svg')",
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

      <h1 className="font-bold text-5xl">
        {userData?.total_referrals?.count > 0
          ? "Your Presence Made an Impact"
          : "Refer Friends, Make an Impact"}
      </h1>
      <div className="z-10 flex items-center relative w-full justify-center max-w-[800px] h-40 gap-10">
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="text-5xl font-bold">
            {" "}
            {userData?.total_referrals?.count}
          </h1>
          <p>Number of refferals</p>
        </div>
        <div className="h-full bg-[#6D500133] border border-[#543D00] z-10 flex-1 rounded-[15px] items-center justify-center flex-col gap-4 w-full flex p-6">
          <h1 className="text-5xl font-bold">
            {" "}
            {formatNaira(Number(userData.total_referrals.amount) ?? 0)}
          </h1>
          <p>Referral earnings</p>
        </div>
        <img
          src="/icons/impact.svg"
          className="w-30 aspect-square z-10 absolute left-1/2 -translate-x-1/2"
          alt=""
        />
      </div>
      {userData?.total_referrals?.count > 0 ? (
        <div className="sm:text-2xl text-xs font-medium z-10 flex items-center">
          You helped SpaceTrade grow this year by sharing with others 🚀
        </div>
      ) : (
        <h1 className="font-medium sm:text-2xl max-w-[700px]">
          Big impact doesn’t always start loud.
        </h1>
      )}
    </ExportWrapper>
  );
};

export default ImpactExport;
