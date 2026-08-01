"use client";

import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black font-mono text-zinc-100 p-3 sm:p-6 md:p-10 relative select-none overflow-hidden">
      {/* Arcade Scanline Effect Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-20"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)`,
          backgroundSize: '100% 4px'
        }}
      />

      {/* Spidey Red/Blue Subtle Glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-red-600/20 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      {/* Main Game Interface Container */}
      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center border-2 sm:border-4 border-red-600 bg-zinc-950 p-4 sm:p-8 md:p-10 shadow-[0_0_20px_rgba(220,38,38,0.3)] sm:shadow-[0_0_35px_rgba(220,38,38,0.4)]">
        
        {/* HUD Top Bar */}
        <div className="flex w-full items-center justify-between border-b border-dashed border-red-600/40 pb-3 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest text-zinc-400">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-red-500 font-bold animate-pulse">●</span>
            <span>P1: YOU</span>
          </div>
          <div className="text-yellow-400 font-bold px-1 text-center">
            CO-OP QUEST
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span>P2: NICOLE</span>
          </div>
        </div>

        {!accepted ? (
          <>
            {/* Quest Header */}
            <div className="text-center space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 w-full">
              <span className="inline-block bg-red-600 text-black px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-black tracking-wider sm:tracking-widest uppercase">
                [ MAIN QUEST UNLOCKED ]
              </span>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-red-500 uppercase tracking-tight mt-1.5 sm:mt-2 leading-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                SPIDER-MAN: BRAND NEW DAY
              </h1>
            </div>

            {/* Mission Stats Box */}
            <div className="w-full bg-zinc-900 border sm:border-2 border-blue-600/60 p-3.5 sm:p-5 rounded-none mb-4 sm:mb-6 text-left space-y-2.5 sm:space-y-3">
              <div className="flex flex-row justify-between items-center text-[10px] sm:text-xs text-blue-400 font-bold border-b border-zinc-800 pb-2">
                <span>MISSION PARAMETERS</span>
                <span className="bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-800/40 text-[9px] sm:text-[10px]">MOVIE NIGHT</span>
              </div>
              
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="text-red-400 font-bold">&gt;</span> OBJECTIVE: Escort Player 2 (Nicole) to the theater, secure popcorn & snacks, watch Spidey defeat the bad guys.
              </p>

              {/* Schedule Info Box */}
              <div className="bg-zinc-950/80 border border-red-500/30 p-2.5 rounded text-[11px] sm:text-xs space-y-1 my-1">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-red-500 font-bold">📍 LOCATION:</span>
                  <span className="text-white font-semibold">SM Sto. Tomas</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-red-500 font-bold">⏰ TIME:</span>
                  <span className="text-white font-semibold">Tomorrow @ 1:45 PM</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-400 pt-1">
                <span>REWARD:</span>
                <span className="text-yellow-400 font-bold">+1000 FUN POINTS / GREAT MEMORIES</span>
              </div>
            </div>

            {/* Action Prompt */}
            <p className="text-xs sm:text-base text-zinc-300 mb-5 sm:mb-8 text-center animate-bounce font-bold tracking-wide">
              ACCEPT THIS MISSION, NICOLE?
            </p>

            {/* Game Options / Select Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              <button
                onClick={() => setAccepted(true)}
                className="group relative flex min-h-[48px] sm:min-h-[56px] w-full items-center justify-between border-2 border-red-500 bg-red-950/40 px-4 sm:px-6 font-bold text-red-400 text-xs sm:text-sm md:text-base transition-all duration-150 hover:bg-red-600 hover:text-white active:translate-y-0.5"
              >
                <span className="flex items-center gap-2 sm:gap-3 text-left">
                  <span className="inline-block w-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  <span>[ A ] PRESS START / YES 🕷️</span>
                </span>
                <span className="text-[10px] sm:text-xs text-red-400 group-hover:text-white shrink-0 ml-2">READY</span>
              </button>

              <button
                onClick={() => setAccepted(true)}
                className="group relative flex min-h-[48px] sm:min-h-[56px] w-full items-center justify-between border-2 border-blue-500 bg-blue-950/40 px-4 sm:px-6 font-bold text-blue-400 text-xs sm:text-sm md:text-base transition-all duration-150 hover:bg-blue-600 hover:text-white active:translate-y-0.5"
              >
                <span className="flex items-center gap-2 sm:gap-3 text-left">
                  <span className="inline-block w-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  <span>[ B ] HELL YES 🍿</span>
                </span>
                <span className="text-[10px] sm:text-xs text-blue-400 group-hover:text-white shrink-0 ml-2">LOCKED IN</span>
              </button>
            </div>
          </>
        ) : (
          /* Game Start / Success Screen */
          <div className="flex flex-col items-center text-center py-4 sm:py-8 space-y-3 sm:space-y-4 w-full">
            <div className="text-[10px] sm:text-xs text-yellow-400 tracking-wider sm:tracking-widest uppercase bg-yellow-950/60 border border-yellow-500/50 px-2.5 py-1">
              *** MISSION ACCEPTED ***
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-red-500 uppercase tracking-wider">
              STAGE 1 START!
            </h2>
            
            <div className="text-xs sm:text-base text-zinc-300 max-w-md border-t border-b border-zinc-800 py-4 my-1 sm:my-2 space-y-2 w-full">
              <p>Player 2 has joined the party!</p>
              <div className="text-yellow-400 font-bold bg-zinc-900 border border-yellow-500/30 p-3 rounded text-left text-xs sm:text-sm">
                <p>📍 Location: SM Sto. Tomas Cinema</p>
                <p>🕒 Time: Tomorrow @ 1:45 PM</p>
              </div>
              <p className="text-zinc-400 text-xs pt-1">I&apos;ll pick up the tickets. See you there! 🍿🎟️</p>
            </div>

            <div className="text-[10px] sm:text-xs text-zinc-500 tracking-widest animate-pulse pt-2">
              [ SEE YOU AT THE MOVIES ]
            </div>
          </div>
        )}

        {/* HUD Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 w-full border-t border-zinc-800 flex justify-between items-center text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider sm:tracking-widest">
          <span>COIN: 99</span>
          <span>STATUS: ONLINE</span>
        </div>
      </main>
    </div>
  );
}
