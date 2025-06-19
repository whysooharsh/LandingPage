import { useState } from "react";

function App() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between items-center brightness-75 text-amber-50"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dlvjrvhak/image/upload/v1750340004/assets_task_01jy45ynsef6tvhxkvkm3mchdq_1750339781_img_1_sbouyy.webp')`,
      }}
    >
     
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="fadeGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          <linearGradient
            id="fadeGradient2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="25%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="75%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="36"
          r="42"
          stroke="url(#fadeGradient1)"
          strokeWidth="0.1"
          fill="none"
        />

        <circle
          cx="50"
          cy="36"
          r="64"
          stroke="url(#fadeGradient2)"
          strokeWidth="0.1"
          fill="none"
        />
      </svg>

      {/* Header Navigation */}
      <div className="z-10 w-full flex justify-center p-6">
        <div className="text-amber-50 flex items-center text-sm gap-20 justify-center p-4">
          <div className="flex gap-8">
            <div className="cursor-pointer hover:text-white transition-colors">Labs</div>
            <div className="cursor-pointer hover:text-white transition-colors">Sessions</div>
            <div className="cursor-pointer hover:text-white transition-colors">Resources</div>
            <div className="cursor-pointer hover:text-white transition-colors">Community</div>
          </div>
          <button className="px-4 py-2 rounded-full backdrop-blur-md bg-gray-900/40 text-white hover:bg-gray-900/60 transition-colors">
            Join Today
          </button>
        </div>
      </div>

     
      <div className="z-10 pb-16 flex flex-col items-center gap-4 text-center">
        <h1 className="text-7xl font-light">
          Beyond the prompt
        </h1>
        <p className="text-neutral-700   text-xl max-w-xl leading-relaxed">
          This is for builders, researchers, and artists shaping how LLMs 
          meet real life—with care, context, and creativity.
        </p>
        <button className="mt-4 px-6 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors">
          Join the Community 
        </button>
      </div>
    </div>
  );
}

export default App;