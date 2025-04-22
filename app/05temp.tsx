"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="perspective-800">
        <div className="cube animate-spin3d">
          <div className="face">
            <h1 className="text-6xl font-bold text-blue-700">
              Hello World!!!!
            </h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 3D perspective for the cube */
        .perspective-800 {
          perspective: 800px;
        }

        /* Rotation animation for the cube */
        @keyframes spin3d {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* 3D rotation setup for the cube */
        .cube {
          position: relative;
          width: 200px;
          height: 100px;
          transform-style: preserve-3d;
          animation: spin3d 5s infinite linear;
        }

        /* Basic styling for the faces of the cube */
        .face {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          // backface-visibility: hidden; /* Hide the backface when it's not visible */
        }
      `}</style>
    </div>
  );
}
