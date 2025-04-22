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
            transform: perspective(800px) rotateY(0deg);
          }
          100% {
            transform: perspective(800px) rotateY(360deg);
          }
        }

        .animate-spin3d {
          animation: spin3d 5s infinite linear;
        }
      `}</style>
    </div>
  );
}
