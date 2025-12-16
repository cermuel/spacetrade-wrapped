import { formatNaira } from "@/utils/helpers";
import React from "react";

interface DonutChartProps {
  totalWithdrawal: number;
  totalTransfer: number;
  className?: string;
  isExport?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  totalWithdrawal,
  totalTransfer,
  className = "w-[600px] h-[600px]",
  isExport = false,
}) => {
  const total = totalWithdrawal + totalTransfer;
  const withdrawalPercentage = (totalWithdrawal / total) * 100;
  const transferPercentage = (totalTransfer / total) * 100;

  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const withdrawalLength = (withdrawalPercentage / 100) * circumference;
  const transferLength = (transferPercentage / 100) * circumference;

  const innerRadius = 70;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerWithdrawalLength =
    (withdrawalPercentage / 100) * innerCircumference;
  const innerTransferLength = (transferPercentage / 100) * innerCircumference;

  return (
    <div className=" w-max h-max flex items-center justify-center relative">
      {isExport ? (
        <>
          <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="font-medium text-base">Total Amount</p>
            <h1 className="text-[#C79101] font-bold text-5xl">
              {formatNaira(total)}
            </h1>
          </div>

          <img
            src="/icons/line-orange-desktop.svg"
            className="absolute top-0 -left-20"
            alt=""
          />
          <img
            src="/icons/line-green-desktop.svg"
            className="absolute top-0 -right-20"
            alt=""
          />

          <div className="p-2.5 bg-[#C79101] absolute -top-8.5 -left-52 rounded-[14px] w-40 flex flex-col items-center justify-center">
            <p className="font-medium">Total Withdrawal</p>
            <p className="font-bold text-2xl">{formatNaira(totalWithdrawal)}</p>
          </div>

          <div className="p-2.5 bg-[#22C55E] absolute -top-8.5 -right-52 rounded-[14px] w-40 flex flex-col items-center justify-center">
            <p className="font-medium">Total Transfers</p>
            <p className="font-bold text-2xl">{formatNaira(totalTransfer)}</p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute flex flex-col items-center justify-center text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="font-medium md:text-base sm:text-sm text-xs">
              Total Amount
            </p>
            <h1 className="text-[#C79101] font-bold md:text-5xl sm:text-3xl text-lg">
              {formatNaira(total)}
            </h1>
          </div>
          <img
            src="/icons/line-orange-desktop.svg"
            className="max-md:hidden absolute top-0 -left-20"
            alt=""
          />
          <img
            src="/icons/line-green-desktop.svg"
            className="max-md:hidden absolute top-0 -right-20"
            alt=""
          />
          <div className="max-md:hidden p-2.5 bg-[#C79101] absolute -top-8.5 -left-52 rounded-[14px] w-40 flex flex-col items-center justify-center">
            <p className="font-medium">Total Withdrawal</p>
            <p className="font-bold text-2xl">{formatNaira(totalWithdrawal)}</p>
          </div>
          <div className="max-md:hidden p-2.5 bg-[#22C55E] absolute -top-8.5 -right-52 rounded-[14px] w-40 flex flex-col items-center justify-center">
            <p className="font-medium">Total Transfers</p>
            <p className="font-bold text-2xl">{formatNaira(totalTransfer)}</p>
          </div>
          <img
            src="/icons/line-orange-desktop.svg"
            className="md:hidden max-sm:hidden absolute -top-6 -left-10"
            alt=""
          />
          <img
            src="/icons/line-green-desktop.svg"
            className="md:hidden max-sm:hidden absolute -top-6 -right-10"
            alt=""
          />
          <div className="md:hidden max-sm:hidden p-1.5 bg-[#C79101] absolute -top-13 -left-32 rounded-[14px] w-28 flex flex-col items-center justify-center">
            <p className="font-medium text-xs">Total Withdrawal</p>
            <p className="font-bold text-lg">{formatNaira(totalWithdrawal)}</p>
          </div>
          <div className="md:hidden max-sm:hidden p-1.5 bg-[#22C55E] absolute -top-13 -right-32 rounded-[14px] w-28 flex flex-col items-center justify-center">
            <p className="font-medium text-xs">Total Transfers</p>
            <p className="font-bold text-lg">{formatNaira(totalTransfer)}</p>
          </div>
          <img
            src="/icons/line-orange-desktop.svg"
            className="sm:hidden absolute -top-12 -left-6"
            alt=""
          />
          <img
            src="/icons/line-green-desktop.svg"
            className="sm:hidden absolute -top-12 -right-6"
            alt=""
          />
          <div className="sm:hidden p-1 bg-[#C79101] absolute -top-18 -left-20 rounded-sm w-[110px] flex flex-col items-center justify-center">
            <p className="font-medium text-[10px] text-center">
              Total Withdrawal
            </p>
            <p className="font-semibold">{formatNaira(totalWithdrawal)}</p>
          </div>
          <div className="sm:hidden p-1 bg-[#22C55E] absolute -top-18 -right-20 rounded-sm w-[110px] flex flex-col items-center justify-center">
            <p className="font-medium text-[10px] text-center">
              Total Transfers
            </p>
            <p className="font-semibold">{formatNaira(totalTransfer)}</p>
          </div>
        </>
      )}
      <svg
        viewBox="0 0 200 200"
        className={`transform -rotate-90 ${className}`}
      >
        <defs>
          <linearGradient
            id="withdrawalGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#C79101" />
            <stop offset="100%" stopColor="#7D5B00" />
          </linearGradient>
          <linearGradient
            id="transferGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#transferGradient)"
          strokeWidth="30"
          strokeDasharray={`${transferLength} ${circumference}`}
          strokeLinecap="butt"
          className="transition-all duration-700 ease-in-out"
        />

        {/* OUTER LAYER - Withdrawal segment */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#withdrawalGradient)"
          strokeWidth="30"
          strokeDasharray={`${withdrawalLength} ${circumference}`}
          strokeDashoffset={-transferLength}
          strokeLinecap="butt"
          className="transition-all duration-700 ease-in-out"
        />

        {/* INNER LAYER - Transfer segment (same colors, lower opacity, thinner) */}
        <circle
          cx="100"
          cy="100"
          r={innerRadius}
          fill="none"
          stroke="url(#transferGradient)"
          strokeWidth="18"
          strokeDasharray={`${innerTransferLength} ${innerCircumference}`}
          strokeLinecap="butt"
          opacity="0.5"
          className="transition-all duration-700 ease-in-out"
        />

        <circle
          cx="100"
          cy="100"
          r={innerRadius}
          fill="none"
          stroke="url(#withdrawalGradient)"
          strokeWidth="18"
          strokeDasharray={`${innerWithdrawalLength} ${innerCircumference}`}
          strokeDashoffset={-innerTransferLength}
          strokeLinecap="butt"
          opacity="0.5"
          className="transition-all duration-700 ease-in-out"
        />
      </svg>
    </div>
  );
};

export default DonutChart;
