import React from "react";
import Image from "next/image";
import { RxDownload } from "react-icons/rx";
import { PiShareNetworkFill } from "react-icons/pi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ShareDownload = ({
  download,
  downloadLoading,
}: {
  download: () => Promise<string | null>;
  downloadLoading?: boolean;
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-0 left-0 w-full flex justify-center pt-2 sm:pt-4 z-50 sm:mt-5 mt-4 md:mt-6"
    >
      <div className="w-full max-w-[1200px] p-4 flex items-center gap-2.5">
        <Image
          src={"/images/logo-full.svg"}
          alt=""
          width={150}
          height={42}
          className="max-sm:scale-90"
        />
        <button
          onClick={download}
          disabled={downloadLoading}
          className="ml-auto border border-[#212121] bg-[#171717] rounded-sm w-10 aspect-square flex items-center justify-center cursor-pointer disabled:cursor-not-allowed!"
        >
          {downloadLoading ? (
            <AiOutlineLoading3Quarters
              color="white"
              size={18}
              className="animate-spin"
            />
          ) : (
            <RxDownload color="white" size={18} />
          )}
        </button>
        <button className="border border-[#212121] bg-[#171717] rounded-sm w-10 aspect-square flex items-center justify-center cursor-pointer disabled:cursor-not-allowed!">
          <PiShareNetworkFill color="white" size={18} />
        </button>
      </div>
    </div>
  );
};

export default ShareDownload;
