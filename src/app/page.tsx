"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampleUserData, UserData } from "@/utils";
import Intro from "./components/stories/intro";
import TotalTrades from "./components/stories/total-trades";
import Volume from "./components/stories/volume";
import Outro from "./components/stories/outro";
import FavoriteAsset from "./components/stories/favorite-asset";
import Streak from "./components/stories/streak";
import Ranking from "./components/stories/ranking";
import Activities from "./components/stories/activities";
import FloatingParticles from "./components/floating-particles";

const SpaceTradeWrapped: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userData] = useState<UserData>(sampleUserData);

  const stories = [
    { id: 1, type: "intro" },
    { id: 2, type: "total-trades" },
    { id: 3, type: "volume" },
    { id: 4, type: "favorite-asset" },
    { id: 5, type: "streak" },
    { id: 6, type: "ranking" },
    { id: 7, type: "activities" },
    { id: 8, type: "outro" },
  ];

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
        return prev + 1.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentStory, isPaused, stories.length]);

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

    switch (story.type) {
      case "intro":
        return <Intro userData={userData} />;

      case "total-trades":
        return <TotalTrades userData={userData} />;

      case "volume":
        return <Volume userData={userData} />;

      case "favorite-asset":
        return <FavoriteAsset userData={userData} />;

      case "streak":
        return <Streak userData={userData} />;

      case "ranking":
        return <Ranking userData={userData} />;

      case "activities":
        return <Activities userData={userData} />;

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

  return (
    <div className="relative w-full h-dvh bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-4">
        {stories.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-gray-700/50 rounded-full overflow-hidden"
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
        <div className="pointer-events-auto">
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

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(199, 145, 1, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(199, 145, 1, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(199, 145, 1, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(199, 145, 1, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        />
      </div>

      <FloatingParticles />
    </div>
  );
};

export default SpaceTradeWrapped;
