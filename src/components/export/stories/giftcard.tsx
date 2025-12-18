import { UserData } from "@/utils";
import React, { Ref } from "react";
import ExportWrapper from "../export-wrapper";
import { formatDollar } from "@/utils/helpers";

const GiftcardExport = ({
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
        backgroundImage: "url('/bg/best-month-desktop.png')",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
      wrapperClassName="flex flex-col items-center text-center  pt-28 h-full gap-10 sm:px-8 px-6  w-full"
    >
      {/* <img
        src={"/bg/giftcard-circle.svg"}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full"
        alt=""
      /> */}
      <div className="flex flex-col items-center justify-center z-10">
        <div className="w-max bg-[#FFFFFF1A] rounded-lg sm:rounded-[15px] p-[3px] sm:p-1">
          <div className="bg-[#E03A6A] p-1.5 sm:p-2.5 rounded-lg sm:rounded-[15px] sm:w-60 w-34">
            <p className="font-bold max-sm:text-[9px] text-center">
              Giftcard Trades Summary
            </p>
          </div>
        </div>
        <h1 className="font-bold sm:text-5xl text-2xl">Your Giftcard Moves</h1>
      </div>
      <div className="flex flex-col items-center justify-center z-10">
        <p className="sm:text-sm text-xs">your Most traded giftcard</p>
        <h1 className="font-bold sm:text-5xl text-2xl">
          <span className="text-[#C79101]">#1 </span>{" "}
          {userData?.top_gift_cards[0]?.gift_card?.title ?? "None"}
        </h1>
      </div>
      <div className="z-10 flex items-center relative w-full justify-center max-w-[800px] sm:h-40 h-[330px] gap-10 max-sm:flex-col sm:gap-6">
        <img
          src={"/bg/giftcard-blur.png"}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
          width={500}
          height={500}
        />
        <div className="h-full bg-[#E03A6A80] z-10 flex-1 rounded-[15px] items-center justify-center gap-4 w-full flex flex-col">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
            {" "}
            {formatDollar(userData?.top_gift_cards?.[0]?.usd_total ?? 0)}
          </h1>
          <p>Total giftcard bought</p>
        </div>
        <div className="h-full bg-[#E03A6A80] z-10 flex-1 rounded-[15px] items-center justify-center gap-4 w-full flex flex-col">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
            {formatDollar(userData?.top_gift_cards?.[0]?.usd_total ?? 0)}
          </h1>
          <p>Total giftcard bought</p>
        </div>
        {/* <img
          src="/giftcard/plate.svg"
          className="sm:w-34 aspect-square w-28 z-10 absolute left-1/2 -translate-x-1/2"
          alt=""
        /> */}
        <img
          src={
            userData?.top_gift_cards?.[0]?.gift_card.image ||
            userData?.top_gift_cards?.[0]?.gift_card.brand_logo ||
            "/giftcard/plate.svg"
          }
          className="sm:w-34 aspect-square w-28 z-10 absolute left-1/2 -translate-x-1/2 overflow-hidden"
          alt=""
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = "/giftcard/plate.svg";
          }}
        />
      </div>
    </ExportWrapper>
  );
};

export default GiftcardExport;
