import Image from "next/image";
import React from "react";

const ExportHeader = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <img src={"/images/logo-full.svg"} alt="" width={150} height={42} />
      <h1 className="text-3xl font-medium">X</h1>
      <img
        src={"/images/user.png"}
        alt=""
        width={40}
        height={40}
        className="border border-white rounded-full w-10 h-10"
      />
      <h2 className="font-bold text-2xl">@Tolulpe</h2>
    </div>
  );
};

export default ExportHeader;
