"use client";
import React, { useState, useEffect } from "react";

export const WrappedLoading = ({ username }: { username: string }) => {
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Crunching the numbers",
    "Analyzing your trades",
    "Finding your top assets",
    "Calculating total volume",
    "Finalizing your 2025 vibe",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 2500); // Change text every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

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

        <div className="space-y-2">
          <h1 className="font-medium sm:text-2xl text-lg animate-pulse">
            Generating your 2025 Wrapped...
          </h1>
          <p className="sm:text-sm text-xs text-[#BBBEC5]">
            Hang tight, <strong>{username}</strong>. We&apos;re gathering your
            top moments on SpaceTraade.
          </p>
        </div>

        <div className="w-full bg-[#0E0E0E] border border-[#212121] h-2 rounded-full overflow-hidden">
          <div className="h-full bg-[#C79101] animate-[loading_2s_ease-in-out_infinite] w-[50%] opacity-80 rounded-full" />
        </div>

        <p
          key={statusIndex}
          className="text-[10px] uppercase tracking-[0.2em] text-[#C79101] font-bold animate-[fadeIn_0.5s_ease-in-out]"
        >
          {statuses[statusIndex]}
        </p>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
