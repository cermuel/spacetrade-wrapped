import React, { useState } from "react";
import { RxDownload } from "react-icons/rx";
import { PiShareNetworkFill } from "react-icons/pi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiLink2, FiMessageCircle } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface ShareOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  action: () => void;
  color: string;
}

interface ShareDownloadProps {
  download: () => Promise<string | null>;
  downloadLoading?: boolean;
  shareUrl: string;
  shareTitle?: string;
  shareText?: string;
  onModalChange?: (isOpen: boolean) => void;
  downloadAll?: () => Promise<void>;
  downloadAllLoading?: boolean;
}

const ShareDownload: React.FC<ShareDownloadProps> = ({
  download,
  downloadLoading,
  shareUrl,
  shareTitle,
  shareText = "Amazing content from SpaceTrade",
  onModalChange,
  downloadAll,
  downloadAllLoading,
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleModalChange = (isOpen: boolean) => {
    onModalChange?.(isOpen);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`${shareText} ${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleTelegramShare = () => {
    const text = encodeURIComponent(shareText);
    const url = encodeURIComponent(shareUrl);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank");
  };

  const handleTwitterShare = () => {
    const text = encodeURIComponent(shareText);
    const url = encodeURIComponent(shareUrl);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const handleNativeShare = async () => {
    handleModalChange(true);
    setIsShareModalOpen(true);
  };

  const shareOptions: ShareOption[] = [
    {
      id: "copy",
      name: copySuccess ? "Copied!" : "Copy Link",
      icon: <FiLink2 size={20} />,
      action: handleCopyLink,
      color: copySuccess ? "bg-green-500" : "bg-gray-700",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <FiMessageCircle size={20} />,
      action: handleWhatsAppShare,
      color: "bg-green-500",
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: <BsTelegram size={20} />,
      action: handleTelegramShare,
      color: "bg-blue-500",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      action: handleTwitterShare,
      color: "bg-sky-500",
    },
  ];

  return (
    <>
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
            className="ml-auto border border-[#212121] bg-[#171717] rounded-sm w-10 aspect-square flex items-center justify-center cursor-pointer disabled:cursor-not-allowed hover:bg-[#252525] transition-colors"
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
          <button
            onClick={handleNativeShare}
            className="border border-[#212121] bg-[#171717] rounded-sm w-10 aspect-square flex items-center justify-center cursor-pointer hover:bg-[#252525] transition-colors"
          >
            <PiShareNetworkFill color="white" size={18} />
          </button>
        </div>
      </div>

      {isShareModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-end sm:items-center justify-center"
          onClick={() => {
            handleModalChange(false);
            setIsShareModalOpen(false);
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-[#1a1a1a] rounded-t-3xl sm:rounded-2xl w-full sm:w-[480px] max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#2a2a2a]">
              <h3 className="text-white font-semibold text-lg">Share</h3>
              <button
                onClick={() => {
                  handleModalChange(false);
                  setIsShareModalOpen(false);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2a2a2a] transition-colors"
              >
                <IoClose size={20} color="white" />
              </button>
            </div>

            {/* Download All Button */}
            {downloadAll && (
              <div className="p-4 border-b border-[#2a2a2a]">
                <button
                  onClick={async () => {
                    await downloadAll();
                    handleModalChange(false);
                    setIsShareModalOpen(false);
                  }}
                  disabled={downloadAllLoading}
                  className="w-full bg-[#C79101] hover:bg-[#d49f01] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {downloadAllLoading ? (
                    <>
                      <AiOutlineLoading3Quarters
                        size={20}
                        className="animate-spin"
                      />
                      <span>Downloading All Stories...</span>
                    </>
                  ) : (
                    <>
                      <RxDownload size={20} />
                      <span>Download All Stories</span>
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="p-6">
              <div className="grid grid-cols-4 gap-6">
                {shareOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      option.action();
                      if (option.id !== "copy") {
                        handleModalChange(false);
                        setIsShareModalOpen(false);
                      }
                    }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`${option.color} w-14 h-14 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                    >
                      {option.icon}
                    </div>
                    <span className="text-white text-xs text-center">
                      {option.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:hidden p-4 border-t border-[#2a2a2a]">
              <button
                onClick={() => {
                  handleModalChange(false);
                  setIsShareModalOpen(false);
                }}
                className="w-full py-3 text-white font-medium hover:bg-[#2a2a2a] rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareDownload;
