"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="perspective-800">
        <div className="cube animate-spin3d">
          <h1 className="front text-6xl font-bold text-blue-700">
            Hello World!!!!
          </h1>
          {/* <h1 className="back text-6xl font-bold text-red-700">
            Hello World!!!!
          </h1> */}
        </div>
      </div>

      <style jsx>{`
        /* 3D回転のための視点設定 */
        .perspective-800 {
          perspective: 800px;
        }

        /* 回転アニメーションの設定 */
        @keyframes spin3d {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* 立体的な回転のための設定 */
        .cube {
          position: relative;
          transform-style: preserve-3d;
          animation: spin3d 5s infinite linear;
        }

        /* 表面のスタイル */
        .front {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          // backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* 裏面のスタイル */
        .back {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          // backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotateY(180deg); /* 裏面の回転 */
        }

        /* アニメーションで回転 */
        .cube {
          width: 200px;
          height: 100px;
        }
      `}</style>
    </div>
  );
}
