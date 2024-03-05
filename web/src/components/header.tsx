import { Tabs } from "./ui/Tabs";
import { } from 'lucide-react'


export function Header() {

  const tabs = [
    {
      title: "Home",
      value: "/",
    },
    {
      title: "Services",
      value: "services",
    },
    {
      title: "Projetos",
      value: "projects",
    },
    {
      title: "Contato",
      value: "contact",
    },
    {
      title: "Sobre",
      value: "about",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between gap-8 h-10">
      <div className="w-8 h-8">
        <svg viewBox="0 0 181 193" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M98.5469 186.17C152.63 182.92 162.381 151.537 98.5469 0L181 192.081C181 192.081 48.0123 194.149 16.6848 192.081C-14.6426 190.012 5.74897 186.17 16.6848 186.17C27.6207 186.17 44.4634 189.421 98.5469 186.17Z" fill="url(#paint0_linear_220_349)" />
          <defs>
            <linearGradient id="paint0_linear_220_349" x1="283.567" y1="161.779" x2="-69.1143" y2="190.614" gradientUnits="userSpaceOnUse">
              <stop offset="0.191174" stop-color="#737373" />
              <stop offset="0.897107" stop-color="#CECECE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Tabs tabs={tabs} />
      <div className="text-zinc-200">
        <button className="">
          github
        </button>
      </div>
    </header>
  )
}