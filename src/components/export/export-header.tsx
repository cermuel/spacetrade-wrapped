import { UserData } from "@/utils";
import { getDiceBearAvatar } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const ExportHeader = ({ userData }: { userData: UserData }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <img src={"/images/logo-full.svg"} alt="" width={150} height={42} />
      <h1 className="text-3xl font-medium">X</h1>
      <img
        src={
          userData.user.photo ||
          getDiceBearAvatar(userData.user.username || "", "any")
        }
        alt=""
        width={40}
        height={40}
        className="border border-white rounded-full w-10 h-10 object-cover"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = getDiceBearAvatar(userData.user.username || "", "any");
        }}
      />
      <h2 className="font-bold text-2xl">@{userData.user.username}</h2>
    </div>
  );
};

export default ExportHeader;
