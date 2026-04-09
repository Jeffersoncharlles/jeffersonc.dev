"use client";

import {
  Activity,
  AppWindow,
  Award,
  Blocks,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Code,
  Cpu,
  Database,
  Folder as FolderIcon,
  GraduationCap,
  Laptop,
  Link as LinkIcon,
  Network,
  PlayCircle,
  QrCode,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type FolderProps = {
  name: string;
  icon: React.ElementType;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
  iconColor?: string;
  openIconColor?: string;
};

const Folder = ({
  name,
  icon: Icon,
  defaultOpen = true,
  children,
  className = "",
  iconColor = "text-dracula-purple",
  openIconColor = "text-dracula-cyan",
}: FolderProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`flex flex-col mb-0.5 ${className}`}>
      <button
        type="button"
        className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-secondary cursor-pointer select-none rounded-r-full mr-4 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-4 h-4 flex items-center justify-center text-foreground/50 shrink-0 transition-opacity">
          {isOpen ? (
            <ChevronDown size={14} strokeWidth={2.5} />
          ) : (
            <ChevronRight size={14} strokeWidth={2.5} />
          )}
        </div>
        <Icon
          size={16}
          className={`shrink-0 ${isOpen ? openIconColor : iconColor}`}
        />
        <span
          className={`text-[13px] tracking-wide min-w-0 truncate transition-opacity duration-300 ${isOpen ? "font-semibold text-foreground" : "font-normal text-foreground/70"}`}
        >
          {name}
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col ml-7 border-l border-foreground/10 pl-2">
          {children}
        </div>
      )}
    </div>
  );
};

type FileItemProps = {
  name: string;
  icon: React.ElementType;
  iconColor?: string;
};

const FileItem = ({
  name,
  icon: Icon,
  iconColor = "text-dracula-green",
}: FileItemProps) => {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-secondary cursor-pointer select-none rounded-r-full mr-4 mt-0.5 transition-colors">
      <Icon size={14} className={`shrink-0 ${iconColor}`} />
      <span className="text-[13px] text-foreground/70 hover:text-foreground min-w-0 truncate transition-opacity duration-300">
        {name}
      </span>
    </div>
  );
};

type AsideProps = {
  isMobileOpen: boolean;
};

export function Aside({ isMobileOpen }: AsideProps) {

  const srcContents = (
    <>
      <Folder
        name="app"
        icon={AppWindow}
        iconColor="text-dracula-pink"
        openIconColor="text-dracula-pink"
        defaultOpen
      >
        <FileItem name="links" icon={LinkIcon} iconColor="text-dracula-cyan" />
        <FileItem name="social" icon={QrCode} iconColor="text-dracula-green" />
        <FileItem name="status" icon={Activity} iconColor="text-dracula-yellow" />
      </Folder>

      <Folder
        name="core"
        icon={Cpu}
        iconColor="text-dracula-purple"
        openIconColor="text-dracula-purple"
        defaultOpen
      >
        <FileItem name="application" icon={Award} iconColor="text-dracula-orange" />
        <FileItem name="domain" icon={GraduationCap} iconColor="text-dracula-pink" />
      </Folder>

      <Folder
        name="infra"
        icon={Database}
        iconColor="text-dracula-cyan"
        openIconColor="text-dracula-cyan"
        defaultOpen
      >
        <FileItem name="stack" icon={Blocks} iconColor="text-dracula-purple" />
        <FileItem name="setup" icon={Laptop} iconColor="text-dracula-green" />
        <FileItem
          name="integrations"
          icon={Network}
          iconColor="text-dracula-yellow"
        />
      </Folder>

      <Folder
        name="test"
        icon={Terminal}
        iconColor="text-dracula-orange"
        openIconColor="text-dracula-orange"
        defaultOpen
      >
        <FileItem name="projects" icon={Code} iconColor="text-dracula-pink" />
        <FileItem name="demos" icon={PlayCircle} iconColor="text-dracula-cyan" />
      </Folder>

      <Link href="/blog" className="block w-full">
        <FileItem name="blog" icon={BookOpen} iconColor="text-dracula-yellow" />
      </Link>
    </>
  );

  return (
    <aside
      className={`h-full backdrop-blur-[10px] border-r border-border flex flex-col py-3 shrink-0 overflow-y-auto overflow-x-hidden whitespace-nowrap bg-background/95 lg:bg-transparent absolute lg:static top-0 left-0 z-40 transition-transform duration-300 w-52 lg:w-55 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex flex-col">
        <Folder
          name="src"
          icon={FolderIcon}
          defaultOpen
        >
          {srcContents}
        </Folder>

        <Folder
          name="node_modules"
          icon={FolderIcon}
          defaultOpen={false}
        >
          <FileItem name=".bin" icon={FolderIcon} />
        </Folder>
      </div>
    </aside>
  );
}
