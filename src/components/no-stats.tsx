"use client";
import React from "react";

export const NoStats = ({ username }: { username: string }) => {
  return (
    <div
      className="w-full h-dvh bg-[#0000008C] flex items-center justify-center p-8"
      style={{
        backdropFilter: "blur(20px)",
        backgroundImage: "url('/bg/intro-desktop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#171717] w-full max-w-145 border border-[#212121] rounded-[20px] p-7.5 sm:p-10 relative flex flex-col items-center justify-center text-center gap-6">
        <img src={"/images/logo-full.svg"} alt="Logo" width={180} height={45} />

        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-[#C79101] bg-opacity-10 rounded-full flex items-center justify-center">
            <span className="text-5xl">📊</span>
          </div>

          <h1 className="font-medium sm:text-2xl text-lg text-white">
            No Trading Activity Yet
          </h1>

          <p className="sm:text-base text-sm text-[#BBBEC5] max-w-lg mx-auto leading-relaxed">
            You have not made any trade with us yet. We are looking forward to
            more wins in 2026; We are rooting for you 🚀
          </p>
        </div>
      </div>
    </div>
  );
};
