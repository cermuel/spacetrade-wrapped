"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserData } from "@/utils";
import Intro from "../../components/stories/intro";
import TotalTrades from "../../components/stories/total-trades";
import Outro from "../../components/stories/outro";
import FloatingParticles from "../../components/floating-particles";
import BestMonth from "../../components/stories/best-month";
import CryptoJourney from "../../components/stories/crypto-journey";
import GiftcardMoves from "../../components/stories/giftcards";
import { GoUnmute, GoMute } from "react-icons/go";
import Transactions from "../../components/stories/transactions";
import Electricity from "../../components/stories/electricity";
import Impact from "../../components/stories/impact";
import Rank from "../../components/stories/rank";
import ShareDownload from "../../components/share-download";
//@ts-expect-error: module not found
import { useToImage } from "@hcorta/react-to-image";
import TotalTradesExport from "../../components/export/stories/total-trades";
import BestMonthExport from "../../components/export/stories/best-month";
import GiftcardExport from "../../components/export/stories/giftcard";
import CryptoExport from "../../components/export/stories/crypto-journeey";
import UtilityExport from "../../components/export/stories/utility";
import ImpactExport from "../../components/export/stories/impact";
import RankExport from "../../components/export/stories/rank";
import TransactionsExport from "../../components/export/stories/transactions";
import { useWrappedData } from "../hooks/useWrapped";
import { usePathname, useRouter } from "next/navigation";
import { WrappedLoading } from "../../components/loading-screen";
import { NoStats } from "@/components/no-stats";

const SpaceTradeWrapped: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    data: userData,
    error,
    isLoading: loadingData,
  } = useWrappedData(pathname.slice(1));

  useEffect(() => {
    if (error) router.replace("/");
  }, [error, router]);

  const [mainLoading, setMainLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainLoading(loadingData);
    }, 2000);
    return () => clearTimeout(timer);
  }, [loadingData]);

  if (mainLoading || !userData) {
    return <WrappedLoading username={pathname.slice(1)} />;
  }
  if (userData.message) {
    return <NoStats username={pathname.slice(1)} />;
  }

  return <MainWrapped userData={userData} />;
};

export default SpaceTradeWrapped;

const MainWrapped = ({ userData }: { userData: UserData }) => {
  const options = useMemo(
    () => ({
      width: 1080,
      height: 1080,
      pixelRatio: 4,
      backgroundColor: "#000",
    }),
    []
  );

  // Only create hooks for exports that will be downloaded
  const { ref, isLoading, getPng } = useToImage(options);
  const {
    ref: gcRef,
    isLoading: gcLoading,
    getPng: gcGetPng,
  } = useToImage(options);
  const {
    ref: cryptoRef,
    isLoading: cryptoLoading,
    getPng: cryptoGetPng,
  } = useToImage(options);
  const {
    ref: monthRef,
    isLoading: monthLoading,
    getPng: monthGetPng,
  } = useToImage(options);
  const {
    ref: utilityRef,
    isLoading: utilityLoading,
    getPng: utilityGetPng,
  } = useToImage(options);
  const {
    ref: impactRef,
    isLoading: impactLoading,
    getPng: impactGetPng,
  } = useToImage(options);
  const {
    ref: transactionsRef,
    isLoading: transactionsLoading,
    getPng: transactionsGetPng,
  } = useToImage(options);
  const {
    ref: rankRef,
    isLoading: rankLoading,
    getPng: rankGetPng,
  } = useToImage(options);

  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  // Track which exports have been rendered (lazy load them)
  const [renderedExports, setRenderedExports] = useState<Set<string>>(
    new Set()
  );

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const loading =
    isLoading ||
    gcLoading ||
    cryptoLoading ||
    monthLoading ||
    utilityLoading ||
    rankLoading ||
    transactionsLoading ||
    impactLoading;

  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  const handleDownloadAll = async () => {
    const confirmed = window.confirm("This will download 8 images. Continue?");
    if (!confirmed) return;

    setIsDownloadingAll(true);

    // Render all exports first
    setRenderedExports(
      new Set([
        "total-trades",
        "best-month",
        "crypto-journey",
        "giftcard-moves",
        "utility",
        "impact",
        "transactions",
        "rank",
      ])
    );

    // Wait for all exports to render
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const downloads = [
      { name: "total-trades", fn: getPng },
      { name: "best-month", fn: monthGetPng },
      { name: "crypto-journey", fn: cryptoGetPng },
      { name: "giftcard-moves", fn: gcGetPng },
      { name: "utility", fn: utilityGetPng },
      { name: "impact", fn: impactGetPng },
      { name: "transactions", fn: transactionsGetPng },
      { name: "rank", fn: rankGetPng },
    ];

    for (const { name, fn } of downloads) {
      try {
        const dataUrl = await fn();
        if (dataUrl) {
          const link = document.createElement("a");
          link.download = `spacetrade-wrapped-${name}.png`;
          link.href = dataUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      } catch (error) {
        console.error(`Failed to download ${name}:`, error);
      }
    }

    setIsDownloadingAll(false);
  };

  // Lazy render export based on current story
  const ensureExportRendered = (exportType: string) => {
    if (!renderedExports.has(exportType)) {
      setRenderedExports((prev) => new Set(prev).add(exportType));
    }
  };

  const handleDownload = async (type: string, fn: () => Promise<string>) => {
    ensureExportRendered(type);
    // Wait a bit for the export to render
    await new Promise((resolve) => setTimeout(resolve, 300));
    return fn();
  };

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const handleUnmute = async () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
    try {
      await audioRef.current.play();
    } catch {}
  };

  const stories = useMemo(
    () => [
      { id: 1, type: "intro" },
      { id: 2, type: "total-trades" },
      { id: 3, type: "best-month" },
      { id: 4, type: "crypto-journey" },
      { id: 5, type: "giftcard-moves" },
      { id: 6, type: "transactions" },
      { id: 7, type: "utility" },
      { id: 8, type: "impact" },
      { id: 9, type: "rank" },
      { id: 10, type: "outro" },
    ],
    []
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentStory < stories.length - 1) {
            setCurrentStory(currentStory + 1);
            return 0;
          }
          return 100;
        }
        return prev + 1;
      });
    }, 70);
    return () => clearInterval(interval);
  }, [currentStory, isPaused, stories.length]);

  useEffect(() => {
    setIsPaused(loading);
  }, [loading]);

  const goToNext = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
      setProgress(0);
    }
  };

  const goToPrev = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
      setProgress(0);
    }
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    if (x < width / 2) {
      goToPrev();
    } else {
      goToNext();
    }
  };

  const renderStory = () => {
    const story = stories[currentStory];
    if (!userData) return null;

    switch (story.type) {
      case "intro":
        return <Intro userData={userData} />;
      case "total-trades":
        return <TotalTrades userData={userData} />;
      case "best-month":
        return <BestMonth userData={userData} />;
      case "crypto-journey":
        return <CryptoJourney userData={userData} />;
      case "giftcard-moves":
        return <GiftcardMoves userData={userData} />;
      case "transactions":
        return <Transactions userData={userData} />;
      case "utility":
        return <Electricity userData={userData} />;
      case "impact":
        return <Impact userData={userData} />;
      case "rank":
        return <Rank userData={userData} />;
      case "outro":
        return (
          <Outro
            userData={userData}
            handleReplay={() => {
              setCurrentStory(0);
              setProgress(0);
            }}
          />
        );
      default:
        return null;
    }
  };

  const getCurrentDownloadFn = () => {
    const storyType = stories[currentStory].type;

    const downloadMap: Record<string, () => Promise<string>> = {
      "giftcard-moves": () => handleDownload("giftcard-moves", gcGetPng),
      "crypto-journey": () => handleDownload("crypto-journey", cryptoGetPng),
      "best-month": () => handleDownload("best-month", monthGetPng),
      utility: () => handleDownload("utility", utilityGetPng),
      impact: () => handleDownload("impact", impactGetPng),
      transactions: () => handleDownload("transactions", transactionsGetPng),
      rank: () => handleDownload("rank", rankGetPng),
      "total-trades": () => handleDownload("total-trades", getPng),
    };

    return (
      downloadMap[storyType] || (() => handleDownload("total-trades", getPng))
    );
  };

  return (
    <div className="relative w-full h-dvh bg-black overflow-hidden">
      <audio src="/audio/bg.wav" loop ref={audioRef} muted />
      <button
        onClick={handleUnmute}
        className="absolute z-20 bottom-8 right-8 border border-[#212121] bg-[#171717] rounded-full w-10 aspect-square flex items-center justify-center cursor-pointer"
      >
        {muted ? <GoMute /> : <GoUnmute />}
      </button>

      <div className="absolute top-1 lg:top-2 -translate-x-1/2 left-1/2 right-0 z-20 flex gap-1.5 sm:gap-3 p-4 w-full max-w-300">
        {stories.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1.5 sm:h-2.5 bg-[#543D00] rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-[#C79101]"
              initial={{ width: "0%" }}
              animate={{
                width:
                  index < currentStory
                    ? "100%"
                    : index === currentStory
                    ? `${progress}%`
                    : "0%",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full h-full pt-7.5 sm:pt-8.5">
          {stories[currentStory].type !== "intro" &&
            stories[currentStory].type !== "outro" && (
              <ShareDownload
                download={getCurrentDownloadFn()}
                downloadLoading={loading}
                shareUrl={`${window.location.origin}${window.location.pathname}`}
                shareTitle="My SpaceTrade 2025 Wrapped"
                shareText="Check out my SpaceTrade 2025 Wrapped! 🚀"
                onModalChange={(isOpen) => setIsPaused(isOpen)}
                downloadAll={handleDownloadAll}
                downloadAllLoading={isDownloadingAll}
                userData={userData}
              />
            )}
          <AnimatePresence mode="wait">{renderStory()}</AnimatePresence>
        </div>
      </div>

      {currentStory < stories.length - 1 && (
        <div className="absolute inset-0 z-10 flex">
          <div
            className="flex-1 cursor-pointer"
            onClick={handleTap}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          />
        </div>
      )}

      {/* Only render exports that have been requested */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.001,
          zIndex: -100,
          pointerEvents: "none",
        }}
      >
        {userData && (
          <>
            {renderedExports.has("total-trades") && (
              <TotalTradesExport userData={userData} ref={ref} />
            )}
            {renderedExports.has("best-month") && (
              <BestMonthExport userData={userData} ref={monthRef} />
            )}
            {renderedExports.has("crypto-journey") && (
              <CryptoExport userData={userData} ref={cryptoRef} />
            )}
            {renderedExports.has("giftcard-moves") && (
              <GiftcardExport userData={userData} ref={gcRef} />
            )}
            {renderedExports.has("utility") && (
              <UtilityExport ref={utilityRef} userData={userData} />
            )}
            {renderedExports.has("impact") && (
              <ImpactExport userData={userData} ref={impactRef} />
            )}
            {renderedExports.has("rank") && (
              <RankExport userData={userData} ref={rankRef} />
            )}
            {renderedExports.has("transactions") && (
              <TransactionsExport userData={userData} ref={transactionsRef} />
            )}
          </>
        )}
      </div>

      <FloatingParticles />
    </div>
  );
};
