import { Tabs } from "./ui/Tabs";


export function Header() {

  const tabs = [
    {
      title: "Home",
      value: "home",
    },
    {
      title: "Services",
      value: "services",
    },
    {
      title: "Project",
      value: "project",
    },
    {
      title: "About",
      value: "about",
    },
  ];

  return (
    <header>
      <nav>
        <Tabs tabs={tabs} />
      </nav>
    </header>
  )
}