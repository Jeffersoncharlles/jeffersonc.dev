import { FileJson, GitFork, GridIcon, Search, Settings, User, File, X } from "lucide-react";



export default function VsCode() {

  return (
    <div className="bg-[#232135] overflow-hidden h-[620px] border-zinc-900 w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
      <div className="flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <button className="w-3 h-3 bg-[#ED6A5E] rounded-full"></button>
          <button className="w-3 h-3 bg-[#F4BF4F] rounded-full"></button>
          <button className="w-3 h-3 bg-[#61C554] rounded-full"></button>
        </div>
      </div>
      <div className="grid grid-cols-editor max-h-screen">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col">
            <div className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]">
              <File />
            </div>
            <div className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]">
              <Search />
            </div>
            <div className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]">
              <GitFork />
            </div>
            <div className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]">
              <GridIcon />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button>
              <User />
            </button>
            <button>
              <Settings />
            </button>
          </div>
        </div>
        <div className="py-2 px-4 ">
          <strong className="font-medium text-xs pl-2 flex items-center justify-between uppercase">Explorer</strong>
        </div>
        <div className="h-full relative flex flex-col ">
          <div className="h-9 text-transparent text-sm flex flex-row ">
            <div className="h-full flex items-center gap-[6px] pl-[10px] hover:bg-[#817c9c26] hover:text-[#908caa] data-[active=true]:bg-[#817c9c14] data-[active=true]:text-white">
              <a href="" className="flex gap-[6px] items-center ">
                <span className="text-white">
                  <FileJson />
                </span>
                <span className="text-[#908caa] data-[active=true]:text-[#e0def4] ">dashboard.tsx</span>
              </a>
              <span className="w-7 flex items-center">
                <a href="" className="w-[20px] h-[20px] flex justify-center items-center rounded hover:bg-[#817c9c26]">
                  <X className="text-zinc-400" />
                </a>
              </span>
            </div>
          </div>
          <div className="h-full relative ">
            <div className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent  ">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}