"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-blue-700 animate-spin3d">
        Hello World!!!!
      </h1>

      <style jsx>{`
        @keyframes spin3d {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .animate-spin3d {
          animation: spin3d 5s infinite linear;
        }
      `}</style>
    </div>
  );
}
