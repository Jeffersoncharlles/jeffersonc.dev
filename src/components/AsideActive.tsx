"use client";

import {
  Bug,
  CircleUser,
  Files,
  GitBranch,
  Puzzle,
  Search,
  Settings,
} from "lucide-react";

export function AsideActive() {
  return (
    <div className="w-[56px] h-full bg-black/10 border-r border-white/5 flex flex-col items-center py-6 shrink-0 relative z-20">
      {/* Top Icons */}
      <div className="flex flex-col gap-6 w-full items-center">
        {/* Active Icon (Files) */}
        <div className="relative w-full flex justify-center cursor-pointer group">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[24px] bg-dracula-purple rounded-r-md"></div>
          <Files
            size={24}
            strokeWidth={1.5}
            className="text-foreground/80 group-hover:text-foreground transition-colors"
          />
        </div>

        {/* Inactive Icons */}
        <div className="w-full flex justify-center cursor-pointer group">
          <Search
            size={24}
            strokeWidth={1.5}
            className="text-foreground/40 group-hover:text-foreground/80 transition-colors"
          />
        </div>

        <div className="w-full flex justify-center cursor-pointer group">
          <GitBranch
            size={24}
            strokeWidth={1.5}
            className="text-foreground/40 group-hover:text-foreground/80 transition-colors"
          />
        </div>

        <div className="w-full flex justify-center cursor-pointer group">
          <Bug
            size={24}
            strokeWidth={1.5}
            className="text-foreground/40 group-hover:text-foreground/80 transition-colors"
          />
        </div>

        <div className="w-full flex justify-center cursor-pointer group">
          <Puzzle
            size={24}
            strokeWidth={1.5}
            className="text-foreground/40 group-hover:text-foreground/80 transition-colors"
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-6 w-full items-center">
        <div className="w-full flex justify-center cursor-pointer group">
          <CircleUser
            size={24}
            strokeWidth={1.5}
            className="text-foreground/40 group-hover:text-foreground/80 transition-colors"
          />
        </div>

        <div className="w-full flex justify-center cursor-pointer group">
          <Settings
            size={24}
            strokeWidth={1.5}
            className="text-foreground/40 group-hover:text-foreground/80 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
