"use client";
import React, { useEffect, useState } from "react";
import { useWrappedData } from "./hooks/useWrapped";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useToast } from "./hooks/useToast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const { data, isLoading, isError, error } = useWrappedData(submittedUsername);
  const { addToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (isError && error) addToast("Error getting user!", "error");
  }, [error, isError]);

  useEffect(() => {
    if (data) router.push(`/${submittedUsername}`);
  }, [data]);

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
      <div className="bg-[#171717] w-full max-w-145 border border-[#212121] rounded-[20px] p-7.5 sm:p-10 relative flex flex-col items-center justify-center text-center gap-4">
        <div>
          <h1 className="font-medium sm:text-2xl text-lg">
            Enter your Username
          </h1>
          <p className="sm:text-sm text-xs text-[#BBBEC5]">
            Let’s show your 2025 wrapped with SpaceTraade
          </p>
        </div>
        <img src={"/images/logo-full.svg"} alt="" width={200} height={50} />
        <p className="sm:text-2xl text-lg font-medium">X</p>
        <div className="flex flex-col items-center justify-center w-full">
          <label
            htmlFor="username"
            className="font-medium max-sm:text-sm text-[#BBBEC5] text-left w-full"
          >
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            className="bg-[#0E0E0E] border border-[#212121] w-full rounded-[10px] py-3 font-medium px-2.5 outline-none text-sm"
            placeholder="Enter your username here"
          />
        </div>
        <button
          onClick={() => setSubmittedUsername(username)}
          disabled={!username || isLoading}
          className="w-full bg-[#543D00] flex items-center justify-center text-center p-3 font-medium text-[#F0FDF4] rounded-md disabled:opacity-65 disabled:cursor-not-allowed! cursor-pointer"
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters className="animate-spin" size={19} />
          ) : (
            "Get started!"
          )}
        </button>
      </div>
    </div>
  );
};
export default Page;
