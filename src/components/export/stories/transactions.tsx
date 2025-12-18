import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";
import DonutChart from "../../stories/transaction-chart";

const TransactionsExport = ({
  ref,
  userData,
}: {
  ref: Ref<HTMLElement> | undefined;
  userData: UserData;
}) => {
  return (
    <ExportWrapper
      userData={userData}
      ref={ref}
      style={{
        backgroundImage: "url('/bg/transactions.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center pt-20 h-full gap-24 px-8 w-full"
    >
      <img
        src={"/bg/transactions-circle.svg"}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        alt=""
        width={600}
        height={600}
      />
      <div className="flex flex-col items-center justify-center z-10">
        <div className="w-max bg-[#FFFFFF1A] rounded-[15px] p-1 -rotate-3">
          <div className="bg-[#C79101] p-2.5 rounded-[15px] w-52">
            <p className="font-bold text-center">Your Fastest Payout</p>
          </div>
        </div>
        <h1 className="font-bold text-5xl">Blink and You Got Paid</h1>
      </div>
      <div>
        <DonutChart
          className="w-[350px]"
          totalWithdrawal={Number(userData.total_withdrawal.amount) ?? 0}
          totalTransfer={Number(userData.total_transfer.amount) ?? 0}
          isExport
        />
      </div>
    </ExportWrapper>
  );
};

export default TransactionsExport;
