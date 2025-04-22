"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const fullText = "ほんまそれな！！！！";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => [...prev, fullText[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // 各文字の表示間隔（ミリ秒）

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-blue-700">
        {displayText.map((char, index) => (
          <span
            key={index}
            className="inline-block animate-fadeIn" // アニメーション用のクラス
            style={{ animationDelay: `${index * 0.1}s` }} // 各文字のアニメーション遅延
          >
            {char}
          </span>
        ))}
      </h1>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
